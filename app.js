// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    const mensajeError = document.getElementById('mensajeError');

    // Limpiar el mensaje de error cada vez que se intenta agregar un nombre
    mensajeError.textContent = "";

    // Validación de entrada: el campo no puede estar vacío
    if (nombre === "") {
        mensajeError.textContent = "Por favor, ingresa un nombre válido.";
        return;
    }

    // Validación de entrada: el nombre no puede estar repetido
    if (amigos.includes(nombre)) {
        mensajeError.textContent = "Este nombre ya está en la lista.";
        return;
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de entrada después de agregar el nombre

    // Actualizar la lista visual de amigos en la interfaz
    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    const mensajeError = document.getElementById('mensajeError');
    mensajeError.textContent = ""; // Limpiar el mensaje de error antes de validar

    // Validación: se necesitan al menos 2 nombres para realizar el sorteo
    if (amigos.length < 2) {
        mensajeError.textContent = "Necesitas al menos 2 amigos para realizar el sorteo.";
        return;
    }

    // Seleccionar un índice aleatorio del array de amigos
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSecreto}!</li>`;
}