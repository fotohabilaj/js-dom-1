console.log(document);
const lamp = document.getElementById('lamp');
const btn = document.getElementById('btn');
let on_off = btn.innerHTML
console.log(lamp);

function interrutore_luce(){
    if(on_off === 'accendi'){
        lamp.src = "img/yellow_lamp.png"
        on_off  = 'spegni';
    } else{
        on_off = 'accendi';
      lamp.src = "img/white_lamp.png"
    }
}

btn.addEventListener('click', interrutore_luce)