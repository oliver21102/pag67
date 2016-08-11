
 function desordenar(ar){

 var clasee= document.getElementsByClassName(ar);
 var posiciones=[];
 var numerosD=ran(clasee.length);
for( var i=0; i<clasee.length; i++){
 posiciones.push({lf:clasee[i].style.left,tp:clasee[i].style.top});
}

for( var ii=0; ii<clasee.length; ii++){
   clasee[ii].style.left=posiciones[numerosD[ii]-1].lf;
  clasee[ii].style.top=posiciones[numerosD[ii]-1].tp;
}

    
}
 
function ran(num){
      var numeros=[];
      for (var i=1; i<num+1; i++)
      {
        numeros.push(i);
      }

      for (var  j=0; j<num; j++)
      {
        var tmp = numeros[j];
        var k = Math.floor(Math.random() * numeros.length);
        numeros[j] = numeros[k];
        numeros[k] = tmp;
      }
      return numeros;
    }


    function arrastrar(event,ui){
 var elemento=event.target.id;
 document.getElementById(elemento).style.zIndex=200;
}

 

function mostrarSig(){
  setTimeout(function(){  window.location="fin.html";  },1000);
  
 
}

 cantidad=0;
 dimension=document.getElementsByClassName("cajas2").length;
function soltar(event,ui){
   var elemento=event.target.id;
  $("#"+ui.draggable.attr('id')).appendTo($("#"+elemento));
 document.getElementById(ui.draggable.attr('id')).style.position="relative";
  document.getElementById(ui.draggable.attr('id')).style.left="0%";
   document.getElementById(ui.draggable.attr('id')).style.top="0%";
  document.getElementById(ui.draggable.attr('id')).style.width="100%";
  document.getElementById(ui.draggable.attr('id')).style.height="100%";
  //document.getElementById(ui.draggable.attr('id')).style.paddingTop="4%";
  if(esparte(ui.draggable.attr('alt'))){
    console.log("pasooooo "+ui.draggable.attr('alt'));
  $($("#"+ui.draggable.attr('id')).children('div')[0]).css("marginTop","2%");
  }else{
   $($("#"+ui.draggable.attr('id')).children('div')[0]).css("marginTop","4%");
  }
ui.draggable.draggable('option','revert',false);
 ui.draggable.draggable('option','disabled',true);
 cantidad++;  sonidoBien();
  if(cantidad==dimension){
       mostrarSig();
   }

} 
function esparte(a){
  if((a=="0")||(a=="1")||(a=="2")||(a=="3")||(a=="4")||(a=="5")||(a=="6")||(a=="7")||(a=="8")||(a=="9")){
    return true;
  }
  return false;
}

function sonidoBien(){
  var audio = document.createElement("audio");
    audio.src = "sonido/bien.wav";
    audio.play();
}

function sonidoMal(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/mal.wav";
    audio.play();
}

function sonidoFondo(){
  var audio = document.createElement("audio");
 
    audio.src = "sonido/sonidoF.mp3";
    audio.play();
}

