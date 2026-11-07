 const greetings = () => {
    console.log("Hello, !")
}

//greetings();

// Literal Types

type status = "pending"
const status : status = "pending"

console.log(status)

// union types

type  idnentity = number | string

const id : idnentity = 123

console.log(id)
