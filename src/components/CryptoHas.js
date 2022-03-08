// (A) LOAD ENCRYPT LIBRARY
const CryptoJS = require("crypto-js");

// (B) SECRET KEY
var key = "ASECRET";

// (C) ENCRYPT
let password = 'Akhlak'
var cipher = CryptoJS.AES.encrypt(password, key);
cipher = cipher.toString();
// console.log(cipher);

// (D) DECRYPT
var decipher = CryptoJS.AES.decrypt(cipher, key);
decipher = decipher.toString(CryptoJS.enc.Utf8);
// console.log(decipher);

// function for Encripted
function Encript(pass){
    var key = "ASECRET";
    let password = pass
    var cipher = CryptoJS.AES.encrypt(password, key);
    cipher = cipher.toString();    
    console.log(cipher)
    // return cipher
}
Encript('Patel')