const parse = require('parse/node')

parse.initialize("BTHHyHlnT3iTQIeNya8Ww3wM9TzQf3xzikgyIl20","teKAjFIWFjET2PAkiqGsdjUOcAHcR677BUt8Ms3M")
parse.serverURL = 'https://parseapi.back4app.com'

let back4app = {};
// create 

back4app.create=()=>{
// let Person = parse.Object.extend('Person')
// let person = new Person()
   // or
let person = new parse.Object('Person') 

person.set('name','Wajid')
person.set('age',23)

person.save()
}

// retrive data from object  
back4app.retrive= async () => {
    let Person = parse.Object.extend("Person")
    let query  = new parse.Query(Person)
    let person = await query.get('Wtp8lHFrO5')
    console.log(person.get('name'))
    console.log(person.get('age'))
    // person.increment('age')
    person.add('number',2)
    // person.add('number',1)
    // person.remove('skills','html')
    // person.remove('skills','html')
    // person.unset('number')
    // person.addUnique('skills','html')
    // person.destroy()
    person.save() 
 }

 //Basic queries || retrive data from class
 back4app.query=async()=>{
     let Person = parse.Object.extend('Person')
     let query = new parse.Query(Person) 
    //  query.equalTo('name','Wajid')
        // query.notEqualTo('age',23)
        // query.greaterThan('age',23)
        // query.lessThan('age',23)
        // query.greaterThanOrEqualTo('age',23)
     let result = await query.find()
     for (let i=0;i<result.length;i++){
         let obj = result[i]
         console.log(obj.get('name'))
         console.log(obj.get('age'))
     }
 }

 // Sorting ,limiting and skipping
 back4app.sorting=async()=>{
     let Person = parse.Object.extend('Person')
     let query = new parse.Query(Person)
     
    // query.descending('age')
    query.ascending('age')
    query.limit(4)
    query.skip(2)
     let result = await query.find()
     for(let i=0;i<result.length;i++){
         let obj = result[i]
         console.log(obj.get('name'))
         console.log(obj.get('age'))
     }
 }

 //Contained and Existing properties
 back4app.container=async()=>{
     let Person = parse.Object.extend('Person')
     let query = new parse.Query(Person)

     //contained
    //  query.containedIn('name',['Wajid','AKhlak'])
    //  query.notContainedIn('name',['Wajid','AKhlak'])

    //Existing
    query.doesNotExist('ag')
     let result = await query.find()
     for(let i=0;i<result.length;i++){
         let obj = result[i]
         console.log(obj.get('name'))
     }
 }

//  Database relation between 1 to 1
    back4app.one2one=async()=>{
        let Person = parse.Object.extend('Person')
        let person = new Person()

        person.set('name','Aayan')
        person.set('age',24)
        person.set('skills',['java','kotlin'])

        let Address = parse.Object.extend('Address')
        let address = new Address()

        address.set('Location','Ujjain')
        address.set('state','MP')
        address.set('Owner',person)
        address.save()
    }
// Database relation between  1 to many
back4app.one2many=async()=>{
    let Person = parse.Object.extend('Person')
    let person = new Person()

    person.set('name','shahrukh')
    person.set('age',30)
    person.set('engineer','tester')

    let Post = parse.Object.extend('Post')
    let postOne = new Post()
    
    postOne.set('title','This is first title')
    postOne.set('desc','This is first description')
    postOne.set('owner',person)

    let postTwo = new Post()
    
    postTwo.set('title','This is secondpost first title')
    postTwo.set('desc','This is second desc')
    postTwo.set('owner',person)

    postOne.save()
    postTwo.save()
}

back4app.user=async()=>{
    // let user =new parse.User()
    // user.set('username','akhlak')
    // user.set('password','123')
    // user.set('email','ak@gmail.com')
    // await user.save();
    let user = await parse.User.logIn('akhlak','123')
    if(user){
        console.log('Successfully loged in')
    }
    else{
        console.log('wrong ')
    }

    // check login or not 
    // back4app.login = async (loginModel) => {
    //     const User = Parse.Object.extend("Ideas");
    //     const query = new Parse.Query(User);
    //     query.equalTo("name", 'akhlak');
    //     query.equalTo("email", 'ak@gmail.com');
    //     let res = await query.find()
    //     if(res.length>=1){
    //         console.log('Login')
    //     }
    //     else {
    //         console.log('Wrong Id or Password')
    //     }
    // };
    
}

export default back4app