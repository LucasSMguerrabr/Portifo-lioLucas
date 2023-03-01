//Scroll suave nos links internos

const menuItem = document.querySelectorAll('.nav-title a');

console.log(menuItem);

menuItem.forEach(item => {
    item.addEventListener('click', scrollParaIdNoClick);
})

function scrollParaIdNoClick(event){

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 80,
        behavior: 'smooth'
    });

}
