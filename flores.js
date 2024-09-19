document.addEventListener('DOMContentLoaded', function() {
    const ramo = document.querySelector('.ramo-de-girasoles');
    const mensaje = document.getElementById('mensaje');
    const totalGirasoles = 8;  // Número de girasoles en el ramo
    let girasolCount = 0;

    // Función para crear un girasol
    function crearGirasol() {
        const girasol = document.createElement('div');
        girasol.classList.add('girasol');

        const centro = document.createElement('div');
        centro.classList.add('centro');
        girasol.appendChild(centro);

        // Crear y añadir los pétalos
        for (let i = 0; i < 8; i++) {
            const petalo = document.createElement('div');
            petalo.classList.add('petalo');
            petalo.style.transform = `rotate(${i * 45}deg)`;
            girasol.appendChild(petalo);
        }

        // Añadir el girasol al ramo
        ramo.appendChild(girasol);
        girasolCount++;

        // Si se han creado todos los girasoles, mostrar el mensaje
        if (girasolCount === totalGirasoles) {
            setTimeout(() => {
                mensaje.style.opacity = 1;  // Mostrar el mensaje con animación
            }, 500);  // Añadir un pequeño retraso antes de mostrar el mensaje
        }
    }

    // Función para añadir girasoles progresivamente
    function crearRamo() {
        if (girasolCount < totalGirasoles) {
            crearGirasol();
            setTimeout(crearRamo, 700);  // Esperar 700ms antes de crear el siguiente girasol
        }
    }

    // Ocultar el mensaje al principio
    mensaje.style.opacity = 0;

    // Iniciar la creación del ramo de girasoles cuando la página cargue
    crearRamo();
});
