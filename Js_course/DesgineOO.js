class Animal{
    constructor(color, energy) {
        this.color = color;
        this.energy = energy;
    }

    isActive(){
        if(this.energy === 0){
            this.sleep();
        }
        this.energy = 0;
    }

    sleep(){

    }

    getColor(){
        console.log(this.color);
    }
}

class Cat extends Animal{
    constructor(color, energy, sound, canJumpHigh,canClimbTrees) {
        super(color, energy);
        this.sound = sound;
        this.canJumpHigh = canJumpHigh;
        this.canClimbTrees = canClimbTrees;
    }

    makeSound(){

    }
}

class HouseCat extends Cat{
    constructor(color, energy, sound, canJumpHigh,canClimbTrees,houseCatSound) {
        super(color, energy, sound, canJumpHigh,canClimbTrees);
        this.houseCatSound = houseCatSound;
    }

    makeSound(option = true) {
        super.makeSound();
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat{
    constructor(color, energy, sound, canJumpHigh,canClimbTrees, tigerSound) {
        super(color, energy, sound, canJumpHigh,canClimbTrees);
        this.tigerSound = tigerSound;
    }
}

