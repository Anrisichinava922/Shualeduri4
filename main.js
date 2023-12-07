const darkMode = document.querySelector('.light-dark')
const body = document.querySelector('body')
const todoApp = document.querySelector('.todoapp')
const form = document.querySelector('form')
const input = document.querySelector('input')
const res = document.querySelector('.res')
const controls = document.querySelector('.controls')
const add = document.querySelector('.add')
const btn = document.querySelector('button')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')
const h6 = document.querySelector('h6')
const h5 = document.querySelector('h5')
const div = document.querySelector('.everyTodo')


let active = 0
let arr = []

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(input.value !== ''){
        arr.push(input.value);
        showTodo();
        input.value = ''
        console.log(arr);
    }
});


function showTodo() {
    div.innerHTML = '';

    arr.forEach((todo) => {
        let h4 = document.createElement('h4');
        h4.innerHTML = todo;
        div.appendChild(h4);
    });
}
darkMode.addEventListener('click', () =>{
    body.classList.toggle('dark')
    todoApp.classList.toggle('backgroundimg')
    darkMode.classList.toggle('backchange')
    input.classList.toggle('darkinput')
    controls.classList.toggle('veraaaaa')
    res.classList.toggle('veraaaaa')
})
h2.addEventListener('click', () =>{
    h2.classList.toggle('blue')
})

function makeActive(element) {
    h3.classList.remove('blue');
    h6.classList.remove('blue');
    h5.classList.remove('blue');
    element.classList.add('blue');
}

h3.addEventListener('click', () => {
    makeActive(h3);
});

h6.addEventListener('click', () => {
    makeActive(h4);
});

h5.addEventListener('click', () => {
    makeActive(h5);
});