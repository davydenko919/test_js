// const start = 6;
// const end = 17;
// let number;

// for (number = start; number == end; number++){
//   if (number % 5 === 0){
//     break;
//   }
// }

// console.log(number);

const start = 6;
const end = 17;
let number;

for (let i = start; i <= end; i++) {
    if (i % 5 === 0) {
        number = i;
        break;
    }
}

console.log(number); // Результат буде 10
