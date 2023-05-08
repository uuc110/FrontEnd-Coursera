class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }

    sleep(){
        this.energy += 10;
    }

    doSomethingFun(){
        this.energy -= 10;
    }
}

class Worker extends Person {
    constructor(name = "Tom", age = 20, energy = 100, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }

    goToWork() {
        this.xp += 10;
    }
}

function intern() {
    var intern1 = new Worker("Bob", 21, 110, 0 , 10);
    intern1.goToWork();
    return intern1;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager1 = new Worker("Alice",30,120,100.30);
    manager1.doSomethingFun();
    return manager1;
}




