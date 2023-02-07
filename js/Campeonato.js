function Campeonato(nombre){
    this.nombre = nombre
    this.equipos = [];
 
}
Campeonato.prototype.setEquipo =  function(equipo){
    this.equipos.push(equipo);
}

Campeonato.prototype.getEquipos =  function(){
        return this.equipos
}

Campeonato.prototype.existeJugadorCampeonato = function(rut){
    this.equipos.foreach(equipo => {
        this.equipo.getJugadores().foreach(jugador=>{
            if( jugador.isJugador(rut)){
                return jugador.isJugador(rut)
            }
              
        })
    });
    return false;

}
