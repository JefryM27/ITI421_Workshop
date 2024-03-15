function guardar() {
    event.preventDefault(); // Avoid that the form save

    // get the values
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;

    // create the object with the date
    const contacto = {
        nombre: nombre,
        apellido: apellido,
        telefono: telefono
    };

    // get the dates into the imputs
    const contactosGuardados = JSON.parse(localStorage.getItem('contactos')) || [];

    // Add the content into the array
    contactosGuardados.push(contacto);

    // save the content in the JSON
    localStorage.setItem('contactos', JSON.stringify(contactosGuardados));

    // Show the content in console
    console.log("Arreglo de contactos guardados:", contactosGuardados);

    // Clean the form
    document.getElementById('formulario').reset();

    //Option to show the message
    alert('¡Contacto guardado correctamente!');
    
}


