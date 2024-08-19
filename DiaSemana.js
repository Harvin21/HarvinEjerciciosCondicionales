// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch
let dia = 1;
let nameDia; 

switch(dia){
    case 1:
        nameDia = "Lunes";
        break;
    case 2:
        nameDia = "Martes";
        break;
    case 3:
        nameDia = "Miercoles";
        break;
    case 4:
        nameDia = "Jueves";
        break;
    case 5:
        nameDia = "Viernes";
        break;
    case 6:
        nameDia = "Sabado";
        break;
    case 7:
        nameDia = "Domingo";
        break;
    default:
        nameDia= "Numero de dia incorrecto";
}
console.log(nameDia);