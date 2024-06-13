const displayValorAnt = document.getElementById('valor-ant'); /* Obtiene el elemento HTML con el id 'valor-ant' y lo asigna a la variable displayValorAnt */
const displayValorAct = document.getElementById('valor-act'); /* Obtiene el elemento HTML con el id 'valor-act' y lo asigna a la variable displayValorAct */
const botonNumeros = document.querySelectorAll('.numero'); /* Obtiene una lista de todos los elementos HTML con la clase 'numero' y los asigna a la variable botonNumeros */
const botonOperador = document.querySelectorAll('.operador'); /* Obtiene una lista de todos los elementos HTML con la clase 'operador' y los asigna a la variable botonOperador */

const display = new Display(displayValorAnt, displayValorAct); /* Crea una nueva instancia de la clase Display, pasando displayValorAnt y displayValorAct como argumentos */

botonNumeros.forEach(boton => {
    /* Itera sobre cada elemento en la lista botonNumeros */
    boton.addEventListener('click', () => /* Añade un event listener de click a cada botón */
        display.agregarNumero(boton.innerHTML)); /* Cuando se hace clic en un botón, llama al método agregarNumero de la instancia display con el contenido HTML del botón como argumento */
});

botonOperador.forEach(boton => {
    /* Itera sobre cada elemento en la lista botonOperador */
    boton.addEventListener('click', () => display.computar(boton.value)); /* Añade un event listener de click a cada botón */
    /* Cuando se hace clic en un botón, llama al método computar de la instancia display con el valor del atributo 'value' del botón como argumento */
});