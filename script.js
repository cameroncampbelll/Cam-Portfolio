let showMenu = (toggleId, navId) => {
    let toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


let navLink = document.querySelectorAll('.nav_link');

function linkAction() {

    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');


    let navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));