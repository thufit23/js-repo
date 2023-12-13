let footy_teams = ["Chelsea","Real Madrid"]
let num_ucls = {
    "chelsea":2,
    "real madrid":14,
    getChelseaUCL: function() {
        console.log(`Chelsea has ${this.chelsea} UCLs`)
    }
}
Object.prototype.mayank = function() {
    console.log(`Mayank is present in all objects`)
}

Array.prototype.CFC_blues = function() {
    console.log(`Chelsea is the biggest club in London`)
}

//num_ucls.CFC_blues()
//footy_teams.CFC_blues()

String.prototype.trueLength = function() {
    console.log(`${this}`)
    console.log(`True length is ${this.trim().length}`)
}

"mayank".trueLength()