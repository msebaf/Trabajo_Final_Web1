let fotos=[];
fotos[0]= "Img/cetif/1.jpg";
fotos[1]= "Img/cetif/2.jpg";
fotos[2]= "Img/cetif/3.jpg";
fotos[3]= "Img/cetif/4.jpg";
fotos[4]= "Img/cetif/5.jpg";
fotos[5]= "Img/cetif/6.jpg";
fotos[6]= "Img/cetif/7.jpg";


let numFoto=0;
function cambiarImagen(){

  
   
   
    document.getElementById("imgCert").setAttribute("src", fotos[numFoto])
    
   
    if(numFoto==7){
        numFoto=0;
    }
    switch(numFoto){
        case 0:
            document.getElementById("a0").classList.remove("Clickeable");
            document.getElementById("a6").classList.remove("clicked");
            document.getElementById("a0").classList.add("clicked");
            break;
        case 1:
            document.getElementById("a1").classList.remove("Clickeable");
            document.getElementById("a0").classList.remove("clicked");
            document.getElementById("a1").classList.add("clicked");
            break;
         case 2:
                document.getElementById("a2").classList.remove("Clickeable");
                document.getElementById("a1").classList.remove("clicked");
                document.getElementById("a2").classList.add("clicked");
                break;
        case 3:
            document.getElementById("a3").classList.remove("Clickeable");
            document.getElementById("a2").classList.remove("clicked");
            document.getElementById("a3").classList.add("clicked");
            break;
        case 4:
            document.getElementById("a4").classList.remove("Clickeable");
            document.getElementById("a3").classList.remove("clicked");
            document.getElementById("a4").classList.add("clicked");
            break;
        case 5:
            document.getElementById("a5").classList.remove("Clickeable");
            document.getElementById("a4").classList.remove("clicked");
            document.getElementById("a5").classList.add("clicked");
            break;
        case 6:
            document.getElementById("a6").classList.remove("Clickeable");
            document.getElementById("a5").classList.remove("clicked");
            document.getElementById("a6").classList.add("clicked");
            break;
    }
    numFoto+=1;
    }


  let tiempo =  setInterval(cambiarImagen, 5000);

  function elegirUno(a, n){
      
    let elemento = document.getElementById("certificados")
    let elementos = elemento.querySelectorAll("div");
    for (let index = 0; index < elementos.length; index++) {
        elementos[index].classList.remove("clicked");
        elementos[index].classList.add("clickeable");
        
    }
    
    a.classList.add("clicked");
    numFoto= n;
    cambiarImagen();
  
  }
