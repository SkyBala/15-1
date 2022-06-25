const list  = [];

const addButton = document.getElementById('button');
const input = document.getElementById('input');

function change(id) {
    const item = list.findIndex((d)=> {
        if(d.id === id){
            return true;
        }
        console.log(item)
    })
    const text = prompt('text for restyle')
    list[item].text = text

}

function render () {
    const mainDiv = document.createElement('div');
    mainDiv.setAttribute('class', 'list')

    for (let i = 0; i< list.length; i++){
        const div = document.createElement('div');
        div.setAttribute('class', 'todoBlock');
        const p = document.createElement('p')
        p.innerText = list[i].text
        div.append(p)

        const buttons = document.createElement('div');
        buttons.setAttribute('class', 'actions')
        const changeButton = document.createElement('button');
        changeButton.setAttribute('class', 'change');
        changeButton.onclick = () => {

        }
        changeButton.innerText = 'change'
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete'
        deleteButton.setAttribute('class', 'delete');
        deleteButton.onclick = () =>{
            div.remove()
            console.log('jjjj')
        }

        buttons.append(changeButton, deleteButton);
        div.append(buttons)
        mainDiv.append(div)


    }
    console.log(mainDiv)

     const form = document.querySelector('.form');
     form.append(mainDiv)

}

render();

addButton.onclick = () => {
    const obj = {
        id: list.length+1,
        text: input.value
    }

    list.push(obj);
    console.log(list)
    render()
};