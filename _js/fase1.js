var stg1 = {b1:false, b2:false, b3:false, b4:false};

function update(){
   var ok = false;
   ok = stg1.b1 && stg1.b2 && stg1.b3 && stg1.b4;
   if(ok){
      $("#lamp").attr("src", "_images/lamp_on.png");
      show_button('#next');
      $("#botao1").off("click");
      $("#botao2").off("click");
      $("#botao3").off("click");
      $("#botao4").off("click");
   }
}

function draw(){

}

function loop(){
   update();
   draw();
   setTimeout(loop, 33);
}
