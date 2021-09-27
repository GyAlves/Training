// Example one 
const user = { name: "Gyas", age: 21 }
console.log("Standard", Object.entries(user))

// Array like 
const houses = { 1: "Slytherin", 2: "Ravenclaw", 3: "Grifindor", 4: "Hufflepuff" }
console.log("Array-like", Object.entries(houses))

// Non-object will be coerced to an object
console.log("Non-Object", Object.entries("HOGWARTS"))

// An empty-array returns for any primitive types except for strings 
console.log("primitive-types", Object.entries(100)); // [ ]

// Iterate over an object 
const houses_rank = {
    Slytherin: 500,
    Ravenclaw: 370,
    Hufflepuf: 250,
    Griffindor: 100
}

console.log()

for (const [house, score] of Object.entries(houses_rank)) {
    console.log(`The house ${house} has ${score} points`)
}

console.log()

// Using array extras 
Object.entries(houses_rank).forEach(([house, score]) => {
    console.log(`House ${house} has won ${score} points !`)
})
console.log()

// Converting object to a Map
const Map_houses = new Map(Object.entries(houses_rank))

