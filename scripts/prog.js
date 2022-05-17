
 let imgs=[];
 imgs[0]= "../Img/01.jpg"
 imgs[1]="../Img/02.jpg"
 imgs[2]="../Img/03.jpg"
 imgs[3]= undefined
function pasarProyecto(){
   /* imgs[3]= imgs[2]
    imgs[2]= imgs[1]
    imgs[1]= imgs[0]
    imgs[0]= imgs[3] */
    for(i=imgs.length-1;i>0; i--){
        imgs[i]=imgs[i-1]
    }
    imgs[0]=imgs[imgs.length-1];
   
   document.getElementById("img1").setAttribute("src", imgs[0])
   document.getElementById("img2").setAttribute("src", imgs[1])
   document.getElementById("img3").setAttribute("src", imgs[2])
}
function volverProyecto(){
    /*imgs[3]= imgs[0]
    imgs[0]= imgs[1]
    imgs[1]= imgs[2]
    imgs[2]= imgs[3] */
    imgs[imgs.length-1]=imgs[0];
    for(i=0;i<imgs.length-1; i++){
        imgs[i]=imgs[i+1]
    }
    
   
    
    document.getElementById("img1").setAttribute("src", imgs[0])
    document.getElementById("img2").setAttribute("src", imgs[1])
    document.getElementById("img3").setAttribute("src", imgs[2])
 }

 function openBoard(){
    let laImagen= document.getElementById("img2").getAttribute("src");
    if( laImagen == "../Img/01.jpg"){
   window.open("https://msebaf.github.io/Etch-A-Sketch/");
    }
    else if(laImagen=="../Img/02.jpg"){
        window.open("https://msebaf.github.io/calculator/");
    }
    else if(laImagen=="../Img/03.jpg"){
        window.open("https://msebaf.github.io/Rock_Paper_Scisor/");
    }


 }