const CryptoJS = require("crypto-js");
const Parse = require("parse/node");
Parse.initialize(
  "BTHHyHlnT3iTQIeNya8Ww3wM9TzQf3xzikgyIl20",
  "teKAjFIWFjET2PAkiqGsdjUOcAHcR677BUt8Ms3M"
);
Parse.serverURL = "https://parseapi.back4app.com";

let back4app = {};

// function for Encripted
function Encripted(pass) {
  var key = "ASECRET";
  let password = pass;
  var cipher = CryptoJS.AES.encrypt(password, key);
  cipher = cipher.toString();
  return cipher;
}

//function for Decript
function Decripted(password){
    var key = "ASECRET";
    var decipher = CryptoJS.AES.decrypt(password, key);
    decipher = decipher.toString(CryptoJS.enc.Utf8);
    return decipher
}

// function for create account || signup in back4app
back4app.signup = async (signupModel) => {
  const Signup = new Parse.Object("Signup");
  let data = signupModel;
  let cipher = Encripted(data.password);
  if (signupModel.username !== "" && signupModel.password !== "") {
    Signup.save({
      username: data.username,
      email: data.email,
      password: cipher,
    });
    try {
      let result = await Signup.save();
      console.log("Your Account is Successfully Created", result.id);
    } catch (err) {
      console.log(err, "err");
    }
  } else {
    console.log("Field is required");
  }
};

// fucntion for login account in back4app
back4app.login = async (loginModel) => {
  let User = Parse.Object.extend("Signup");
  let query = new Parse.Query(User);
  query.equalTo("username", loginModel.username);
  let result = await query.find();
  var password = [];
  for (let i = 0; i < result.length; i++) {
    let obj = result[i];
    let IncPassword = obj.get("password");
    password = IncPassword;
  }
  
  query.equalTo("username", loginModel.username);
  query.equalTo("password", password);
  let decipher = Decripted(password)
  let res = await query.find();
  if (decipher == loginModel.password) {
    if (res.length >= 1) {
      console.log("You are loged in");
    }
  } else {
    console.log("Wrong Id or Password! Please check & try again");
  }
};

export default back4app;
