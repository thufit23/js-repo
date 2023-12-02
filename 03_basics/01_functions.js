function calculateCartPrice(...num1) {
      return num1
}
console.log(calculateCartPrice(100,200,400,500))
const user = {
    username: "mayank",
    price: 200
}
function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)
handleObject({username: "shanky",price:500})
const newArray = [200,400,324,985,124]
function getSecondValue(getArray) {
    return getArray[1]
}
console.log(getSecondValue(newArray))