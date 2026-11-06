
const proximo = document.getElementById('proximo');
const anterior = document.getElementById('anterior');
const cards = document.querySelectorAll('.corpo_card_setores');

let cardAtual = 0;

const verificacaoInicial = () =>{window.innerWidth < 500?carrossel():gridCard();};verificacaoInicial()


window.addEventListener('resize', () =>{window.innerWidth <= 500 ?carrossel():gridCard();})


const cardMinMax = () =>{
    if(cardAtual >= cards.length){
        cardAtual = 0;
    }else if(cardAtual < 0){
        cardAtual = 2;
    }
}

function carrossel(){

for(let i = 0; i < cards.length; i++){
    
    if(cardAtual !== i){
        cards[i].style.display ='none'     
        cards[cardAtual].style.display = 'block'   
        }
    }
}

 proximo.addEventListener('click', () =>{
    cardAtual ++
    cardMinMax();
    carrossel();
 })

 anterior.addEventListener('click', () =>{
    cardAtual --;
    cardMinMax();
    carrossel();
 })

 function gridCard(){for(let i = 0; i < cards.length; i++){cards[i].style.display = 'grid';}};
