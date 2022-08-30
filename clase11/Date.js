// Generar un programa qu se muestre la fecha de hoy con el formato YYYY MM DD

const diaHoy = () => {
    //genere un objeto de tipo Date
    const hoy = new Date();
    // obtuve el dia del mes a partir del objeto que genere
    const dia = hoy.getDate();
    // obtuve el numero de mes del dia de hoy
    const mes = hoy.getMonth();
    // obtuve el anio del dia de hoy
    const anio = hoy.getFullYear();
    const fecha = `${anio} ${mes} ${dia}`;

    const PI = 3.1415;

    console.log(fecha);    
};

diaHoy();