class Train{
    constructor(color, lightOn){
        this.color = color;
        this.lightOn = lightOn;
    }

    toggleLights(){
        this.lightOn = !this.lightOn;
    }
    lightsStatus(){
        console.log('Lights on?', this.lightOn);
    }

    getSelf(){
        console.log(this);

    }

    getPrototype(){
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// new Train("red", false);
var myFirstTrain = new Train('red', false);
var train4 = new Train('red', false);
console.log(myFirstTrain);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype();
