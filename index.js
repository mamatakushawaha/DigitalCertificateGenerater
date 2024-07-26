const inputBox=document.getElementById("input-box");
function check(){
    var input=document.getElementById('fname');
    if(input.value !=" "){
        ecertificate();
    }
    else{
        alert("input field empty");
    }
     inputBox.value='';
}
function ecertificate(){
    var x= document.getElementById("main");
    x.style.display="block";
    var cname=document.getElementById("fname").value;
    var courses=document.getElementById("fcourse").value;
    document.getElementsByTagName('B')[0].innerHTML=cname;
    document.getElementsByTagName('h3')[0].innerHTML=courses;
}
