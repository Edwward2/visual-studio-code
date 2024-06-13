// Define un array con todas las letras del alfabeto
const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Obtiene el elemento del DOM con el ID 'input-original'
const inputOriginal = document.getElementById('input-original');
// Obtiene el elemento del DOM con el ID 'cifrador'
const cifrador = document.getElementById('cifrador');
// Obtiene el elemento del DOM con el ID 'resultado'
const resultado = document.getElementById('resultado');
// Obtiene el elemento del DOM con el ID 'rango'
const rango = document.getElementById('rango');

// Función que maneja el evento de enviar el formulario
const submit = e => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario
    resultado.innerHTML = ''; // Limpia el contenido del resultado
    shifMessage(); // Llama a la función shifMessage para cifrar el mensaje
}

// Asigna la función submit al evento 'submit' del formulario
cifrador.onsubmit = submit;

// Función que inicia el proceso de cifrado del mensaje
const shifMessage = () => {
    // Convierte el valor del input a mayúsculas y lo convierte en un array
    const wordArray = [...inputOriginal.value.toUpperCase()];
    // Llama a la función printChar para cifrar cada letra del mensaje
    printChar(0, wordArray);
}

// Función recursiva que cifra cada letra del mensaje
const printChar = (currentLetterIndex, wordArray) => {
    // Si se ha cifrado toda la palabra, se detiene la recursión
    if (wordArray.length === currentLetterIndex)
        return;
    inputOriginal.value = inputOriginal.value.substring(1)
    // Crea un elemento <span> para mostrar la letra cifrada
    const spanChar = document.createElement("span");
    // Agrega el <span> al elemento con el ID 'resultado'
    resultado.appendChild(spanChar);
    // Llama a la función 'animarChar' para animar la letra cifrada
    animarChar(spanChar)
        .then(() => {
            // Obtiene la letra actual sin cifrar del array
            const charSinCodificar = wordArray[currentLetterIndex];
            // Cifra la letra y la muestra en el <span>
            spanChar.innerHTML = alfabeto.includes(charSinCodificar) ?
                alfabeto[(alfabeto.indexOf(charSinCodificar) + parseInt(rango.value)) % alfabeto.length] : charSinCodificar;
            // Llama recursivamente a la función para cifrar la siguiente letra
            printChar(currentLetterIndex + 1, wordArray);
        });
}
// Función para animar el cambio de letra en el <span>
const animarChar = spanChar => {
    let cambioDeLetra = 0; // Variable para contar el número de cambios de letra
    return new Promise(resolve => {
        // Inicia un intervalo para cambiar aleatoriamente la letra en el <span>
        const intervalo = setInterval(() => {
            spanChar.innerHTML = alfabeto[Math.floor(Math.random() * alfabeto.length)]; // Cambia la letra aleatoriamente
            cambioDeLetra++; // Incrementa el contador de cambios de letra
            // Si se han realizado 3 cambios de letra, se detiene el intervalo y se resuelve la promesa
            if (cambioDeLetra === 3) {
                clearInterval(intervalo); // Detiene el intervalo
                resolve(); // Resuelve la promesa
            }
        }, 50); // Intervalo de 50 milisegundos
    });
}