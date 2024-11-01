function mostrarDescripcion(element) {
    // Obtener el div de descripción dentro del ODS clickeado
    const descripcionDiv = element.querySelector('.descripcion');

    // Verificar si la descripción está actualmente visible
    if (descripcionDiv.style.display === 'none' || descripcionDiv.style.display === '') {
        // Si está oculta, mostrarla
        descripcionDiv.style.display = 'block'; // Mostrar la descripción
    } else {
        // Si está visible, ocultarla
        descripcionDiv.style.display = 'none'; // Ocultar la descripción
    }
}


