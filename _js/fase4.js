var stg4 = {b1: true, b2: false, b3: false}
var timer = 10000;

function update(){
   var ok = false;
   ok = !(stg4.b1 || stg4.b2) && stg4.b3;
   if(ok){
      $("#lamp").attr("src", "_images/lamp_on.png");
      show_button('#next');
      $("#botao1").off("click");
      $("#botao2").off("click");
      $("#botao3").off("click");
   }else{
      timer -= 33;
      if(timer < 0){
         show_button("#reset");
         $("#botao1").off("click");
         $("#botao2").off("click");
         $("#botao3").off("click");
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
