// Identificação de todos os itens
let itens = document.querySelectorAll('.item-navbar')

// Função de ativação
function ativarLink(){
    // Remover de todos os itens
    itens.forEach( item => item.classList.remove('ativo'))
    // Adicionar só no item clicado
    this.classList.add('ativo')
}

// Ouvindo constante
itens.forEach( item => item.addEventListener('click', ativarLink))