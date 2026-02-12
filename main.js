console.log(document);
const lamp = document.getElementById('lamp');
const btn = document.getElementById('btn');

function interrutore_luce(){
    if(btn.innerHTML === 'Accendi'){
        lamp.src = "img/yellow_lamp.png"
        btn.innerHTML ='Spegni';
    } else{
        btn.innerHTML ='Accendi';
      lamp.src = "img/white_lamp.png"
    }
}

btn.addEventListener('click', interrutore_luce)