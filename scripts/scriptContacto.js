
function mostrarFormularioTurno(){
   document.getElementById("turno").className= "formularios";
   document.getElementById("pWeb").className="formularios_no_mostrar";
}

function mostrarFormularioWeb(){
    document.getElementById("turno").className= "formularios_no_mostrar";
    document.getElementById("pWeb").className="formularios";
 }


  function validarTodo(){
     
    let okNombre= validarNombre();
    let okTel = validarTel();
    let okEdad= validarEdad();
    let okMail=  validarMail();
     let okMotivo=validarMotivo();
     if(okEdad && okMail && okMotivo && okNombre && okTel){
        exito();
      document.getElementById("dContact").submit()
   }
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
      return true;
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
      telFormu.classList.remove("error");
     
   }
   if(telFormu.value==""){
      let tel= document.createElement("p");
   tel.setAttribute("id","tel")
   tel.innerHTML= "-Debe ingresar un telefono";
   erroresTurno.appendChild(tel);
   telFormu.classList.add("error")
     return false
   }
   else if(isNaN(telFormu.value)){
      telFormu.classList.add("error");
      let tel= document.createElement("p");
      tel.setAttribute("id","tel")
      tel.innerHTML= "-El telefono debe ser un numero";
      erroresTurno.appendChild(tel);
      telFormu.classList.add("error")
      return false
   }
   return true
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
   return false
 }
  return true;
}

function validarMail(){

   let elCorreo= document.getElementById("mail");
   
   let test = document.getElementById("mailError")
  if(test){
      elCorreo.classList.remove("error");
      test.remove();
  }
   let patronMail=  /^\w+@\w+(\.\w{3})$/;

   if(elCorreo.value==""){
      elCorreo.classList.add("error");
         let mailError= document.createElement("p");
         mailError.setAttribute("id","mailError")
         mailError.innerHTML= "-Debe ingresar una direccion de Email";
         erroresTurno.appendChild(mailError);
         return false;
   }
    else if(elCorreo.value!="" && !patronMail.test(elCorreo.value)){
         elCorreo.classList.add("error");
         let mailError= document.createElement("p");
         mailError.setAttribute("id","mailError")
         mailError.innerHTML= "-Debe ingresar un formato de Email valido";
         erroresTurno.appendChild(mailError);
         return false;
   }
   return true
}

function validarMotivo(){
   let motivo = document.getElementById("motivoConsulta");
   let test = document.getElementById("motivoError")
   if(test){
       motivo.classList.remove("error");
       test.remove();
   }
   if(motivo.value==""){
      motivo.classList.add("error");
         let motivoError= document.createElement("p");
         motivoError.setAttribute("id","motivoError")
         motivoError.innerHTML= "-Debe escribir el motivo de su consulta";
         erroresTurno.appendChild(motivoError);
         return false;
   }
   return true;
}

function validaPedidoWeb(){
 let text = document.getElementById("Pweb-cliente");
 
 let divi = document.getElementById("pWeb");

 if (text.value.length==0) {
    if(!document.getElementById("webError")){
    text.classList.add("error");
    let webError= document.createElement("p");
         webError.setAttribute("id","webError")
         webError.innerHTML= "Por favor describa su pedido";
       divi.appendChild(webError);}
         return false;

    
 }

 exito();
 document.getElementById("formWeb").submit();
 return true;

}


function exito(){
   alert("Su consulta fue enviada con exito");
}

function clickRemoverFondo(){
   if(document.getElementById("Pweb-cliente").className== "error"){
   document.getElementById("Pweb-cliente").classList.remove("error");
   }
}