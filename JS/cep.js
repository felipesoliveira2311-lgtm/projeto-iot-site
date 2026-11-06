const capturarCEP = [document.getElementById('btn_cep'), document.getElementById('btn_cep_media')];
const cep = document.getElementById('cep');
let rua = document.getElementById('rua');
let bairro = document.getElementById('bairro');
let cidade = document.getElementById('cidade');
let estado = document.getElementById('estado');

let valorCEP;

const noText = () =>{
    cep.addEventListener('input', function() {
    this.value = this.value.replace(/\D/g, '');     
})}

noText();

capturarCEP.forEach((botao) => {
botao.addEventListener('click', ()=>{
    valorCEP = cep.value
    console.log(valorCEP)

    console.log(fetch(`https://viacep.com.br/ws/${valorCEP}/json/`).then(resposta => resposta.json()).then(dados =>{
        console.log(dados)
         rua.value =  dados.logradouro;
         bairro.value = dados.bairro;
         cidade.value = dados.localidade;
         estado.value = dados.estado;

        rua.inner

    }))
});
});