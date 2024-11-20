// Inicializa un array para almacenar las compras
let compras = [];

// Función para actualizar el total de la compra
function actualizarTotal() {
    let total = 0;
    compras.forEach(compra => {
        total += compra.precio;
    });
    document.getElementById('total').textContent = 'Total: $' + total.toFixed(2);
}

// Función para agregar una compra
function agregarCompra(nombre, precio) {
    // Agrega la compra al array
    compras.push({ nombre, precio });

    // Actualiza el total
    actualizarTotal();

    // Mostrar las compras en el HTML
    mostrarCompras();
}

// Función para mostrar las compras en el HTML
function mostrarCompras() {
    const listaCompras = document.getElementById('lista-compras');
    listaCompras.innerHTML = ''; // Limpiar la lista antes de actualizarla
    compras.forEach(compra => {
        const item = document.createElement('li');
        item.textContent = `${compra.nombre} - $${compra.precio.toFixed(2)}`;
        listaCompras.appendChild(item);
    });
}

// Configura los botones para que, al hacer clic, se agregue la información de la compra
document.addEventListener('DOMContentLoaded', function() {
    const botonesCompra = document.querySelectorAll('.boton');

    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function() {
            const artista = this.closest('.card-artista');
            const nombreArtista = artista.querySelector('h2').textContent;
            const precio = parseFloat(artista.querySelector('.precio').getAttribute('data-precio'));

            agregarCompra(nombreArtista, precio);
        });
    });
});


// Eliminar compras totales //

// Función para limpiar todas las compras
function limpiarCompras() {
    compras = []; // Vacía el array de compras
    actualizarTotal(); // Reinicia el total a cero
    mostrarCompras(); // Limpia la lista de compras en el HTML
}

document.addEventListener('DOMContentLoaded', function() {
    const botonesCompra = document.querySelectorAll('.boton');

    botonesCompra.forEach(boton => {
        boton.addEventListener('click', function() {
            const artista = this.closest('.card-artista');
            const nombreArtista = artista.querySelector('h2').textContent;
            const precio = parseFloat(artista.querySelector('.precio').getAttribute('data-precio'));

            agregarCompra(nombreArtista, precio);
        });
    });

    // Configurar el botón de limpiar usando su clase
    const botonLimpiar = document.querySelector('.boton-limpiar');
    if (botonLimpiar) {
        botonLimpiar.addEventListener('click', limpiarCompras);
    }
});


