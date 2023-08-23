// ANA ELEMANLAR 
const main = document.querySelector('main');
const topBar = document.getElementById('top-bar');
const links = document.querySelectorAll('a[href]');

localStorage;


function pageChange(event) {
    event.preventDefault();
        
    let target = this.getAttribute('href'); 

    if (target === '/en' ||
        target === '/tr') {
        document.cookie = `lang=${target.substring(1)}; path=/`;

        target = window.location.pathname;
        target = target.substring(target.lastIndexOf('/'));
    }       

    document.body.classList.add('fade');
    window.setTimeout(function() {
        window.location = target;
    }, 300);        
}


links.forEach(link => {
    link.addEventListener('click', pageChange);
});









