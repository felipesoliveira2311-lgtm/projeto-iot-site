const importarMenu = document.getElementById('menu');


const buscarMenu = () =>{
   fetch('../HTML/menu.html').then(response => response.text()).then(data =>{

    importarMenu.innerHTML = data;

    
   const icone = document.getElementById('icone_sidebar');
   const menu = document.getElementById('principal_bar')

   icone.addEventListener('click', () =>{menu.classList.toggle('open_sidebar');})

   });
}

console.log(buscarMenu())