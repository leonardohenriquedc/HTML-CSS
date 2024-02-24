// criando as variaveis

let burguer = document.querySelector('#burguer');
let menu = document.querySelector('#menu');
let body = document.querySelector('#body');


//Escuta 1
function click(){
    
    if(menu.style.display === 'block'){
        menu.style.display = 'none'
    }
    else if(menu.style.display = 'none'){
        menu.style.display = 'block'
    }
}

function redm(){
    if(window.innerWidth >= 768){
        menu.style.display = 'block'
    }
    else{
        menu.style.display = 'none'
    }
    console.log(menu.style.display)
}


// Chamada Escuta 1
burguer.addEventListener('click', click)

// Chamada Escuta 2
window.addEventListener('resize', redm)
