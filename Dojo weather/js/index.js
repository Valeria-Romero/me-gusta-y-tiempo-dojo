/* Removes cookies box */

function removePopUp(){
    let cookies = document.querySelector('.cookiesPopUp');
    cookies.remove();
}

/* Alertas cuando se clickean las ciudades */

function displayAlert(event){
    alert("Loading weather report...");
}


let cities = document.querySelectorAll('.currentCity');

for( let i = 0; i < cities.length; i++){
    cities[i].addEventListener('click', displayAlert);
}

/* Change from Celius<=>Fahrenheit */
function difTemp(event){
    let tipoTemp = event.target.value;
    if(tipoTemp === "Celsius"){
        let valorTemp = document.querySelectorAll('.temp'); // [24, 18, 27, 19, 21, 16]
        let convertir;
        for(let i=0; i< valorTemp.length; i++){
            convertir = (valorTemp[i].innerHTML - 32) * 5/9;
            valorTemp[i].innerHTML = Math.round(convertir);
        }
        console.log("Celsius");
    } else{
        let valorTemp = document.querySelectorAll('.temp'); // [24, 18, 27, 19, 21, 16]
        let convertir;
        for(let i=0; i< valorTemp.length; i++){
            convertir = (valorTemp[i].innerHTML * 9/5) + 32;
            valorTemp[i].innerHTML = Math.round(convertir);
        }
        console.log("Fahrenheit");
    }
}



let selectorTemp = document.querySelector('.selector');
selectorTemp.addEventListener('change', difTemp);

