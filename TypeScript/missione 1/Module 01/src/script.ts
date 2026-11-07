let myString : string = "3434"
let myNumber : number = 454353;
let myBoolean : boolean = true;
// let mysSymbol : symbol = symbol();
let myBigInt : bigint = 9n;


const addTwo = (a : number, b : number) : number => {
    return a + b;
}

console.log(addTwo(20, 3));

const arr :string[] = ["rakib","3434", "false"];
arr.push("34342");

const dhakaLetLong :readonly [number, number] = [23.8103, 90.4125];

const concatName = (firstName : string, LastName? : string) => {
    if(!LastName){
        return firstName;
    }
    return firstName + " " + LastName;
}

const fullName = concatName("Rakib", );

const sum =(...numbers : number[]) => {
    return numbers.reduce((total, sum) => total + sum, 0);
}
sum(3,53,54,2345,643,53);

const logUserAction = (...args :[name : string, age : number, isActive : boolean]) => {
    const [name, age] = args;
    console.log(name + "is" + age);
}

type User = {
    name : string;
    age : number;
    isActive : boolean;
}

const usar : User = {
    name : "Rakib",
    age: 25,
    isActive : true
}