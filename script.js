let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

 menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
 }

 window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
 }


 function loader(){
   document.querySelector('.loading-container').classList.add('fade-out');
 }

 function fadeOut(){
   setInterval(loader, 2000);
 }

 window.onload = fadeOut();