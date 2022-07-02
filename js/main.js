const navbutton = document.querySelector('#navbutton');
const mobilemenu = document.querySelector('#mobile-menu');

navbutton.addEventListener('click', ()=>{
    mobilemenu.classList.toggle('hidden')
})