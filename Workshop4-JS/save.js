function guardar() {
    event.preventDefault(); //This event is for avoiding to send
    // get the values to form
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    // create a object
    const contacto = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    };
    // get the date
    const contactosGuardados = JSON.parse(localStorage.getItem('contactos')) || [];
    // add the new contact to array
    contactosGuardados.push(contacto);
    // save the array to localStorage
    localStorage.setItem('contactos', JSON.stringify(contactosGuardados));
    // Clean the form
    document.getElementById('formulario').reset();
    // show the array in the table
    mostrarContactos(contactosGuardados);
    alert('¡Contacto guardado correctamente!');
}

// funtion to load the clients when I enter to the page
window.onload = function() {
    const contactosGuardados = JSON.parse(localStorage.getItem('contactos')) || [];
    mostrarContactos(contactosGuardados);
};

function mostrarContactos(contactos) {
    const tablaClientes = document.getElementById('tablaClientes');
    tablaClientes.innerHTML = '';

    contactos.forEach((contacto, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td>${contacto.nombre}</td>
            <td>${contacto.apellido}</td>
            <td>${contacto.telefono}</td>
        `;
        tablaClientes.appendChild(fila);
    });
}
