var stg6 = {b1: false, b2: false, b3: true, b4: true}
var timer = 10000;
var width = 500;

function update(){
   var ok = false;
   ok = (stg6.b1 || stg6.b2) && !(stg6.b3 && stg6.b4);
   if(ok){
      $("#lamp").attr("src", "images/lamp_on.png");
      show_button('#next');
      $("#botao1").off("click");
      $("#botao2").off("click");
      $("#botao3").off("click");
      $("#botao4").off("click");
   }else{
      timer -= 33;
      width -= 1.65;
      document.getElementById("TimeLeft").style.width = width + "px";
      if(width < 0){
         width = 0;
      }else if (width < 250 && width > 125){
         document.getElementById("TimeLeft").style.backgroundColor = "yellow";
      }else if(width < 125){
         document.getElementById("TimeLeft").style.backgroundColor = "red";
      }
      if(timer < 0){
         show_button("#reset");
         $("#botao1").off("click");
         $("#botao2").off("click");
         $("#botao3").off("click");
         $("#botao4").off("click");
      }
   }
}

function draw(){

}

function loop(){
   update();
   draw();
}
