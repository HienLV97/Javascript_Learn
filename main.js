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
//! Cách truyển param vào function
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

// Expected results:
// console.log(isNumber(999)); // true
// console.log(isNumber('abc')); // false
// console.log(isNumber('100')); // false

// console.log(isNumber(NaN)); // false
// console.log(isNumber(100 / 'abc')); // false
//! Các hàm array
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

// var ranDom=[
//    '1','2'
// ]
// console.log(ranDom.length)
// function getRandomItem(ranDom) {
//     return  this.ranDom = ranDom[Math.random()]
//     return console.log(ranDom)
// }
// console.log(getRandomItem())


// var Item = ['Keo','bua','bao' ]
// var getRandomItem = function(Item) {
//      return Item[Math.floor(Math.random()*Item.length)] }

// console.log(getRandomItem(Item))

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
// console.log(getCanVoteMessage(18)) // 'Bạn có thể bỏ phiếu'
// console.log(getCanVoteMessage(15)) // 'Bạn chưa được bỏ phiếu'

// ! vòng lặp for
// for (i =1; i <= 100; i++){
//     console.log(i)
// }
/*
Tạo danh sách số ngẫu nhiên
Cập nhật tháng 4 năm 2022

Để vượt qua thử thách này, bạn cần kết hợp nhiều kiến thức đã học như:
 làm việc với array, đối tượng Math và loop.

👉 Hãy tạo hàm getRandNumbers có 3 tham số là min, max, length.
Hàm này sẽ trả về một mảng gồm length phần tử, các giá trị trong mảng là số ngẫu nhiên,
 giá trị trong khoảng từ min tới max.

Gợi ý: Math.random() * (max - min) + min là cách tạo ra 1 số ngẫu nhiên 
 trong khoảng min - max.
*/
// Làm bài




// function getRandNumbers(min, max, length) {
//     return mang = [Math.random() * (this.max - this.min) + this.min]
// }



// function getRandNumbers1(min, max, length) {
//     return a = [Math.random() * 4 + 1];
// }



/* for (i = 1; i <= 10; i++) {
    console.log(getRandNumbers())
}

console.log('----------------------------------------')

for (i = 1; i <= 10; i++) {
    console.log(getRandNumbers1(a))
}
 */
// Làm bài 

/* var min =1
var max =5
var length = 3
function getRandNumbers(min, max, length) {
    aBc = []
    for (i = 1; i = this.length; i++) {
        add = Math.random() * (this.max - this.min) + this.min
        this.aBc.push(add)     
    }
    return aBc
}
console.log(getRandNumbers()) */
/**
 * Hết sức lưu ý: Hãy suy nghĩ kỹ để đảm bảo vòng lặp (loop)
 * luôn có điểm dừng, trình duyệt của bạn sẽ bị treo
 * nếu vòng lặp không có điểm dừng.
 * 
 * VD 1: for (var i = 0; i < 100; i--) // i++ mới đúng
 * VD 2: for (var i = 100; i >= 0; i++) // i-- mới đúng
 * là 2 vòng lặp không có điểm dừng (lặp vô hạn)
 * 
 * => Treo trình duyệt!!!
 *//* 
var min =1
var max =5
var length = 3
function getRandNumbers(min,max,length){
var aBc =[]
for (i = 1; i <= this.length; i++) {
var  add = Math.random() * (this.max - this.min) + this.min
aBc.push(add)     
}
return aBc
}
console.log(getRandNumbers()) */
/* arr = [1, 2, 3, 4, 5, 6]
var a
var sum = 0
for (i = 0; i <= arr.length-1; i++) {
    let a = parseInt(arr.slice(i,i+1).toString())
    sum += a
} */

/* function getTotal(arr) {
    var a
    var sum = 0
    for (i = 0; i <= this.arr.length - 1; i++) {
        let a = parseInt(this.arr.slice(i, i + 1).toString())
        sum += a
    } return sum
}
console.log(getTotal()) */
console.log('still active')
/* 
function getTotal2(arr){
    var a
    var sum = 0
    for (i =this.arr.length; i >= 1; i--) { 
        let a = parseInt(this.arr.slice(this.arr.length-1,this.arr.length).toString())
        // console.log(a)
        this.arr.pop()
        sum += a
    } return sum
}
console.log('Done: '+getTotal2()) */
// arr = [1, 2, 3, 4, 5, 6]


