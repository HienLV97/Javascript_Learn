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

// function test2333() {
//     var dulieu = '';
//     for (var param of arguments) {
//         dulieu += `${param} + `
//     }
//     console.log(dulieu)
// }
// test2333('Data1', 'dat2', 'data3', 'data4')


// function test() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `
//     }
//     console.log(myString)
// }
// test('Log1', 'l2', 'log3', 'log33')

// // Return trong hàm 
// function cong(soA, soB) {
//     return soA + soB
// }
// var result = cong(20, 8)
// console.log(result)/

// for (isConfirm==true; isConfirm = false;i++){
//     var isConfirm = confirm('Bạn đồng ý rằng Hiển đẹp trai chứ?')
// }

// var isConfirm = false
// while(!isConfirm) {
//     isConfirm = confirm('Hien dep trai?')

// }

// var ab = 10
// var abc = ab--
// console.log(abc)
// console.log(ab)

// var a = 10;
// var b = ++a * a--;
   

// console.log('So b:'+b)
// console.log('So a:'+a)

// var coursesStr = 'HTML & CSS, JavaScript, ReactJS';

// function strToArray(str) {
//     return str.split(', ')
// }
// // Expected results 
// console.log(strToArray(coursesStr)) 

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

// function isNumber(value) {
//     return isNaN(value) == false &&  typeof value === 'number'
// }

// // Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false

/*
1. toString
    - chuyển từ array => chuỗi
    - languages.toString()
2. Join
    - languages.join(', ')
3. Pop
    - xóa đi phần tử cuối mảng và trả về phần tử đã xóa
     languages.pop()
4.  push
    - thêm phần tử vào cuối mảng
    languages.push('abc')
5. Shift
    - xóa đi 1 phần tử ở đầu mảng và trả về phần tử đã xóa
    languages.shift()
6. Unshift
    - Thêm đi 1 phần tử ở đầu mảng và trả về độ dài mới của mảng
    languages.unshift('abc','edf')
7 Splicing
    - Xóa(chèn) 1 phần tử bất kì trong mảng bằng cách đếm index
    xóa: languages.splice(1,2)
    chèn: languages.splice(1,0,'das') (đếm index, xóa bao nhiêu kí tự, chèn kí tự)
8. Concat
    merge 2 array
    languages2.concat(language)
9 Slicing
    - cắt phần tử trong mảng
    languages.slice()
    languages.slice(0) thì thành coppy array
    

*/
/*
Làm việc với mảng #1

Cho trước hàm joinWithCharacter có 2 tham số là array và charactor,
 hãy hoàn thành phần nội dung hàm sao cho hàm trả về 1 chuỗi là kết quả của việc
nối từng phần tử của mảng với charactor.
function joinWithCharacter(array, charactor) {
    return cars.join(charactor)
}


Ví dụ khi sử dụng
var cars = ['Honda', 'Mazda', 'Mercedes'];

var result = joinWithCharacter(cars, ' - ');

console.log(result); // Expected: "Honda - Mazda - Mercedes"
console.log(typeof result); // Expected: "Honda - Mazda - Mercedes"
*/
/*
Làm việc với mảng #2
Cập nhật tháng 3 năm 2022

Để vượt qua thử thách này, hãy tạo hàm getLastElement có 1 tham số
 (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array), hàm này sẽ trả về phần tử cuối cùng trong mảng.
 */// Viết hàm tại đây
// function getLastElement(animals){
//     return animals.slice(0,1).toString()
//     // return 
// }

// var animals = ['Monkey', 'Tiger', 'Elephant','cop','ha ma','su tu'];
// var result = getLastElement(animals);

// console.log(result); // Expected: "Elephant"
// console.log(animals); // Expected: ['Monkey', 'Tiger', 'Elephant']

// var school = 'test'

