// // let user = {
// //   name: "John",
// //   age: 30
// // };

// // let clone = Object.assign({}, user);

// // clone.name = "pete"

// // console.log(user.name)



// function User(name) {

//     this.name = name;

//     this.sayHi = function() {
//         console.log(`Hi, I am ${this.name}`);
//     };
// }


// let user = new User("ABhishke")
// let user2 = new User("rahul")
// user.sayHi()
// user2.sayHi()


// let id = Symbol("id");

// let user = {
//   name: "John",
//   [id]: 123 // not "id": 123
// };
// console.log(user[id])

// user[id] = 233;
// console.log(user[id])
// console.log(typeof(id))
// console.log(Object.keys(user));


const obj = {

    [Symbol.toPrimitive](hint){

        console.log(hint);

        return 10;
    }
};

console.log(obj )