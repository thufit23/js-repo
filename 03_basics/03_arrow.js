const user = {
    username: "mayank",
    price: 999,
    welcomeMessage: function() {
        console.log(`Welcome to website, ${this.username}`)
    }
}
user.welcomeMessage()
user.username = "shanky"
user.welcomeMessage()

const addTwo = (num1,num2) => ( num1 + num2 )  //Implicit Return