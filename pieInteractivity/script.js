const pie = document.querySelector('.pie');
const green = document.querySelector('.green');
const btn = document.querySelector('button');
const greens = document.querySelector('.greens');

pie.style.backgroundImage='repeating-conic-gradient(from 0deg, red 0deg 100deg, blue 100deg 240deg, green 240deg 360deg';

greens.innerHTML = 0;

green.addEventListener('input', ()=>{
    greens.innerHTML = green.value;

    pie.style.backgroundImage=`repeating-conic-gradient(from 0deg, red ${green.value}deg 100deg, blue 100deg 240deg, green 240deg 360deg)`;
})

btn.addEventListener('click', ()=>{
    pie.style.transform="rotate(30000deg)";
    setTimeout(()=>{
        pie.style.transform="rotate(0deg)";
    }, 8000)
})