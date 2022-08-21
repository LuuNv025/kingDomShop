const bar = document.getElementById('bar');
const nav = document.getElementById('navbar')
if(bar){
    nav.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}