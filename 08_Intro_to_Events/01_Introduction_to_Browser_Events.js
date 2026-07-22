
// let str = 'As sly as a fox, as strong as an ox';

// let target = 'as'; // let's look for it

// // let pos = 0
// let res = []


// // while(true){
// //     let foundpos = str.indexOf(target , pos)

// //     if(foundpos == -1)break
// //     res.push(foundpos)


// //     pos = foundpos + 1

// // }
// // console.log(res)


// let pos = -1 ;

// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//   res.push(pos);
// }

// console.log(res)
let arr = [1,2,]

let obj = {
    name : "abhi",
    length : 1,
    
}
let arrc = arr.concat(obj)


console.log(arrc)

let obj2 = {
    0 : "abhi",
    1 : 1, 
    [Symbol.isConcatSpreadable] : true,
    length : 2
}

let arrc2 = arr.concat(obj2)
console.log(arrc2)

