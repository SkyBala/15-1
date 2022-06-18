console.log(document)

const blocks = document.getElementsByClassName('block');
 console.log(blocks)

const block3 = document.getElementById('block3')
 console.log(block3)

 block3.className = "changedClass"

 block3.classList.add("changedClass")
 block3.classList.remove("block")

console.log(block3.classList)

block3.onclick = () => {
    block3.classList.toggle("active")
}

const block = document.querySelector('.block')
 console.log(block)

const block2 = document.querySelectorAll('.block')
 console.log(block2)

const button = document.getElementById("button");
const input = document.getElementById("input");

button.onclick = () => {
    const tag = document.createElement('div');
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.onclick = () => {
        tag.remove()
    }


    tag.setAttribute('class', 'block');
    tag.innerText = input.value;
    document.body.append(tag);
    tag.append(deleteButton);
    input.value = "";
}
