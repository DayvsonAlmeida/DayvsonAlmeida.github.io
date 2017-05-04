var stg3 = {b1:false, b2:false, b3:true}
var timer = 10000;

function update(){
   var ok = false;
   ok = stg3.b1 && (stg3.b2 || !stg3.b3);
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
