function button_action(id){
   var value;
   if(document.getElementById(id).innerHTML == "true"){
      document.getElementById(id).innerHTML = "false";
      document.getElementById(id).style.backgroundColor = '#FF041E';
      value = false;
   }else {
      document.getElementById(id).innerHTML = "true";
      document.getElementById(id).style.backgroundColor = '#4CAF50';
      value = true;
   }
   return value;
}
