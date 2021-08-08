class Person {
    constructor(profession) {
        this._id = Math.floor(Math.random() * 10);
        this._qtd_articles = 0
        this._name = "Article"
        this._profession = profession
    }

    get id() {
        return this._id
    }

    get articles() {
        return this._qtd_articles
    }

    set increase_qtd_articles(qtd_articles) {
        return this._articles = qtd_articles
    }

    get name() {
        return this._name
    }

    set change_name(article_name) {
        return this._name = article_name
    }

    introduction() {
        console.log(`Hello, i'm ${this.name} i have ${this.articles} articles and my profession is a ${this._profession}`)
    }

}

class Student extends Person {
    constructor(grade) {
        super("Escravo proletário");
        this.grade = grade
    }

    introduction() {
        super.introduction()
        console.log(`My grade is ${this.grade}`)
    }
}

const person1 = new Person()
const student = new Student("Ensino superior")

//---------------------------------------------------

class Mammal {
    constructor(species, name, age) {
        this.species = species;
        this.name = name;
        this.age = age;
        this.mamaryGland = true
    }

    incrementAge() {
        this.age++
    }
}

class Lion extends Mammal {
    constructor(species, name, age, manEater) {
        super(species, name, age)
        this.manEater = manEater
    }
    eatZebras(animals) {
        return animals.filter(animal => animal.species !== "Zebra")
    }
}

const zeca = new Mammal("Zebra", "Zeca", 6);
const pompeu = new Mammal("Gnu", "Pompeu", 5);
const angus = new Mammal("Cavalo", "Angus", 10);

const mufasa = new Lion("Leão", "Mufasa", 8)

const animals = [zeca, pompeu, angus]

console.log(mufasa.eatZebras(animals))