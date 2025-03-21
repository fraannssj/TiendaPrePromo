document.getElementById('guardar').addEventListener('click', () => {
    const filas = document.querySelectorAll('#horario tbody tr');
    let horario = [];

    filas.forEach(fila => {
        let dia = fila.children[0].innerText;
        let materias = [];
        for (let i = 1; i < fila.children.length; i++) {
            materias.push(fila.children[i].innerText);
        }
        horario.push({ dia, materias });
    });

    // Aquí puedes hacer lo que desees con el horario, como guardarlo en localStorage o enviarlo a un servidor.
    console.log(horario);
    document.getElementById('mensaje').innerText = "Gracias Por darle al boton <3.";
});