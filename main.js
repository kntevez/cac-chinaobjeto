//Creación del objeto
class Animal {
    constructor(nombre, dueña, raza, edad, actividades, comida, visitaVete, vacunas) {
        this.nombre = nombre;
        this.dueña = dueña;
        this.raza = raza;
        this.edad = edad;
        this.actividades = actividades;
        this.comida = comida;
        this.visitaVete = visitaVete;
        this.vacunas = vacunas;
    }
};

//En consola
let china = new Animal("China", "Gisela Flores", "Romano", 2, "dormir en su silloncito", "Wiskas", { dia: "28", mes: "septiembre", horario: "15:00 hs" }, { Vacuna_A: true, Vacuna_B: true, Vacuna_C: false });
console.log(china);


//Lectura de los objetos
let visitaVete = china.visitaVete;
console.log(visitaVete);

let fechaVete = `${visitaVete.dia} de ${visitaVete.mes}, a las ${visitaVete.horario}`;

let vac = china.vacunas;

function tieneVacunas(vac) {
    if (vac.Vacuna_A && vac.Vacuna_B && vac.Vacuna_C)
        return "está vacunado"
    else return "falta vacunar"
};


//En el HTML
document.querySelector("ul").innerHTML = `  <span><b>Nombre:</b> ${china.nombre}</span><br>
                                            <span><b>Dueña:</b> ${china.dueña}</span><br>
                                            <span><b>Raza:</b> ${china.raza}</span><br>
                                            <span><b>Edad:</b> ${china.edad}</span><br>
                                            <span><b>Actividades:</b> ${china.actividades}</span><br>
                                            <span><b>Comida:</b> ${china.comida}</span><br>
                                            <span><b>Visita al veterinario:</b> ${fechaVete}</span><br>
                                            <span><b>Vacunas:</b> ${tieneVacunas(vac)}</span><br>`;