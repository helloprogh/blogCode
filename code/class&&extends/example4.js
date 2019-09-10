let obj = {
    name: 'obj'
}
class Person {
    constructor(obj) {
        this.maxage = 100;
        this.name = name;
        this.obj = obj;
    }
    eat() {
        console.log('eat food')
    }
}
class Programmer extends Person {
    constructor(name) {
        super(name);
        this.job = 'coding'
    }
    coding() {
        console.log('coding world')
    }
}

const personA = new Person('xiaoming')
const programmerB = new Programmer('xiaohei')
console.log(personA.obj === programmerB.obj);