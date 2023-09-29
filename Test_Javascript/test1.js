// Bài 1. Viết function truyền vào mảng các chuỗi có độ dài bất kỳ.
//  Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất
function getStringHasMaxLength(array) {
    let maxLength = 0;
    array.forEach(element => {        
        if (element.length > maxLength) {
            maxLength = element.length;
        }
    })
    let newArray = [];
    array.forEach(element => {
        if (element.length === maxLength) {
            newArray.push(element);
        }
    })
    return newArray;    
}
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']));



// Bài 2: Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age > 25 và isStatus = true
// Viết function truyền vào 1 mảng các object user. Trả về mảng các user có age tăng dần

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

//Trả về mảng các user có age > 25 và isStatus = true
function getNewArray1(users) {
    return users.filter(user => {
        return user.age > 25 && user.isStatus === true;
    });
}
console.log(getNewArray1(users));

//Trả về mảng các user có age tăng dần
function sortArray(users) {
    return users.sort((a, b) => a.age - b.age);
}
console.log(sortArray(users));



// Bài 3. Viết function truyền vào 1 mảng các chuỗi. 
// Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần
// getCountElement(["one", "two", "three", "one", "one", "three"])

function getCountElement(arr) {
    const countObject = {};
    
    arr.forEach(item => {
        if (countObject[item]) {
            countObject[item] += 1;
        } else {
            countObject[item] = 1;
        }
    });

    return countObject;
}

const inputArray = ["one", "two", "three", "one", "one", "three"];
const result = getCountElement(inputArray);
console.log(result);
