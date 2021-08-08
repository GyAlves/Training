
class Person {
    constructor() {
        this._id = Math.floor(Math.random() * 10);
        this._qtd_articles = 0
        this._name = "Article"
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

}

const person1 = new Person()
person1.change_name = "Getters & Setters"
person1.increase_qtd_articles = 10