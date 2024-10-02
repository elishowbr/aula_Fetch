const botao = document.querySelector('#evntClick'); // Linkando o botão ao JS


async function pesquisarCep() { // Iniciando função assíncrona
    const cep = document.querySelector('#CEP'); // Pegando o Input do CEP
    if (cep.value.length > 8 || cep.value.length < 8) { // Bem pequena e simples verificação de entrada (se o cep estiver incompleto)
        alert('Cep inválido!') 
        cep.value = '' // Zera o input do CEP
        cep.focus() // Volta o foco ao CEP
        document.getElementById('rua').value = ''
        document.getElementById('bairro').value = ''
        document.getElementById('cidade').value = ''
        document.getElementById('uf').value = ''
    } else { // Se tudo der certo, nosso else preenche os dados do endereço.
        const endereco = await busca(cep.value);
        document.getElementById('rua').value = endereco.logradouro
        document.getElementById('bairro').value = endereco.bairro
        document.getElementById('cidade').value = endereco.localidade
        document.getElementById('uf').value = endereco.uf
    }
}

botao.addEventListener('click', pesquisarCep) // Evento para iniciar a pesquisa

async function busca(cep) { // Evento de busca, de maneira muito simplificada usando fetch
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    const resposta = await request.json();
    return resposta   
}