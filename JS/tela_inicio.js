
const subtitulo_efeito = document.querySelector('.textoSecundario')


const efeitoSubtitulo = () => {

    setTimeout(()=>{

        subtitulo_efeito.textContent = 'EM MOVIMENTO'
        
    }, 0)

    setTimeout(()=>{

        subtitulo_efeito.textContent = 'E SEUS CAMINHOS'
        
    }, 4000)

}

// Chamando a função de efeito
efeitoSubtitulo()
// Forçando a repetição da função de efeito
setInterval(efeitoSubtitulo, 8000)