/* function getTotal(arr) {
    var a
    var sum = 0
    for (i = 1; ; i++) {
        {
            if (a == undefined) {
                break
            }
            a = arr.pop()
            sum = sum + a
        } return sum
    }
} */
// Expected results // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17
// console.log(getTotal([1, 2, 3]))
/* 
for (i =1;i<=10;i++){
    a = arr.pop()
    if(a == undefined){
        break
    }
    console.log(a)

Đối tượng Number trong Javascript là đối tượng giúp chúng ta định nghĩa số và làm việc với số. 
Chúng ta thường sử dụng các phương thức sau của đối tượng Number khi làm việc với số trong Javascript:
Phương thức 	Vai trò
Number.isFinite() 	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
Number.isInteger() 	Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
Number.parseFloat() 	Chuyển đổi chuỗi đã cho thành một số dấu phẩy động
Number.parseInt() 	Chuyển đổi chuỗi đã cho thành một số nguyên
Number.prototype.toFixed() 	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
Number.prototype.toString() 	Chuyển đổi và trả về số đã cho dưới dạng chuỗi */

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
/* for (i =1;i<=10;i++){
    a = arr.pop()
    if(a == undefined){
        break
    }
    console.log(a)
}
 */
// arr = [1, 2, 3, 4, 5, 6]

/* 
sum1 = 0
// var acc = []
var a = 0
var numbers = []

function getTotal(numbers) {
    var sum = 0
    for (i = 1; i <= 10; i++) {
        a = numbers.pop()
        if (a !== undefined) {
            console.log('a hiện tại: '+a)
            // sum += a
            sum = sum + a
            console.log(sum)
            
        } else {
            break
        }
        
    }
    return sum
}

numbers = [4, 5, 3, 5]
getTotal([4, 5, 3, 5]) // Output: 17
// getTotal([4, 5, -3]) // Output: 6
console.log(getTotal(numbers))
 */

/* 
for (i = 1; i <= 10; i++) {
    a = arr.pop()
    if (a == undefined) {
        break
    }
    sum += a
    console.log(a)
}
console.log(sum) */

// function getTotal(arr) {
//     var sum = 0;
//     for (var i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }

// // getTotal([4, 5, 3, 5]) // Output: 17
// getTotal([4, 5, -3]) // Output: 6
// console.log(getTotal([4, 5, -3]))

// var languages = [
//     'Javascript', 
//     'PHP', 
//     'Ruby',
//     'C++',
//     'C#'
// ];
// var lengthLanguages = languages.length
// for (var i = 0; i < lengthLanguages; i++){
//     console.log(languages[i])

// }

var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]



// Expected results:
// getTotal(orders) // Output: 8700000


// function getTotal(orders){
//     var sum = 0
//     for (var i = 0; i < orders.length; i++ ){
//         sum +=(orders[i].price)       
//     }
//     return sum
// }
// console.log(getTotal(orders))

// Expected results:
// getTotal(orders) // Output: 8700000
// console.log(getTotal(orders))


// var languages = [
//     'Javascript', 
//     'PHP', 
//     'Ruby'];

// console.log(myInfo)
// for (var key in myInfo){
//     console.log(myInfo[key])
// }
// for (var key in myInfo){
//     console.log(key)
// }

// var myString = 'LeVinhHien'
// var total =''
// for (var key in myString ){
//     var getCharacter = myString[key]
//     console.log(getCharacter)
//     total += getCharacter
// }



// console.log(total)
/* function run(object) {
    var test1 = []
    // var a = 'Quynh'
    for (var key in object) {
        test1.push(`${'Thuộc tính'} ${key} ${'có giá trị'} ${object[key]}`)
    }
    return a
} */

// Expected results:
// console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ] 

// var myInfo = {
//     name: 'Hien',
//     age: 26,
//     function (){
//         if(this.age <= 26){
//             console.log('Còn trẻ')
//         }else{
//             console.log('Già vl')
//         }
//     }
// }
// console.log(myInfo.function())


// for (i=1;i<=10;i++){
// console.log('Hiển đẹp trai lần thứ:'+i)
// }
// var a = "hien"
// var b = "dep"
// var c = "trai"
// console.log(a + ' ' + b + ' ' + c)
// console.log(`${a} ${b} ${c}`)

var myInfo = {
    name: 'Hien',
    age: 26,
    address: 'DN',
    country: 'VN'
}

// Quynh
var myInfo1 = 'Le Vinh Hien'
for (var value of myInfo1) {
    if (value == 'e') {
        continue;
    }
    console.log(value);
}
// do/while 
var i = 0
// while ( i<= 10){
//     console.log(i)
//     i++
// }
//!kiểm tra điều kiện tại vòng lặp thứ 2
var i = 0;
var isSuccess = false
do {
    i++  
    console.log('Nap the lan: ' + i)
    if (false) {
        isSuccess = true
    }
} while (!isSuccess && i <= 3)

