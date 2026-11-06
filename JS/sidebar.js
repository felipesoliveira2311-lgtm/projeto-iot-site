
const icone = document.getElementById('icone_sidebar');
const menu = document.getElementById('principal_bar')

icone.addEventListener('click', () =>{
    menu.classList.toggle('open_sidebar');
})
