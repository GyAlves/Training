function Person(first, last, age, gender, interest) {
    this.name = {
        first,
        last
    }

    this.age = age;
    this.gender = gender;
    this.interest = interest
}

let gyasmin = new Person("Gyasmin", "Assunção", 21, "female", ["Reading", "music"])


Person.prototype.introduce = function () {
    console.log(`Olá meu nome é ${this.name} e eu tenho ${this.age} anos`)
}