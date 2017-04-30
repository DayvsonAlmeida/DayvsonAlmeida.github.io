function button_action(id){
   var value;
   if(document.getElementById(id).innerHTML == "true"){
      document.getElementById(id).innerHTML = "false";
      document.getElementById(id).style.backgroundColor = '#FF0000';
      value = false;
   }else {
      document.getElementById(id).innerHTML = "true";
      document.getElementById(id).style.backgroundColor = '#4CAF50';
      value = true;
   }
   return value;
}
function button_mouseover(id){
   if(document.getElementById(id).innerHTML == "true"){
      document.getElementById(id).style.backgroundColor = "#3e8e41";
   }else{
      document.getElementById(id).style.backgroundColor = '#800000';
   }
}

function button_mouseout(id){
   if(document.getElementById(id).innerHTML == "true"){
      document.getElementById(id).style.backgroundColor = "#4CAF50";
   }else{
      document.getElementById(id).style.backgroundColor = '#FF0000';
   }
}

function show_button(id){
   $(id).show(1000);
}
