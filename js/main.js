const nomCampeonato = document.querySelector("#nombreCampeonato");
const nomEquipo = document.querySelector("#nombreEquipo");
const nomPoblacion = document.querySelector("#poblacionEquipo");
const rutJugador = document.querySelector("#rutJugador");
const nacimientoJugador = document.querySelector("#nacimientoJugador");
const esCapitan = document.querySelector("#inpCapitan");
const listadoJugadores = document.querySelector("#listadoJugadores");
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
        let jugador = new Jugador(rutJugador.value, nacimientoJugador.valueAsNumber)
        if(!equipo.setJugadores(jugador)){
            document.querySelector("#error").textContent ="Jugador no cumple edad"
        }else{
            console.log(esCapitan.checked)
            if(esCapitan.checked){
                equipo.limpiarCapitan();
            }
            jugador.setCapitan(esCapitan.checked);
            mostrarJugadores()
        }
    }
 }

 function mostrarJugadores(){
    listadoJugadores.innerHTML ="rut      capitan <br>";
    equipo.jugadores.forEach(element => {
        listadoJugadores.innerHTML += element.getRut() + 
                                      ' ' + element.isCapitan() +'<br>';
    });
 }