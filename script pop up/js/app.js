

/*  função simples para janela pop-up (onMouseout) aparecer apenas uma vez  */

var e = 0

function contact(){
   if(e < 1){
   var email = prompt("--- ")
   e++
   }
}