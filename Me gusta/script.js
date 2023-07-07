console.log("Conectado");

//closest('# o . y el nombre') busca el elemento mas cercano con la clase o id que le asignemos en los parametros
// querySelector() buscamos un elemento con una clase o id
// parseInt() convierte un elemento de tipo string a number "1" > 1

function like(elemento){
    // <button onclick="like(this)">Like</button>
    let num_likes = parseInt(elemento.closest('.likes_btn').querySelector('.like').innerHTML);
    num_likes++; // num_likes = num_likes + 1;
    elemento.closest('.likes_btn').querySelector('.like').innerHTML = num_likes;
    console.log(num_likes);
}