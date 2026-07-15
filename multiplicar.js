function generarTablas(){
    let contenedor = document.getElementById("contenedor");
    let contenido = "";
    let tabla = 5 ;

    for (let i = 1; i <= 10; i++){
        contenido = contenido + "<div class='tarjeta-operacion' >" + "<div class='multiplicacion'>" + tabla + "x" + i +"</div>" + "<div class='resultado'>" + tabla*i + "</div>" + "</div>"
        contenedor.innerHTML = contenido;
    }
}