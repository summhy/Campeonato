const nomCampeonato = document.querySelector("#nombreCampeonato");
const nomEquipo = document.querySelector("#nombreEquipo");
const nomPoblacion = document.querySelector("#poblacionEquipo");
const rutJugador = document.querySelector("#rutJugador");
const nacimientoJugador = document.querySelector("#nacimientoJugador");
let campeonato;
let equipo;



 function agregarCampeonato(){
    campeonato = new Campeonato(nomCampeonato.value); 
    document.querySelector("#nombreCampeonato").value
    document.querySelector("#submitCampeonato").setAttribute("disabled", "");

    console.log(campeonato);
 }
   
 function agregarEquipo(){
    equipo = new Equipo(nomEquipo.value, nomPoblacion.value)
    campeonato.setEquipo(equipo);
    document.querySelector("#submitEquipo").setAttribute("disabled", "");

 }

 function agregarJugador(){
    
    if(campeonato.existeJugadorCampeonato(rutJugador.value)){
        document.querySelector("#error").textContent ="Jugador Existe"
    }else{
        let jugador1 =  new Jugador(rutJugador.value, nacimientoJugador.valueAsNumber)
        if(!equipo.setJugadores(jugador1)){
            document.querySelector("#error").textContent ="Jugador no cumple edad"
        }
        
    }
   
 }