//! bài toán
//! Cho 1 dãy array gồm những chữ số, cho biết những số nào là số chẵn
//! bài 2: tổng của 2 số = 20
var arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
/* var result = []
for (var key in arrayNumber) {
    if (key % 2 !== 0) {
        continue
    }
    result.push(key)
}
console.log(result)

var a = 2
var arrayRandomNumber = [2] */
/* 
function findPairs(arrayNumber) {
    let result = [];
    
    for (let i = 0; i < arrayNumber.length - 1; i++) {
      for (let j = i + 1; j < arrayNumber.length; j++) {
        if (arrayNumber[i] + arrayNumber[j] === 20) {
          result.push([arrayNumber[i], arrayNumber[j]]);
        }
      }
    }
  
    return result;
  }
//   let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  let pairs = findPairs(arrayNumber);
  console.log(pairs);
 */
/*  
var lengthRandomNumber = 10
var i = 1
while (i <= lengthRandomNumber ){
    console.log(Math.floor(Math.random()*3))
}

 */
// var a = 1
// while (a !== 2) {
//     a = Math.floor(Math.random() * 10)
//     console.log(a)
//     if (a == 2) {
//         break
//     }

// }
// console.log(Math.floor(Math.random()*10))

//! vòng lặp lồng nhau

// var myArray =[
//     [1,2],
//     [3,4],
//     [5,6]
// ]
// for (var i = 0; i <myArray.length;i++){
//     for (var j = 0; j < myArray[i].length; j++)
//     console.log(myArray[i][j])
// }
// for (var i = 100; i >= 0; i-=5){
//     console.log(i)
// }

// var array = ['a','b','c','a','b','c','a','b','c'] 
// console.log([...(new Set(array))])

// function countDown(num){
//     if (num > 0){
//         console.log(num)
//         return countDown(num-1);
//     } 
//     return num
// }
// countDown(10)
/* 
function giaiThua(number){
    if (number > 0){
        return number * giaiThua(number -1)        
        // console.log(number)
    }
    return 1
}
console.log(giaiThua(4))


function tong(numberT){
    if (numberT > 0){
        return numberT + tong(numberT -1)        
        // console.log(number)
    }
    return 1
}
console.log(tong(4))

 */

var course=[
    {
        id: 1,
        name: "HTML",
        cost: 5000
    },
    {
        id: 2,
        name: "css",
        cost: 5500
    },
    {
        id: 3,
        name: "java",
        cost: 510
    },
    {
        id: 4,
        name: "next",
        cost: 560
    },
    {
        id: 5,
        name: "nodejs",
        cost: 800
    },    
    {
        id: 6,
        name: "JS",
        cost: 9800
    },    {
        id: 7,
        name: "C#",
        cost: 900
    }
]
//! forEach() duyệt qua từng phần mảng
//! every() trả về boolen tất cả các phần tử trong mảng phải thỏa điều kiện
//! some() <> every, chỉ cần 1 trong mảng
//! find()tìm kiếm phần tử trong mảng
//! filter() lọc tất cả cá đối tượng
/* course.forEach(function(course){
    console.log(course)
})
console.log("---------------------")


var is90 = course.every(function(course,index){
    // console.log(index)
    return course.cost > 900
})
console.log(is90)
console.log("---------------------")

var is90 = course.some(function(course,index){
    console.log(index)
    return course.cost < 900
})
console.log(is90)
console.log("---------------------")


var is90 = course.find(function(course,index){
    // console.log(index)
    return course.cost < 9800
})
console.log(is90)


var is90 = course.filter(function(course,index){
    // console.log(index)
    return course.cost < 9800
})
console.log(is90)

*/
console.log("---------------------")
const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]
/* const result = sports.filter(getMostFavoriteSport);
function getMostFavoriteSport(sports){
    return sports.like > 5
}
const result = sports.filter(getMostFavoriteSport);
function getMostFavoriteSport(sports){
    return sports.like > 5
} 

function getMostFavoriteSport(sports){
    return sports.filter(function(sports){
        return sports.like > 5
    })
}
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]

Để vượt qua thử thách này, hãy tạo hàm getMostFavoriteSport có 1 tham số
 (F8 sẽ gọi hàm này và luôn truyền đối số là 1 array). 
 Hàm getMostFavoriteSport sẽ trả về các môn thể thao có điểm số yêu thích lớn hơn 5.

Gợi ý: Sử dụng phương thức filter.
 */
var newCourses = course.map(function newC(course,index,originArray){
    return{
        id: course.id,
        name: `Khoa hoc: ${course.name}`,
        cost: `${course.cost}$`,
        originArray: course
    }
})

console.log(newCourses)
