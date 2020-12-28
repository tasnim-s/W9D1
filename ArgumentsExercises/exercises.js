function sum() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

function sum(...args){
    return args.reduce(function(accumulator, element){
        return accumulator + element;
    });
}


// function sum(...args) {
//     let sum = 0;
//     args.forEach(function(element){
//         sum += element;
//     });
//     return sum;
// }

// From notes for reference
// Function.prototype.myBindNotes = function (ctx, ...bindArgs) {
//     debugger
//     const fn = this; // capture scope before defining function
//     // ... (rest operator) for callArgs and bindArgs to work for any function with any number of args given at bind or call time
//     return function (...callArgs) {
//       debugger
//       // use scope of fn here
//       return fn.apply(ctx, bindArgs.concat(callArgs));
//     };
//   };


// Function.prototype.myBind = function(context, ...bindArgs){
//     const SCOPE = this;
//     return function (...callArgs){
//         return SCOPE.apply(context, bindArgs.concat(callArgs));
//     };    
// };


Function.prototype.myBind = function(context){
    const SCOPE = this;
    const bindArgs = Array.from(arguments);
    debugger;
    return function (){
        const callArgs = Array.from(arguments);
        debugger;
        return SCOPE.apply(context, bindArgs.slice(1).concat(callArgs));
    };    
};
// console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
        debugger;
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  
  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true

//   function curriedSum(numArgs){
//     let numbers = [];
//     const SCOPE = this;
//     function _curriedSum (num){
//         numbers.push(num);
//         if (numbers.length === numArgs){
//             return numbers.reduce(function(accumulator, element){
//                 return accumulator + element;
//             });

//             //  this doesnt work right, scope was ok but gives back array
//             // return sum(numbers);
//         }
//         else{
//             return _curriedSum;
//         }
//     };
//     return _curriedSum;
//   };

//   const scum = curriedSum(4);
//   console.log( scum(5)(30)(20)(1)); // => 56


Function.prototype.curry = function(numArgs) {
    const SCOPE = this;
    const args = [];

    function _curry(arg){
        args.push(arg);
        if( numArgs === args.length){
            return SCOPE(...args);
        }
        else{
            // return _curry;
            return;
        }
    }
    return _curry;
};

function sumThree(num1, num2, num3) {
    return num1 + num2 + num3;
  }
  
//   sumThree(4, 20, 6); // == 30
  
//   // you'll write `Function#curry`!
//   let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
//   f1 = f1(4); // [Function]
//   f1 = f1(20); // [Function]
//   f1 = f1(6); // = 30
  
//   // or more briefly:
//   let x = sumThree.curry(3)(4)(20)(6); // == 30
//   console.log(x);