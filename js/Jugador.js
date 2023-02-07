function Jugador(rut, nacimiento){
    this.nombre;
    this.apellido;
    this.nacimiento = nacimiento;
    this.rut = rut;
    this.capitan=false;   
}

Jugador.prototype.setNombre =function(nombre){
    this.nombre = nombre;
}
Jugador.prototype.setApellido=function(apellido){
    this.apellido = apellido;
}

Jugador.prototype.getRut= function(){
    return this.rut;
}

Jugador.prototype.setNombreCompleto = function(nombre, apellido){
    this.setNombre(nombre);
    this.setApellido(apellido);
}

Jugador.prototype.isCapitan = function(){
    return this.capitan;
}

Jugador.prototype.setCapitan = function(capitan){
    this.capitan = capitan;
}

Jugador.prototype.edad =  function(){
    let year = new Date();
    return year.getFullYear() - this.nacimiento
}

Jugador.prototype.isJugador = function(rut){
    return this.rut == rut
}