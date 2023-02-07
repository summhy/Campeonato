function Equipo(nombre, poblacion){
    this.nombre = nombre
    this.poblacion = poblacion
    this.jugadores=[];
}

Equipo.prototype.setJugadores = function(jugador){
    if(jugador.edad() >= 18){
        this.jugadores.push(jugador)
        return true
    }else{
        return false
    }
    
} 

Equipo.prototype.getJugadores = function(){
    return this.jugadores;
}