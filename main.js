//khai bao bien

// var age = 26;

// Call ham thong bao
// alert(fullName)
// alert(age)

//console.log(fullName)

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

// var number2 = 5
// var number = 5
// var output = number-- + number-- + number-- + number--;
// var output2 = number2 + --number2 + --number2 + --number2


// console.log(number)
// console.log(output) 
// console.log(output2)

// var a = 'abc'
// var b = 'cde'
// var c = 'z'
// var result = 'aZ' || 'Zz' || undefined || 'cc' || 'zz'
//var result ='A' && 'B' && 'C' || 'D'
//console.log(result)


// var ten = 'Hien'
// var ho = 'Le'
// var lot = 'Vinh'
// var fullName = '   Hien JS JS abc xasd acsc JS JS J S   ';

// console.log(fullName.search('JS'))
// console.log(fullName)
//console.log(fullName.slice(-3,-1 ))
// console.log(fullName.replace(/JS/g,'JavaScript'))

// console.log(fullName.toUpperCase())
// console.log(fullName.toLowerCase())
// console.log(fullName.trim())
// var languages = 'Javascript, PHP, Ruby'
// console.log(languages.split(''))


// var languages = [
//     'Javascript', 
//     'PHP', 
//     'Ruby'];
// console.log(languages)
// console.log(languages.join('a'))

// function writeLog(message,message2,message3){
//     if (message){
//         console.log(message)
//     } 

//     console.log(message2)
//     console.log(message3)

// }
// writeLog('a chuong')

function test2333() {
    var dulieu = '';
    for (var param of arguments) {
        dulieu += `${param} + `
    }
    console.log(dulieu)
}
test2333('Data1', 'dat2', 'data3', 'data4')


function test() {
    var myString = '';
    for (var param of arguments) {
        myString += `${param} - `
    }
    console.log(myString)
}
test('Log1', 'l2', 'log3', 'log33')

// Return trong hàm 
function cong(soA, soB) {
    return soA + soB
}
var result = cong(20, 8)
console.log(result)

// for (isConfirm==true; isConfirm = false;i++){
//     var isConfirm = confirm('Bạn đồng ý rằng Hiển đẹp trai chứ?')
// }

// var isConfirm = false
// while(!isConfirm) {
//     isConfirm = confirm('Hien dep trai?')

// }

var ab = 10
var abc = ab--
console.log(abc)
console.log(ab)

var a = 10;
var b = ++a * a--;
   

console.log('So b:'+b)
console.log('So a:'+a)

var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

function strToArray(str) {
    return str.split(', ')
}
// Expected results 
console.log(strToArray(coursesStr)) 

// Output: ['HTML & CSS', 'JavaScript', 'ReactJS']


// var languages = 'Javascript, PHP, Ruby'
// console.log(languages.split(''))

// Đối tượng Number

// Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:
// Phương thức 	Vai trò
// Number.isFinite() 	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// Number.isInteger() 	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// Number.parseFloat() 	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
// Number.parseInt() 	Chuyển đổi chuỗi đã cho thành một số nguyên
// Number.prototype.toFixed() 	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// Number.prototype.toString() 	Chuyển đổi và trả về số đã cho dưới dạng chuỗi

function isNumber(value) {
    return isNaN(value) == false &&  typeof value === 'number'
}

// Expected results:
console.log(isNumber(999)); // true
console.log(isNumber('abc')); // false
console.log(isNumber('100')); // false

console.log(isNumber(NaN)); // false
console.log(isNumber(100 / 'abc')); // false