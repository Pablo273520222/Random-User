export class Person {
    #picture;
    #name;
    #email;
    #location;
    #phone;
    #currentime;

    constructor(picture, name) {
        this.#picture = picture;
        this.#name = name;
    }

    get picture() {
        return this.#picture;
    }

    get name() {
        return this.#name;
    }

    get email() {
        return this.#email;
    }

    set email(email) {
        this.#email = email;
    }

    get phone() {
        return this.#phone;
    }

    set phone(phone) {
        this.#phone = phone;
    }

    get location() {
        return this.#location;
    }

    set location(location) {
        this.#location = location;
    }

    get currentime() {
        return this.#currentime;
    }

    set currentime(currentime) {
        this.#currentime = currentime;
    }
}

const person = new Person('img/picture', 'John Doe');