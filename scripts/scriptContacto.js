
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
     validarEdad()
     
  }
 function validarNombre(){
   let nombreFormu = document.getElementById("nombre").value.trim();
   let erroresTurno= document.getElementById("erroresTurno");
   if (nombreFormu.length>0) {
      
      if(document.getElementById("par")){
      let par = document.getElementById("par");
      erroresTurno.removeChild(par)
      document.getElementById("nombre").classList.remove("error");
      }
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
     
     
      

   }

 

 }
 function validarTel(){
   let erroresTurno= document.getElementById("erroresTurno");
   let telFormu= document.getElementById("telefono")
   let test= document.getElementById("tel");
   if(test){
      test.remove();
      telFormu.classList.remove("error");
     
   }
   if(telFormu.value==""){
      let tel= document.createElement("p");
   tel.setAttribute("id","tel")
   tel.innerHTML= "-Debe ingresar un telefono";
   erroresTurno.appendChild(tel);
   telFormu.classList.add("error")
  
   }
   else if(isNaN(telFormu.value)){
      telFormu.classList.add("error");
      let tel= document.createElement("p");
      tel.setAttribute("id","tel")
      tel.innerHTML= "-El telefono debe ser un numero";
      erroresTurno.appendChild(tel);
      telFormu.classList.add("error")
      
   }
   
}

function validarEdad(){
   
   let edades = document.getElementById("edades");
 let menos18= document.getElementById("menos18");
 let entre18y50= document.getElementById("entre18y50");
 let mas50= document.getElementById("mas50");
  let test = document.getElementById("edadesError")
  if(test){
      edades.classList.remove("error");
      test.remove();
  }
 if(!menos18.checked && !entre18y50.checked && !mas50.checked){
   let edadeError= document.createElement("p");
   edadeError.setAttribute("id","edadesError")
   edadeError.innerHTML= "-Debe elegir un rango de edad";
   erroresTurno.appendChild(edadeError);
   edades.classList.add("error");
 }
 
}