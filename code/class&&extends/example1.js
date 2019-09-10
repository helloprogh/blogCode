class Person {
    constructor(name) {
        this.maxage = 100;
        this.name = name
    }
}
class Programmer extends Person {
    constructor(name) {
        super(name);
        this.job = 'coding'
    }
}
const personA = new Person('xiaoming')
const programmerB = new Programmer('xiaozhi')

console.log(personA.hasOwnProperty('maxage'));
console.log(programmerB.hasOwnProperty('maxage'));