function generarTablas(){
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
    let tabla = parseInt(document.getElementById("txtTabla").value);
    let titulo = document.getElementById("titulo")

    if (isNaN(tabla)){
        tabla = 0;
    }

    titulo.innerHTML = "Tabla del " + tabla

    for (let i = 1; i <= 10; i++){
        contenido = contenido + "<div class='tarjeta-operacion' >" + "<div class='multiplicacion'>" + tabla + "x" + i +"</div>" + "<div class='resultado'>" + tabla*i + "</div>" + "</div>"
    }
    contenedor.innerHTML = contenido;
}