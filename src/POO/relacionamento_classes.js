
class Fighter {
    #name
    #age
    #nationality
    #height
    #weight
    #category
    #victories
    #losses
    #evens
    constructor(name, age, nationality, height, weight, category, victories, losses, evens) {

        this.#name = name;
        this.#age = age;
        this.#nationality = nationality;
        this.#height = height;
        this.#weight = weight;
        this.#category = category;
        this.#victories = victories;
        this.#losses = losses;
        this.#evens = evens
    }

    get name() {
        return this.#name
    }

    set name(name) {
        return this.#name = name
    }

    get age() {
        return this.#age
    }

    set age(age) {
        return this.#age = age
    }

    get nationality() {
        return this.#nationality
    }

    set nationality(nationality) {
        return this.#nationality = nationality
    }

    get height() {
        return this.#height
    }

    set height(height) {
        return this.#height = height
    }

    get weight() {
        return this.weight
    }

    set weight(weight) {
        return this.#weight = weight
    }

    get category() {
        return this.#category
    }

    set category(category) {
        return this.#category = category
    }

    get victories() {
        return this.#victories
    }

    set victories(victories) {
        return this.#victories = victories
    }

    get losses() {
        return this.#losses
    }

    set losses(losses) {
        return this.#losses = losses
    }

    get evens() {
        return this.#evens
    }

    set evens(evens) {
        return this.#evens = evens
    }

    introduce() {

    }

    status() {

    }

    win() {

    }

    lose() {

    }

    even() {

    }

}

const pretty_boy = new Fighter("Pretty Boy", 31, "França", 1.75, 68.9, "Leve", 11, 2, 1)
const putscript = new Fighter("Putscript", 29, "Brasil", 1.68, 57.8, "Leve", 14, 2, 3)
const snapshadow = new Fighter("Snap Shadow", 35, "EUA", 1.65, 80.9, "Médio", 12, 2, 1)
const dead_code = new Fighter("Dead Code", 28, "Austrália", 1.93, 81.6, "Médio", 13, 0, 2)
const ufocobol = new Fighter("Ufocobol", 37, "Brasil", 1.70, 119.3, "Pesado", 5, 4, 3)
const nerdaard = new Fighter("Nerdaard", 30, "EUA", 1.81, 105.7, "Pesado", 12, 2, 4)
