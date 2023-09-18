//Captcha del login


function randomNumber() {
    return Math.floor(Math.random()*100000);
}

function updateRandomNumber(number) {
    document.querySelector('#captcha').value=number;
}


let random = randomNumber();

updateRandomNumber(random);

const form = document.querySelector('#form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let formData = new FormData(form);
    
    if(formData.get('captchaUser') == random){ 
        document.querySelector('#correcto').classList.add('activo');
        document.querySelector('#incorrecto').classList.remove('activo');
        
    }else{
        document.querySelector('#incorrecto').classList.add('activo');
        document.querySelector('#correcto').classList.remove('activo');
        random = randomNumber();
        updateRandomNumber(random);
        // Codigo
    }
})

//Menu favoritos

const btnFav = document.querySelector('.botonera2')
console.log(btnFav)
const containerFavGames = document.querySelector('.container-favs-cant')

btnFav.addEventListener('click', () => {
    alert('funciona')
})



