
let navpages = document.querySelector("#nav-other-pages")

function click(){
    
    if(navpages.style.display === 'none'){
        navpages.style.display = 'grid'
    }
    else if(navpages.style.display = 'grid'){
        navpages.style.display = 'none'
    }
    console.log(navpages.style.display)
   
}


let nav = document.querySelector('#nav-mobile')

nav.addEventListener('click', click)