// ?Создайте функцию, которая принимает два аргумента - числа - и возвращает их сумму.


// function sum(a, b) {
//     console.log(a + b)
// }

// sum(10,20)


// ?Напишите функцию, которая принимает строку и возвращает эту же строку, 
// ?но с первой буквой заглавной.

// function firstLetter(str) {
//     if (!str) return str;
  
//     return str[0].toUpperCase() + str.slice(1);
//   }

//   console.log(firstLetter('begimai'))
  

  



// ?Создайте функцию, которая принимает массив чисел и возвращает новый массив, 
// ?в котором каждый элемент увеличен на 1.

//   const arr = [1,2,3,4,5]

//   const massive = arr.map((elem,index,curArr)=>{
//     return elem + 1
//   })
//   console.log(massive);


//? Напишите функцию, которая принимает строку и символ, и возвращает количество раз,
// ? которое символ встречается в этой строке.

// const arr3 = ['kncj$^U@bjRvn', 'lbksjcnmbvj', 'vhjbghfghjJK']

// const newArr3 = arr3.map((far)=>{
//     return  'length: ' + far.length
// })
// console.log(newArr3);


// ?Создайте функцию, которая принимает массив чисел и возвращает сумму всех элементов, 
// ?которые делятся на 3.


// const sumArray = (arr) => {
//    let sum = 0
//     for(let i = 0 ;i< arr.length; i++) {
//         if (arr[i] % 3 === 0){
//             sum += arr[i]
//         }
//     }
//     return sum
// }

// const twoarr = [1,2,3,6,7,9,12];
// const result = sumArray(twoarr);
// console.log(result);

// ?Напишите функцию, которая принимает строку и возвращает новую строку,
// ? в которой каждый символ повторяется дважды.
 


// const doubleTown=(str) => {
// let str1='  '
// for(let i = 0; i<str.length; i++){
//     str1 += str[i]+str[i]
// }
// return str1
// }
// const town = ['Bishkek ', 'Singapur ','Osh ',' London ']

// console.log(doubleTown(town))





//? Создайте функцию, которая принимает массив чисел и возвращает новый массив, 
// ?в котором все отрицательные числа заменены на ноль.

// const getSummArray = (arr) => {
//     let oneArr = []
//     for (let i = 0; i<arr.length; i++){
//         if(arr[i]<0){
//             oneArr.push(0)
//         }else{
//             oneArr.push(arr[i])
//         }
//     }
//     return oneArr
// }

// const arr2 = [1,2,-3,-5,7,-12,10]
// console.log(getSummArray(arr2))



//? Напишите функцию, которая принимает число и возвращает true, если это число является простым, 
// ?и false в противном случае.

// const arr = [1,2,3,5,44,11]

// const trueOrFalse = (number) =>{
//     if(number < 2){
//         return false
//     }
//     for ( let i = 2; i<number; i++){
//         if(number % i === 0){
//             return false
//         }
//     } 
//     return true 
// }

// console.log(trueOrFalse(arr))





// ?Создайте функцию, которая принимает массив чисел и возвращает новый массив, 
// ?в котором каждый элемент является квадратом исходного элемента.

// const number = [1,2,3,4,5]

// const newArray = (arr) => {
// const result = []
// for (let i=0; i<arr.length; i++ ){
//     result.push(arr[i]*arr[i])
// }
// return result
// }

// console.log(newArray(number));




//? Напишите функцию, которая принимает массив объектов и возвращает новый массив, 
// ?содержащий только те объекты, у которых значение свойства "completed" равно true.
// const obj = [{
//     name : 'Begimai' },
//    { age : 20
// }]
//  const completedArr = (arr) =>{
//     const result =[]
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i].completed === true){
//             result.push(arr[i])
//         }
//     }
//     return result
//  }
//  console.log(completedArr(obj))




//? Создайте функцию, которая принимает две строки и возвращает true, 
// ?если они являются анаграммами (т.е. содержат одни и те же буквы в разном порядке), 
// ?и false в противном случае.

// const a = 'Bishkeks'
// const b = 'bishkek'
// const newStr = (str1, str2) =>{

//     str1 = str1.replace('').toLowerCase();
//     str2 = str2.replace('').toLowerCase();
    

//     if (str1.length !== str2.length) {
//       return false;
//     }
//     return true
// }
// console.log(newStr(a,b))


// ?Напишите функцию, которая принимает два массива чисел и возвращает новый массив, 
// ?содержащий только те элементы, которые встречаются в обоих массивах.

// const a = [1,2,4,6,7,8]
// const b = [2,3,5,6,8,9]

// const newArr =(arr1, arr2) =>{
//     let result = [];
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr2.indexOf(arr1[i]) !== -1 && result.indexOf(arr1[i]) === -1) {
//         result.push(arr1[i]);
//       }
//     }
//     return result;
//   }
//   console.log(newArr(a,b))



// ?Создайте функцию, которая принимает строку и возвращает новую строку, 
// ?в которой все гласные буквы заменены на символ "*".

// const str = 'Bishkek, Osh, Naryn, Talas, Chui'
// const getNewStr=(str) =>{
//     let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//       if (vowels.indexOf(str[i].toLowerCase()) !== -1) {
//         newStr += '*';
//       } else {
//         newStr += str[i];
//       }
//     }
//     return newStr;
//   }
//   console.log(getNewStr(str))



//? Напишите функцию, которая принимает массив строк и возвращает новый массив, 
// ?в котором каждая строка имеет обратный порядок символов.

//  const newArr =['Bishkek', 'Singapur', 'Osh']

//   const string = (arr) => {
//     let result = []
//     for (var i = 0; i < arr.length; i++) {
//         result.push(arr[i].split('').reverse().join(''));
//       }
//       return result;
//     }
//     console.log(string(newArr))
  