let nav = document.querySelectorAll('.nav a h1');

nav.forEach((element)=>{
    element.addEventListener('click',()=>{
        nav.forEach(item => item.style.backgroundColor= 'blue');
        element.style.backgroundColor='black';
    })
});