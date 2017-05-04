var stg7 = {b1: false, b2: false, b3: true, b4: false}
var timer = 12000;

function update(){
   var ok = false;
   ok = !(!stg7.b1) && (stg7.b2 && stg7.b3 || stg7.b4);
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
