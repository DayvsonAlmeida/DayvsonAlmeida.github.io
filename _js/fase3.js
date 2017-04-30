var stg3 = {b1:true, b2:false, b3:false, b4:true}

function update(){
   var ok = false;
   ok = !(stg3.b1 && stg3.b2 || !(stg3.b3)) && !(stg3.b4);
   if(ok){
      $("#lamp").attr("src", "_images/lamp_on.png");
      show_button('#next');
   }
}

function draw(){

}

function loop(){
   update();
   draw();
   window.setTimeout(loop, 33);
}
