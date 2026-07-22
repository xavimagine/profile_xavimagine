// Descargar cv
const boton = document.getElementById("Dcv");
boton?.addEventListener("click", () => {
    const enlace = document.createElement("a");
    enlace.href = "cv/Desarrollador_Web_CV_Javier_Diaz_Rayo.pdf";
    enlace.download = "CV_Javier_Diaz_Rayo.pdf";
    enlace.click();
});

// Efecto Máquina de Escribir
const contenedor = document.getElementById("texto-efecto");
const textoInt = contenedor?.dataset.texto || "";

let i = 0;
const velocidad = 22;

if (contenedor && textoInt) {
    contenedor.textContent = "";

    const cursor = document.createElement("span");
    cursor.className = "cursor";
    contenedor.appendChild(cursor);

    function escribir() {
        if (i < textoInt.length) {
            cursor.before(textoInt.charAt(i));
            i++;
            setTimeout(escribir, velocidad);
        }
    }
    if (textoInt) {
        escribir();
    }
}
