// Textos que quieres mostrar
let texts = ["Administrador de Sistemas Y Redes (Ciberseguridad)", "Programador Novato"];
// Índice para llevar un registro de qué texto se está mostrando
let textIndex = 0;
// Obtiene el elemento span
let span = document.querySelector(".title-desc");
// Índice para recorrer el texto
let index = 0;
// Tiempo en milisegundos entre cada letra al escribir
let typeDelay = 3000 / texts[textIndex].length;
// Tiempo en milisegundos de la pausa
let pauseDelay = 4000;
// Tiempo en milisegundos entre cada letra al retroceder
let backspaceDelay = 100 / texts[textIndex].length;
// Tiempo en milisegundos desde la última letra o pausa
let timeSinceLastLetterOrPause = 0;
// Tiempo en milisegundos de la última vez que se llamó a requestAnimationFrame
let lastTime = performance.now();

// Crea una función para agregar una letra a la vez
function typeWriter(time) {
  // Calcula el tiempo transcurrido desde la última llamada
  timeSinceLastLetterOrPause += time - lastTime;
  lastTime = time;
  // Si ha pasado suficiente tiempo, agrega una letra
  if (timeSinceLastLetterOrPause >= typeDelay) {
    if (index < texts[textIndex].length) {
      span.textContent += texts[textIndex].charAt(index);
      index++;
      timeSinceLastLetterOrPause = 0;
    } else {
      // Llama a la función para iniciar la pausa
      requestAnimationFrame(pause);
      return;
    }
  }
  // Llama a requestAnimationFrame para volver a llamar a esta función
  requestAnimationFrame(typeWriter);
}

// Crea una función para hacer una pausa
function pause(time) {
  // Calcula el tiempo transcurrido desde la última llamada
  timeSinceLastLetterOrPause += time - lastTime;
  lastTime = time;
  // Si ha pasado suficiente tiempo, inicia el efecto de retroceder
  if (timeSinceLastLetterOrPause >= pauseDelay) {
    requestAnimationFrame(backspace);
    return;
  }
  // Llama a requestAnimationFrame para volver a llamar a esta función
  requestAnimationFrame(pause);
}

// Crea una función para eliminar una letra a la vez
function backspace(time) {
  // Calcula el tiempo transcurrido desde la última llamada
  timeSinceLastLetterOrPause += time - lastTime;
  lastTime = time;
  // Si ha pasado suficiente tiempo, elimina una letra
  if (timeSinceLastLetterOrPause >= backspaceDelay) {
    if (index > 0) {
      span.textContent = span.textContent.slice(0, -1);
      index--;
      timeSinceLastLetterOrPause = 0;
    } else {
      // Cambia el valor de textIndex para mostrar el siguiente texto
      textIndex = (textIndex + 1) % texts.length;
      // Actualiza los valores de typeDelay y backspaceDelay para el nuevo texto
      typeDelay = 3000 / texts[textIndex].length;
      backspaceDelay = 300 / texts[textIndex].length;
      // Llama a la función para iniciar el efecto de escribir nuevamente
      requestAnimationFrame(typeWriter);
      return;
    }
  }
  // Llama a requestAnimationFrame para volver a llamar a esta función
  requestAnimationFrame(backspace);
}

// Llama a requestAnimationFrame para iniciar el efecto de escribir
requestAnimationFrame(typeWriter);