// Surrogate version of inheritance
// Function.prototype.inherits = function(parentClass){
//     const child = this;
//     function surrogate(){};
//     surrogate.prototype = parentClass.prototype;
//     child.prototype = new surrogate();
//     child.prototype.constructor = child;
// };

// Object.create version of inheritance
Function.prototype.inherits = function(parentClass){
    this.prototype = Object.create(parentClass.prototype);
};

function MovingObject () {
}

MovingObject.prototype.speed = function(num){

    if (num > 10)
        console.log("I am fast");
    else
        console.log("I am slow.");
}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

const myShip = new Ship();
const myAsteroid = new Asteroid();
const myMovingObject = new MovingObject();

myShip.speed(9);
myAsteroid.speed(9000);
myMovingObject.speed(5);