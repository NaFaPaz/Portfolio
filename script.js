const navBar = document.querySelector('.nav-bar');
const menuBtn = document.querySelector('.menu-btn');

const handleMenu = () => {
    if (navBar.style.display === 'flex'){
        navBar.style.display = 'none';
    } else {
        navBar.style.display = 'flex';
    }
}

console.log(navBar.style.display)
menuBtn.addEventListener('click', handleMenu);