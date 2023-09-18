//Menu favoritos
const btnFav = document.querySelector('.btn-fav')
const containerFavGames = document.querySelector('.container-favs-cant')

btnFav.addEventListener('click', () => {
    containerFavGames.classList.toggle('activo')

})

let favoritos = []
const forms = document.querySelectorAll('.añadir-fav');
forms.forEach(form=>{
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        let title=form.parentElement.querySelector('h3').innerText;
        let juego=crearobjeto(title);
        favoritos.push(juego);
        mostrarfavoritos(favoritos);
    })
})

function crearobjeto(nombre){
    return {
        nombre:nombre
    }
}

function hacerfila(object){
    let text = '<tr>'
    for(const prop in object){
        text+=`<td>${object[prop]}</td>`
    }
    text+='</tr>'
    return text
}

function mostrarfavoritos(arr){
    let html=''
    arr.forEach(juego=>{
        html+=hacerfila(juego);
    })
    lista.innerHTML=html
}

vaciar.addEventListener('click', ()=>{
    favoritos=[]
    mostrarfavoritos(favoritos)
})

document.querySelector('.añadir-varios').addEventListener('submit',(e)=>{
    e.preventDefault()
    favoritos.push(crearobjeto('Marvel Spider-Man'))
    favoritos.push(crearobjeto('Grand Theft Auto V'))
    favoritos.push(crearobjeto('Dark Souls 3'))
    favoritos.push(crearobjeto('God of War'))
    favoritos.push(crearobjeto('Minecraft'))
    mostrarfavoritos(favoritos)
})
