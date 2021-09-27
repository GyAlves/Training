
// Object.assing
const person = {
    name: "Elijah",
    age: 35,
    profession: "Actor",
}

const skills = {
    draw: 7,
    guitar: 4,
    fighting: 10,
    acting: 50
}

const person_skills = Object.assign({}, person, skills)

// Propriedades herdadas e não enumeráveis não podem ser copiadas
// adding the property enumerable as true enables the properties for being copied when assigned
var obj = Object.create({ foo: 1 }, {
    bar: {
        value: 2, // bar is a non-enumerable property.
    },
    baz: {
        value: 3,
        enumerable: true  // baz is an own enumerable property.
    }
})
var copy = Object.assign({}, obj);
