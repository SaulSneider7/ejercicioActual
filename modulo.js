export function verificarEdad(edad) {
    if (edad < 0) {
        alert("La edad no puede ser negativa.");
    } else if (edad < 12) {
        alert("Eres un niño.");
    } else if (edad >= 12 && edad <= 17) {
        alert("Eres un adolescente.");
    } else if (edad >= 18 && edad <= 24) {
        alert("Eres un aduuuuuulto independiente con guuuuuuuuuustos bien dementes.");
    } else if (edad >= 25 && edad <= 64) {
        alert("Eres un adulto.");
    } else {
        alert("Eres un anciano. Pipipi :c");
    }
}