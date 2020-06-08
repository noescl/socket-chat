const crearMensaje = (nombre, mensaje) => {
    return {
        nombre,
        mensaje,
        fecha: new Date().getTime() //en que momento fue enviado el msg
    };
}

module.exports = { crearMensaje }