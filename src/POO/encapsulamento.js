class Pessoa {
    #nome // Deixa a propriedade como privada 
    #idade

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }

    apresentar() {
        return `Olá meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade`
    }
}

const person1 = new Pessoa("Gyas", 21)
