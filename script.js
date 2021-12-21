const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelectorAll('.toggle');

const handleMenu = () => {    
    if (navBar.style.display === 'flex'){
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
    
}

const checkSize = ()=>{
    
    var w = document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth;
    var h = window.innerHeight;
    var targetWidth = 740;
    var targetHeight = 600;
    
     
    if ((h > targetHeight) && (w > targetWidth)){
        
        navBar.style.display = 'flex';
        for (element of menuBtn) {
            element.removeEventListener('click', handleMenu)
            } 
           
    } else {
    
        
    for (element of menuBtn) {
            navBar.style.display = 'none';
            element.addEventListener('click', handleMenu)
            };
    }
}


/* window.addEventListener('load', checkSize()) */
window.addEventListener('resize', checkSize)


