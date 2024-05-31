// Obtener elementos del DOM por su ID
const stopwatch = document.getElementById('stopwatch');
const playPauseButton = document.getElementById('play-pause');
const secondSphere = document.getElementById('seconds-sphere');

// Variables para el intervalo del cronómetro y el tiempo transcurrido
let stopwatchInterval;
let runningTime = 0;

// Función para manejar el botón de reproducción/pausa
const playPause = () => {
    // Verificar si el botón está en estado de pausa
    const isPause = !playPauseButton.classList.contains('running');
    
    if (isPause) { // Si está en pausa
        // Agregar la clase 'running' al botón
        playPauseButton.classList.add('running');
        // Iniciar el cronómetro
        start();
    } else { // Si no está en pausa
        // Remover la clase 'running' del botón
        playPauseButton.classList.remove('running');
        // Pausar el cronómetro
        pause();
    }
}

// Función para pausar el cronómetro
const pause = () => {
    // Pausar la animación del segundo esfero
    secondSphere.style.animationPlayState = "paused";
    // Limpiar el intervalo del cronómetro
    clearInterval(stopwatchInterval);
}

// Función para iniciar el cronómetro
const start = () => {
    // Configurar la animación del segundo esfero
    secondSphere.style.animation = 'rotacion 60s linear infinite';
    // Calcular el tiempo de inicio restando el tiempo transcurrido
    let startTime = Date.now() - runningTime;
    // Iniciar la animación del segundo esfero
    secondSphere.style.animationPlayState = 'running';
    // Establecer el intervalo para actualizar el cronómetro
    stopwatchInterval = setInterval(() => {
        // Calcular el tiempo transcurrido
        runningTime = Date.now() - startTime;
        // Actualizar el contenido del cronómetro
        stopwatch.textContent = calculateTime(runningTime);
    }, 1000);
}

// Función para detener el cronómetro
const stop = () => {
    // Resetear la posición del segundo esfero
    secondSphere.style.transform = 'rotate(-90deg) translateX(60px)';
    // Detener la animación del segundo esfero
    secondSphere.style.animation = 'none';
    // Remover la clase 'running' del botón
    playPauseButton.classList.remove('running');
    // Reiniciar el tiempo transcurrido
    runningTime = 0;
    // Limpiar el intervalo del cronómetro
    clearInterval(stopwatchInterval);
    // Restablecer el contenido del cronómetro a '00:00'
    stopwatch.textContent = '00:00';
}

// Función para calcular el tiempo mostrado en el cronómetro
const calculateTime = runningTime => {
    // Calcular el total de segundos y minutos
    const total_seconds = Math.floor(runningTime / 1000);
    const total_minutes = Math.floor(total_seconds / 60);

    // Obtener los segundos y minutos mostrados con formato
    const display_seconds = (total_seconds % 60).toString().padStart(2, "0");
    const display_minutes = total_minutes.toString().padStart(2, "0");

    // Retornar el tiempo formateado
    return `${display_minutes}:${display_seconds}`;
}

// Agregar un event listener al botón de reproducción/pausa
playPauseButton.addEventListener('click', playPause);
