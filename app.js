// Desafio Amigo secreto
let amigos =[];
//Agregar nombre de amigo a la lista

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    // Limpiar lista una vez realizado un sorteo
    if (document.getElementById("resultado").innerHTML !== "") {
        amigos = [];
        actualizarlista();
        document.getElementById("resultado").innerHTML = "";
    }
    // validar si el nombre es valido 
    if (nombre === "" || !isNaN(nombre)) {
        alert("Por favor, ingresa un nombre válido.");
    } else { amigos.push(nombre);
    limpiarCaja();
    actualizarlista();
    }
}
// Limpiar caja de texto
function limpiarCaja() {
    document.getElementById("amigo").value = "";
}
// Actualiza la lista de amigos en el HTML
function actualizarlista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i< amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}
//Sortea amigo secreto
function sortearAmigo() {
    if (amigos.length === 0 ) {
    alert ("Inserte nombres");
    return; 
    }
    const idx = Math.floor(Math.random() * amigos.length);
    const sorteado = amigos[idx];
    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${sorteado}`;
}
