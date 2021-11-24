// ejecutar una funcion despues de un tiempo

let contador = 1;

function saluda(){
    document.write('<br>Hola mundo');
    if(contador == 5){
        // si cumple la condicion , se detiene el intervalo
        window.clearInterval(intervalo);
    }
    contador++;
}

// window.setTimeout(saluda,3000)
// otras maneras de poner setTimeout

// setTimeout(saluda,3000)

setTimeout(() => {
    document.write('Hola mundo');
},3000)

// ejecutar una funcion cada cierto tiempor en ms(milisegundos)

let intervalo = window.setInterval(saluda,2500);



