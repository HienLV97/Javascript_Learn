//khai bao bien

var age = 26;

// Call ham thong bao
// alert(fullName)
// alert(age)

//console.log(fullName)
a
// confirm('Hãy xác nhận rằng Hiển dedjp trai')

//prompt('Xac nhan bạn đủ tuổi:')   

// setTimeout(function(){
//     alert('Hien dep trai')
// }, 2000)

//console.log(age)

//setInterval như settimeout nhưng lập lại liên tục theo time ấn định 
// setInterval(function(){
//     console.log('Hien dep trai')
// }, 2000)

// var a = 'abc';
// var b = 'def';
// var space

// var c = a + ' ' + b;
// console.log(c)

// var sochan = 5
// var so2 = 2;
// var c = sochan % so2
// if (c == 0 ){
//     console.log('so chan')
// } else{
//     console.log('so le')
// }

var number2 = 5
var number = 5
var output = number-- + number-- + number-- + number--;
var output2 = number2 + --number2 + --number2 + --number2


// console.log(number)
// console.log(output) 
// console.log(output2)
 
var a = 'abc'
var b = 'cde'
var c = 'z'
var result = 'aZ' || 'Zz' || undefined || 'cc' || 'zz'
//var result ='A' && 'B' && 'C' || 'D'
//console.log(result)


var ten = 'Hien'
var ho = 'Le'
var lot = 'Vinh'
var fullName = '   Hien JS JS abc xasd acsc JS JS J S   ';

// console.log(fullName.search('JS'))
// console.log(fullName)
// //console.log(fullName.slice(-3,-1 ))
// console.log(fullName.replace(/JS/g,'JavaScript'))

// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.trim())
// var languages = 'Javascript, PHP, Ruby'
// console.log(languages.split(''))

var languages = [
    '1', 
    '2', 
    '3'];
console.log(languages)
//console.log(languages.join('a'))
console.log(languages.pop()) // xóa phần tử cuối mảng
console.log(languages.push('a')) // thêm phần tử cuối mảng
console.log(languages.shift())// xóa phần tử đầu mảng
console.log(languages.unshift('b','c'))// thêm phần tử đầu mảng
console.log(languages)
languages.splice(1,0,'4','5','6')
console.log(languages)

var languages2 =[
    'test1',
    'test2',
    'test3'
]
console.log(languages.concat(languages2))// nối Array
console.log(languages)
console.log(languages.slice(3))
function Hiendeptrai(){
    alert('Hiển đẹp trai')
};
Hiendeptrai();