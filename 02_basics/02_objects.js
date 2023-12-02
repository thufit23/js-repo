const mySym = Symbol("key1")
const JsUser = {
    name: "Mayank",
    age: 21,
    [mySym]: "mykey1",
    location: "Jamshedpur",
    email: "mayank23@bing.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

//console.log(JsUser.email)
//console.log(JsUser["email"])
//console.log(JsUser[mySym]);

JsUser.email = "mayank757@gmail.com"
//Object.freeze(JsUser)
JsUser.email = "mayank757@chatgpt.com"
//console.log(JsUser);
JsUser.greeting = function() {
    console.log("Hello JS User")
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())