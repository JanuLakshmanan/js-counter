const add=document.getElementById("increment");
const sub=document.getElementById("decrement");
inputbox=document.getElementById("in");
values=0;
function addValue(){
   inputvalue= document.getElementById("in").value;
   if(parseInt(inputvalue)<10 )
   {
       values=parseInt(inputvalue)+1;
   inputbox.value=values;
   document.getElementById("increment").disabled = false;
  }
  else{
    document.getElementById("increment").disabled = true;
  }
}
function minusValue(){
    if(parseInt(inputvalue)<=10 && parseInt(inputvalue)>0 )
    {inputvalue= document.getElementById("in").value;
    values=parseInt(inputvalue)-1;
    inputbox.value=values;
    document.getElementById("increment").disabled = false;}
    else
    {
        document.getElementById("decrement").disabled = true;
    }
}

inputbox.value=values;
add.addEventListener("click",addValue);
sub.addEventListener("click",minusValue);
