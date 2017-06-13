var stg2 = {b1:true, b2:false}
var timer = 10000;
var width = 500;

function update(){
   var ok = false;
   ok = !stg2.b1 && stg2.b2;
   if(ok){
		$("#lamp").attr("src", "images/lamp_on.png");
		show_button('#next');
		$("#botao1").off("click");
		$("#botao2").off("click");
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
}
