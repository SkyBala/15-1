function sayHello() {
    console.log("hello")
}
function getFullName(user,age,user2) {
    if (age < 18){
        console.log("close")
    }else{
        console.log(`${user.first_name} ${user.last_name} open`)
    }
}


const  age = prompt("сколко вам лет?")

const  user = {
    first_name:"john",
    last_name:"lia"
}
getFullName(user,age)

 numbers(number1,number2)
{
    if (number1 > number2) {
        console.log("первое больше")
    } else if (number1 < number2) {
        console.log("второе больше")
    } else {
        console.log("они равны")
    }
}


