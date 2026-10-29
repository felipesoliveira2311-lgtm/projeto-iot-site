let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');

let cardAtual = 0;

let carrossel_card = document.querySelectorAll('.conteiner_carrossel');
let mostrar_carrossel = document.getElementById('estrutura_carrossel');
let esconder_cards = document.getElementById('estrutura_cards')


console.log(carrossel_card.length)

// Esconde os cards html da responsividade maior{
const mostrarCarrossel = () =>{
mostrar_carrossel.style.display = "grid";
esconder_cards.style.display = "none"
}
//}

//Esconde o carrossel da responsividade menor{
const esconderCarrossel = () =>{
    mostrar_carrossel.style.display = 'none'
    esconder_cards.style.display = "grid"
}
//}

// Verifica o dimensionamento do site assim que ele abre. Para identificar o tamanho da tela e decidir se usa carrossel ou grid.{
const dimensionamento = () => {
    const executarCarrossel = window.innerWidth <= 510;
    executarCarrossel ? `Executando carrossel ${carrossel(), mostrarCarrossel() }` : `Executando grid ${esconderCarrossel()}`;
    return executarCarrossel;
};
dimensionamento() ? "ok" :"?"
//}



// Faz a alteração de grid para carrossel quando a tela é redimensionada com o site já iniciado{
    window.addEventListener('resize', dimensionamento);
//}

// Não deixa o valor do cardAtual ser maior do que o número de cards existentes
    function retornar(){
        cardAtual;
        if(cardAtual > 8){
            cardAtual = 0;
        }else if (cardAtual < 0){
            cardAtual = 8;
        }
    }
//}

// Aumenta o valor de cardAtual em 1, para trocar o card, quando clicar em '>'{
    function proximoCard() {
        cardAtual ++
        retornar();
    }
//}

    function cardAnterior() {
        cardAtual --
        retornar();
    }

// Percorre a Node_list do carrossel{
    function percorrer_carrossel(){
        for (let i = 0; i < carrossel_card.length; i++){
        carrossel_card[i].style.display = "none";
        }  
    }
//}


// Transforma o display grid em carrossel quando a página for menor ou igual a 500px{
    function carrossel() {
    percorrer_carrossel()
    carrossel_card[cardAtual].style.display = 'block'
    carrossel_card[cardAtual], cardAtual;
}
//}

    proximo.addEventListener('click', () =>{
        proximoCard();
        carrossel();
    });

    anterior.addEventListener('click', () =>{
        console.log(cardAtual)
        cardAnterior();
        carrossel();
    })

    


