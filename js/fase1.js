var stg1 = {b1:false, b2:false, b3:false, b4:false};
var timer = 10000;
var width = 500;

function update(){
   var ok = false;
   ok = stg1.b1 && stg1.b2 && stg1.b3 && stg1.b4;
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
         $("#botao1").off("click");
         $("#botao2").off("click");
         $("#botao3").off("click");
         $("#botao4").off("click");
         show_button("#reset");
      }
   }
}

function draw(){

}

function loop(){
   update();
   draw();
}
