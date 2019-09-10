class Person {
    constructor(name) {
        this.maxage = 100;
        this.name = name;
        this.obj = {
            name: 'obj',
            secondObj: {
                name: 'secondObj'
            }
        };
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
console.log(personA.obj === programmerB.obj)
console.log(personA.obj.secondObj === programmerB.obj.secondObj)