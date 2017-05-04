var stg5 = {b1: true, b2: false, b3: false, b4: true}
var timer = 10000;

function update(){
   var ok = false;
   ok = !(stg5.b1 && stg5.b2 || !(stg5.b3)) && !stg5.b4;
   if(ok){
      $("#lamp").attr("src", "_images/lamp_on.png");
      show_button('#next');
      $("#botao1").off("click");
      $("#botao2").off("click");
      $("#botao3").off("click");
      $("#botao4").off("click");
   }else{
      timer -= 33;
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
   setTimeout(loop, 33);
}
