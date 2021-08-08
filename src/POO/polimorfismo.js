class Mammal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("SOOUND")
    }
}

class Dog extends Mammal {
    constructor(name) {
        super(name)
    }

    makeSound() {
        console.log("AU AU")
    }
}

const animal = new Mammal("Wolf")
const dog = new Dog("Obie")
dog.makeSound()