// function sum() {
//     let sum = 0;
//     for(let i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }

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

console.log(sum(1, 2, 3, 4) === 10);
console.log(sum(1, 2, 3, 4, 5) === 15);