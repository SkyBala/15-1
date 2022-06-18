let button = document.getElementById("button");
let input = document.getElementById("input");
let buton = document.getElementById("buton")
let num = 0
button.onclick = () => {
    console.log(num++)
}
buton.onclick = () => {
    console.log(num--)
}