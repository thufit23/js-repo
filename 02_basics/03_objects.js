const fpl_user = new Object()
const fpluser = {}
fpluser.id = "abra_dubravka45"
fpluser.name = "Heisenberg"
fpluser.isLoggedIn = false

const regularUser = {
    email: "timowanker438@fpl.com",
    fullname: {
        userfullname: {
            firstname: "Mayank",
            lastname: "Kumar"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname)
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);
/*console.log(Object.keys(fpluser))
console.log(Object.values(fpluser))
console.log(Object.entries(fpluser))
console.log(fpluser.hasOwnProperty('isLoggedIn')) */

const course = {
    coursename: "Javascript",
    price: 1000,
    courseInstructor: "Mayank"
}
const {courseInstructor: instr} = course
console.log(instr);