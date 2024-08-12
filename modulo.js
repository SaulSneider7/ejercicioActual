export function estadoEstudiante(valor) {
    if (valor < 0) {
        alert("Debes de ingresar una nota igual o superior a cero.")
    } else {
        if (valor <= 10) {
            alert("Te recomiendo estudiar un poco más.");
        } else if (valor > 10) {
            alert("Aprobaste!");
        }
    }
}