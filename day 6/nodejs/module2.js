// mothod1
// const obj=require('./module1')
// obj.fn1(2,3);
// obj.fn2(5,3);


// method2
// const obj=require('./module1')

// obj.sum(4,5);
// obj.sub(5,3);
// console.log(obj.name)


// method3
//destructuring objects
const {sum,sub,name } =require('./module1')
sum(2,3)
sub(4,5)
console.log(name);