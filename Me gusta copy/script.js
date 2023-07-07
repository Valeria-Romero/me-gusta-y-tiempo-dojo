console.log("Conectado");

//closest('# o . y el nombre') busca el elemento mas cercano con la clase o id que le asignemos en los parametros
// querySelector() buscamos un elemento con una clase o id
// parseInt() convierte un elemento de tipo string a number "1" > 1

function like1(){
    let numeroString = document.querySelector('.like1');
    let numeroVariable = parseInt(numeroString.innerHTML);
    numeroVariable += 1; // numeroVariable = numeroVariable + 1;
    numeroString.innerHTML = numeroVariable;
    console.log(numeroVariable);
}

function like2(){
    let numeroString = document.querySelector('.like2');
    let numeroVariable = parseInt(numeroString.innerHTML);
    numeroVariable += 1; // numeroVariable = numeroVariable + 1;
    numeroString.innerHTML = numeroVariable;
    console.log(numeroVariable);
}

function like3(){
    let numeroString = document.querySelector('.like3');
    let numeroVariable = parseInt(numeroString.innerHTML);
    numeroVariable += 1; // numeroVariable = numeroVariable + 1;
    numeroString.innerHTML = numeroVariable;
    console.log(numeroVariable);
}