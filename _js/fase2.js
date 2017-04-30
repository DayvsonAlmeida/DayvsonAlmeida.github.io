var stg2 = {b1:true, b2:false, b3:false}

function update(){
   var ok = false;
   ok = !(stg2.b1 || stg2.b2) && stg2.b3;
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
