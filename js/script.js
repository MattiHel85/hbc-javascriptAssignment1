console.log('Connected!');

const mobileMenu = () => {
    const menu = document.querySelector("ul");
    menu.classList.toggle("mobilemenu");
};

const scrollToTop = () => { 
    window.scrollTo(0, 0); 
} 