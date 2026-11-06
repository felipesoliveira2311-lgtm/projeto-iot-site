const form = document.getElementById('preenchimento_dados')
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const numero = document.getElementById('numero');
const setor  = document.getElementById('setor');
const interesse = document.getElementById('interesse');
const descreva = document.getElementById('descreva');
const capturar = document.getElementById('btn_enviar');


form.addEventListener('submit', (event) =>{event.preventDefault();console.log(`Nome:${nome.value}\nEmail:  ${email.value}\nNúmero: ${numero.value} \nSetor: ${setor.value} \nInteresse: ${interesse.value} \nDescrição: ${descreva.value}`)
})