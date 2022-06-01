
function mostrarFormularioTurno(){
   document.getElementById("turno").className= "formularios";
   document.getElementById("pWeb").className="formularios_no_mostrar";
}

function mostrarFormularioWeb(){
    document.getElementById("turno").className= "formularios_no_mostrar";
    document.getElementById("pWeb").className="formularios";
 }


  function validarTodo(){
     validarNombre();
     validarTel();
     return false;
  }
 function validarNombre(){
   let nombreFormu = document.getElementById("nombre").value.trim();
   let erroresTurno= document.getElementById("erroresTurno");
   if (nombreFormu.length>0) {
      
      
      let par = document.getElementById("par");
      erroresTurno.removeChild(par)
      document.getElementById("nombre").classList.remove("error");
      
   }
   else{
       document.getElementById("nombre").classList.add("error");
       erroresTurno= document.getElementById("erroresTurno");
      let test= document.getElementById("par");
      
      
      
      if(!test){
      let par= document.createElement("p");
      par.setAttribute("id","par")
      par.innerHTML= "-Debe ingresar su nombre";
      erroresTurno.appendChild(par);
     
      }
     
     
      return false;

   }

 

 }
 function validarTel(){
   let erroresTurno= document.getElementById("erroresTurno");
   let telFormu= document.getElementById("telefono")
   let test= document.getElementById("tel");
   if(test){
      test.remove();
   }
   if(telFormu.value==""){
      let tel= document.createElement("p");
   tel.setAttribute("id","tel")
   tel.innerHTML= "-Debe ingresar un telefono";
   erroresTurno.appendChild(tel);
   
  
   }
   else if(isNaN(telFormu.value)){
      let tel= document.createElement("p");
      tel.setAttribute("id","tel")
      tel.innerHTML= "-El telefono debe ser un numero";
      erroresTurno.appendChild(tel);
      
   }
   return false;
}