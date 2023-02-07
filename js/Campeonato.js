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
    let flag = false
    this.equipos.forEach(equipo => {
        equipo.getJugadores().forEach(jugador=>{
            if( jugador.isJugador(rut)){
                flag= true
            }   
        })
    });
    return flag;

}
