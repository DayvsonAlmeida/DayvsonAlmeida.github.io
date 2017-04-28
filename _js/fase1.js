var stg1 = {b1:false, b2:false, b3:false, b4:false}

function update(){
   var ok = false;
   ok = stg1.b1 && stg1.b2 && stg1.b3 && stg1.b4;
   if(ok){
      $("#lamp").attr("src", "_images/lamp_on.png");
   }
}

function draw(){

}

function loop(){
   update();
   window.setTimeout(loop, 33);
}
