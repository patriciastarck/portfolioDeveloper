const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu() {
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
}


window.addEventListener("scroll", () => {
    document.querySelectorAll(".texto-esquerdo").forEach((animacao, index) => {
        if(animacao.getBoundingClientRect().top < window.innerHeight - 50) {
            animacao.classList.add("efeitoScroll")
        }
    })
    document.querySelectorAll(".img-direita").forEach((animacao, index) => {
        if(animacao.getBoundingClientRect().top < window.innerHeight - 50) {
            animacao.classList.add("efeitoScroll")
        }
    })
    
})