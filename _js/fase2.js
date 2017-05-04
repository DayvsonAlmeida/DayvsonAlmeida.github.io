var stg2 = {b1:true, b2:false}
var timer = 10000;

function update(){
   var ok = false;
   ok = !stg2.b1 && stg2.b2;
   if(ok){
		$("#lamp").attr("src", "_images/lamp_on.png");
		show_button('#next');
		$("#botao1").off("click");
		$("#botao2").off("click");
   }else{
   		timer -= 33;
   		if(timer < 0){
   			show_button('#reset');
            $("#botao1").off("click");
            $("#botao2").off("click");
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
