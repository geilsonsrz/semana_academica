// Identificação de todos os itens
let itens = document.querySelectorAll('.item-navbar')

// Identificação dos link da navbar individual
let navbar_inicio = document.querySelector('#navbar-inicio')
let navbar_programacoes = document.querySelector('#navbar-programacoes')
let navbar_contato = document.querySelector('#navbar-contato')


// Função de ativação ao clicar
function ativarLink() {
    // Remover de todos os itens
    itens.forEach(item => item.classList.remove('ativo'))
    // Adicionar só no item clicado
    this.classList.add('ativo')
}


// Ouvindo constante ao clicar
itens.forEach(item => item.addEventListener('click', ativarLink))


// Ouvindo constante ao ativar o scroll
document.addEventListener('scroll', () => {

    // Tamanho da navbar
    let altura_navbar = document.querySelector('#navbar').getBoundingClientRect().height

    // Altura da tela
    let altura_da_tela = window.innerHeight

    // Posição atual da tela
    let posicao_tela = window.scrollY

    // Configuração para alterar a ativação
    switch (true) {

        case (posicao_tela < altura_da_tela-altura_navbar):
            if (navbar_inicio.classList.contains('ativo')) {
                // Faz nada
            } else {
                navbar_inicio.classList.add('ativo')
                navbar_programacoes.classList.remove('ativo')
                navbar_contato.classList.remove('ativo')
            }
            break;
        
        case (altura_da_tela-altura_navbar <= posicao_tela && posicao_tela < 2*altura_da_tela-altura_navbar):
            if (navbar_programacoes.classList.contains('ativo')) {
                // Faz nada
            } else {
                navbar_programacoes.classList.add('ativo')
                navbar_inicio.classList.remove('ativo')
                navbar_contato.classList.remove('ativo')
            }
            break;
        
        case (2*altura_da_tela-altura_navbar <= posicao_tela):
            if (navbar_contato.classList.contains('ativo')) {
                // Faz nada
            } else {
                navbar_contato.classList.add('ativo')
                navbar_inicio.classList.remove('ativo')
                navbar_programacoes.classList.remove('ativo')
            }
            break;
    }
})
