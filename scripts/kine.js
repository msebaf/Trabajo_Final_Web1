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
    console.log("hola")
   
   
    document.getElementById("imgCert").setAttribute("src", fotos[numFoto])
 
   numFoto+=1;
    if(numFoto==7){
        numFoto=0;
    }

}
function tiempo(){
    setInterval(cambiarImagen, 5000);
}