// var myInfo = {
//     name: 'Hien',
//     age: 26,
//     address: 'DN',
//     country: 'VN',
//     [test]: 'THPT Thai Phien'
// }
// myInfo.email = 'hiendep@gmail.com'
// myInfo['emai-name'] = ['hien le']
// console.log(myInfo)
// var myage = 'age'
// console.log(myInfo[myage])
/*
 !  Bài 76 
  function User(firstName,age,school,marriage) {
    this.firstName = firstName,
    this.age = age,
    this.school = school,
    this.marriage = marriage,
    this.info = function(){
        return `${this.firstName} ${this.age}`
    }
}
var hien = new User('LV Hien','26','Thai Phien','Y')

var Quynh = new User('LV ','56','Thai Phien','n')
console.log(hien.info())
console.log(Quynh)
*/

// !Bài 78 + 80
/*  
function User(firstName,age,school,marriage) {
    this.firstName = firstName,
    this.age = age,
    this.school = school,
    this.marriage = marriage,
    this.info = function(){
        return `${this.firstName} ${this.age}`
    }
}
var hien = new User('LV Hien','26','Thai Phien','Y')

var Quynh = new User('LV ','56','Thai Phien','n')
User.prototype.depTrai = 'Yes'

console.log(hien.depTrai)

console.log(hien)
console.log(Quynh)
*/
// ! Bài 80 date
// var date = Date() thì sẽ lấy ra chuỗi string
// var date = new Date()
// var year = date.getFullYear()
// var month = date.getMonth() +1
// var day = date.getDate()
// console.log(date)
// console.log(date.getFullYear())
// console.log(typeof year)
// console.log(date.getMonth()+1)
// console.log(date.getDate())
// console.log(date.getTime())

// console.log(`${day}/${month}/${year}`)
// var date = new Date()
// var nextYear = date.getFullYear()
// console.log(nextYear)
// function getNextYear(){
//      return nextYear + 1
// }
// console.log(getNextYear())

//! Math object
// console.log(Math.PI)
// console.log(Math.round(3.64235))
// console.log(Math.abs(-5)) //* giá trị tuyệt đối
// console.log(Math.ceil(3.00003)) //* làm tròn trên
// console.log(Math.floor(4.9)) //* làm tròn dưới
// console.log(Math.min(10,2,4,5,6,21,6,234,23,1,2,4,-1,23))
// console.log(Math.max(10,123,4,1235,234,653246,3246,1,4))
// console.log(Math.floor(Math.random()*3))
// var cuongHoa = Math.floor(Math.random()*100)
// if (cuongHoa <20){
//     console.log('Cuong hoa thanh cong')
// }else{
//     console.log('Fail')
// }

var ranDom=[
   '1','2'
]
console.log(ranDom.length)
const getRandomItem = (ranDom) => {
    return  this.ranDom = ranDom[Math.random()]
    return console.log(ranDom)
}
console.log(getRandomItem())


let Item = ['Keo','bua','bao' ];
const getRandomItem = (Item) => {
     return Item[Math.floor(Math.random()*Item.length)] 
}

console.log(getRandomItem(Item))

// ! if
// function run(a) {
//     if(a % 15 == 0){
//         return this.a = 3
//      }
//      if(a % 3 == 0){
//        return this.a = 1 
//     }
//     if(a % 5 == 0){
//         return this.a = 2 
//     }
// }
// function run(a) {
//     if (a % 3 === 0 && a < 5){
//         return 1;
//     }
//     else if (a % 5 === 0 && a < 15){
//         return 2;
//     }
//     else if (a % 15 === 0){
//         return 3;
//     }
// }



// Kỳ vọng
// console.log(run(15)) // 3
// console.log(run(3)) // 1
// console.log(run(5)) // 2

// function run(fruits) {
//     var result;

//     switch (fruits) {
//          case "Banana": 
//             result = "This is a Banana";
//             break
//         case "Apple":
//             result = "This is an Apple";
//             break;
//         default:
//              result = "No fruits";
//     }

//     return result;
// }
//!toán tử 3 ngôi

// var course ={
//     name: 'test',
//     cost: 0
// }

// var result =course.cost > 0 ? `${course.cost} Coin` : "Free"
// console.log(result)

// Làm bài
// function getCanVoteMessage(age){
//     return age >= 18 ? "Bạn có thể bỏ phiếu" : "Bạn chưa được bỏ phiếu"
// }



// Kỳ vọng
console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'
