// const array = [
//     {
//         username: "jack",
//         fullname: "jack coijn",
//     }, {
//         username: "jack",
//         fullname: "jack coijn",
//     }, {
//         username: "jack",
//         fullname: "jack coijn",
//     }, {
//         username: "jack",
//         fullname: "jack coijn",
//     }, {
//         username: "jack",
//         fullname: "jack coijn",
//     }, {
//         username: "jack",
//         fullname: "jack coijn",
//     }, {
//         username: "jack",
//         fullname: "jack coijn",
//     },
//
//      {
//         username: "jack",
//         fullname: "jack coijn",
//     },
//
// ]

// for( let i = 0; i < array.length; i++){
//     if(i === 2){
//         break;
//     }
//     else {
//         console.log(array[i])
//         }
// }
// const obj = {
//     key1:'b1',
//     key2:'b2',
//     key3:'b3',
//     key4:'b4',
//     key5:'b5',
//     key6:'b6',
// }
// for (let key in obj){
//     console.log(obj[key])
// }


// const users = [
//     {
//         username:'jack',
//         slary:500
//     },
//     {
//         username:'jonh',
//         slary:5000
//     },
//     {
//         username:'julia',
//         slary:50000
//     }
//
//
// ]
// const filterUsers = users.filter(user => user.slary > 500)
// console.log(filterUsers)


const users = [
    {
        username:'robot1',
        power:1000
    },
    {
        username:'robot2',
        power:2000
    },
    {
        username:'robot3',
        power:3000
    },
{
        username:'robot4',
        power:4000
    },{
        username:'robot5',
        power:5000
    },


]
const filterUsers = users.filter(user => user.power > 3000)
console.log(filterUsers)
