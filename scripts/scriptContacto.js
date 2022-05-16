
function mostrarFormularioTurno(){
   document.getElementById("turno").className= "formularios";
   document.getElementById("pWeb").className="formularios_no_mostrar";
}

function mostrarFormularioWeb(){
    document.getElementById("turno").className= "formularios_no_mostrar";
    document.getElementById("pWeb").className="formularios";
 }