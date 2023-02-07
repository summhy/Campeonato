const nomCampeonato = document.querySelector("#nombreCampeonato");
const nomEquipo = document.querySelector("#nombreEquipo");
const nomPoblacion = document.querySelector("#poblacionEquipo");
let campeonato;
let equipo;

 function agregarCampeonato(){
    campeonato = new Campeonato(nomCampeonato.value); 
    document.querySelector("#nombreCampeonato").value
    document.querySelector("#submitCampeonato").setAttribute("disabled", "");
 }
   
 function agregarEquipo(){
    equipo = new Equipo(nomEquipo.value, nomPoblacion.value)
    campeonato.setEquipo(equipo);
    console.log(campeonato);
    document.querySelector("#submitEquipo").setAttribute("disabled", "");

 }