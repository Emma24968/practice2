const text = document.querySelector('.title');
const changeColor = document.querySelector('.changeColor');

changeColor.addEventListener('click', () => {
    text.classList.toggle('change')
})
 
const name = document.querySelectorAll('.list li');
for (names of name) {
    names.addEventListener('click', () => {
        this.style.color = 'red';
    })
}