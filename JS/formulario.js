// Cria variáveis constantes para armazenar as referências aos elementos HTML que serão utilizados no JavaScript.
const form = document.querySelector("#inscricao");
const nome = document.querySelector("#nome");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const setor = document.querySelector("#setor");
const interesse = document.querySelector("#interesse");
const mensagem = document.querySelector("#descreva");
const btnVerify = document.getElementById("btnverify");



const noText = (noText) => {//
    noText.addEventListener("input", function () {
        this.value = this.value.replace(/\D/g, "");
        return noText;
    });
};
noText(telefone);




// Cria uma função chamada CAPTURARINSCRICAO para configurar a captura dos dados do formulário.
const CAPTURARINSCRICAO = () => {

   
    const BTNENVIAR = document.querySelector("#btnenviar"); // Dentro da função, cria uma variável constante que armazene a referência ao elemento com ID btnenviar.

  
    form.addEventListener('submit', function(event) {// Adiciona um ouvinte ao formulário que aguarda o evento 'submit' e executa uma função quando ele ocorrer.

        event.preventDefault();     // evento que impede o comportamento padrão do envio do formulário.

        // Cria uma variável chamada campos e atribui a ela um texto contendo os valores dos inputs. 
        const campos = `
            nome: ${nome.value};
            email: ${email.value};
            telefone: ${telefone.value};
            setor: ${setor.value};
            interesse: ${interesse.value};
            mensagem: ${mensagem.value};`;

       
        console.log(`sucesso!: ${campos}`); // Exiba no console a mensagem de sucesso acompanhada do conteúdo da constante campos.
    });
};

// Executa a função CAPTURARINSCRICAO.
CAPTURARINSCRICAO();

//Cria uma constante chamada LIMPARCAMPOS para apagar os valores dos campos do formulário 
const LIMPARCAMPOS = () =>{
    const BTNLIMPAR = document.getElementById("btnlimpar");//Cria uma constante dentro da função LIMPARCAMPOS que  faz referência ao elemento HTML #btnlimpar

    BTNLIMPAR.addEventListener("click", function(){//Adiciona um ouvinte de evento 'click' que quando escutado, executa uma função.

        form.reset();//Reseta o formulário para o versão original (campos vazios).
    });
}
LIMPARCAMPOS(); //Executa a função LIMPARCAMPOS.

