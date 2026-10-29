const formEndereco = document.getElementById('enderecoDados');
const inputRua = document.getElementById('rua');
const inputBairro = document.getElementById('bairro');
const inputCidade = document.getElementById('cidade');
const inputEstado = document.getElementById('estado');
const inputCEP = document.getElementById('cep');



//Função que não permite caracteres além de números no campo input cep.
  
noText(inputCEP);
// Preenche os campos com os dados retornados pela API
const preencherEndereco = (logradouro, bairro, cidade, estado) => {
    inputRua.value = logradouro;
    inputBairro.value = bairro;
    inputCidade.value = cidade;
    inputEstado.value = estado;
};

// Valida o CEP e consulta a API
const verificarRequisitar = () => {

    btnVerify.addEventListener("click", function(event) {
        event.preventDefault();

        const cep = inputCEP.value.replace(/\D\-/g, "");

        if (cep.length !== 8) {
            alert("O CEP deve conter 8 dígitos.");
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(resposta => {
                if (!resposta.ok) {
                    throw new Error("Falha na consulta do CEP.");
                }

                return resposta.json();
            })
            .then(dados => {
                if (dados.erro) {
                    throw new Error("CEP não encontrado.");
                }

                const logradouro = dados.logradouro;
                const bairro = dados.bairro;
                const localidade = dados.localidade;
                const uf = dados.uf;

                preencherEndereco(logradouro, bairro, localidade, uf);
            })
            .catch(error => {
                console.error("Erro:", error.message);
                alert(error.message);
            });
    });
};

verificarRequisitar();
