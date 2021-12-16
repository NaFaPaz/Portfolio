const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelectorAll('.toggle');


const handleMenu = (event) => {
    if (navBar.style.display === 'flex'){
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
    
}



window.addEventListener('resize', ()=>{
    var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var targetWidth = 780;

    if ( w <= targetWidth) {     
        for (element of menuBtn) {
        navBar.style.display = 'none';
        element.addEventListener('click', handleMenu)
        };
    } else if(w > targetWidth) {
        navBar.style.display = 'flex';
        for (element of menuBtn) {
        element.removeEventListener('click', handleMenu)
        };
    }
})


