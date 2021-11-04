

function getValue() {
  let isChecked = document.getElementById("toggle").checked;
  
  if (isChecked == false){
    //alert("Toggle is Off");
    document.getElementsByClassName("amount")[0].innerHTML="199.99";
    document.getElementsByClassName("amount")[1].innerHTML="249.99";
    document.getElementsByClassName("amount")[2].innerHTML="399.99";
  }
  else{
   // alert("Toggle is On");
     document.getElementsByClassName("amount")[0].innerHTML="19.99";
    document.getElementsByClassName("amount")[1].innerHTML="24.99";
    document.getElementsByClassName("amount")[2].innerHTML="39.99"; 
  }
}
