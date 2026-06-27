function addition(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
   
    if(x=="" || y=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML ="Please enter both numbers";
    return;
}
 var z = parseFloat(x)+parseFloat(y);
 document.getElementById("result").style.color="yellow"
 document.getElementById("result").innerHTML="Addition :"+ z; 
}
function subtraction(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
     if(x=="" || y=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML = "Please enter both numbers";
    return;
}
    var z = parseFloat(x)-parseFloat(y);
    document.getElementById("result").style.color="orange"
   document.getElementById("result").innerHTML="Subtraction :"+ z;
}
function product(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
     if(x=="" || y=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML ="Please enter both numbers";
    return;
}
    var z = parseFloat(x)*parseFloat(y);
    document.getElementById("result").style.color="lime"
   document.getElementById("result").innerHTML="Product :"+ z;
}
function division(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
     if(x=="" || y=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML ="Please enter both numbers";
    return;
}
    if(y==0)
{
    document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML ="Cannot divide by zero";
    return;
}


    var z = parseFloat(x)/ parseFloat(y);
    document.getElementById("result").style.color="cyan"
    document.getElementById("result").innerHTML ="Division : "+z;
   

}

   function squareroot()
{
    var x = document.getElementById("num1").value;
    
     if(x=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML ="Please enter the number";
    return;
}
    var z = Math.sqrt(parseFloat(x));
    document.getElementById("result").style.color="violet"
    document.getElementById("result").innerHTML ="Square Root : " + z;
}

function cuberoot(){
    var x = document.getElementById("num1").value;
    if(x=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML = "Please enter the number";
    return;
}
    var z = Math.cbrt(parseFloat(x));
    document.getElementById("result").style.color="lightgreen"
    document.getElementById("result").innerHTML = "Cube Root : " + z;

}
function power(){
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
     if(x=="" || y=="")
{
     document.getElementById("result").style.color="red";
    document.getElementById("result").innerHTML ="Please enter both numbers";
    return;
}
    var z = Math.pow(parseFloat(x), parseFloat(y));
        document.getElementById("result").style.color="pink"
    document.getElementById("result").innerHTML="Power :"+ z; 

}
function clearData(){
document.getElementById("num1").value="";
document.getElementById("num2").value="";



}