let fecha = new Date();
console.log(fecha.getMonth());  // 0 - 11 , 0 -> enero
console.log(fecha.getDay()); // 1 a 31
console.log(fecha.getDate()); // 0 al 6 , 0 -> domingo

let semanas = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabados'];

let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

let fechaReloj = document.getElementById("fecha");
console.log(fechaReloj)
fechaReloj.innerHTML = `${semanas[fecha.getDay()]}`



