var b,c;
var count=0;
function emoji(a){
    if(a==1)
    {
        document.getElementById("b1").innerHTML="🙂";
        document.getElementById("b2").innerHTML="2";
        document.getElementById("b3").innerHTML="3";
        document.getElementById("b4").innerHTML="4";
        document.getElementById("b5").innerHTML="5";
    }
    else if(a==2)
    {
        document.getElementById("b1").innerHTML="😀";
        document.getElementById("b2").innerHTML="😀";
        document.getElementById("b3").innerHTML="3";
        document.getElementById("b4").innerHTML="4";
        document.getElementById("b5").innerHTML="5";
    }
    else if(a==3)
    {
        document.getElementById("b1").innerHTML="😎";
        document.getElementById("b2").innerHTML="😎";
        document.getElementById("b3").innerHTML="😎";
        document.getElementById("b4").innerHTML="4";
        document.getElementById("b5").innerHTML="5";
    }
    else if(a==4)
    {
        document.getElementById("b1").innerHTML="😍";
        document.getElementById("b2").innerHTML="😍";
        document.getElementById("b3").innerHTML="😍";
        document.getElementById("b4").innerHTML="😍";
        document.getElementById("b5").innerHTML="5";
    }
    else if(a==5)
    {
        document.getElementById("b1").innerHTML="🤩";
        document.getElementById("b2").innerHTML="🤩";
        document.getElementById("b3").innerHTML="🤩";
        document.getElementById("b4").innerHTML="🤩";
        document.getElementById("b5").innerHTML="🤩";
    }
    count=a;
}
function submit()
{
    if(count!=0)
    {
        b=document.getElementById("box").innerHTML;
        c=document.getElementById("box").style;
        document.getElementById("box").innerHTML="<button class='bi bi-arrow-left' id='icon' style='color:black' onclick='back()'></button><h1>Thank You for giving us "+count+" rating.</h1><br><br><h4>made by sahil rawat.</h4>";
        document.getElementById("box").style="color:black;background-color:pink;box-shadow:inset 200px 0px 300px #1B2631;";
    }
}
function back()
{
    document.getElementById("box").style=c;
    document.getElementById("box").innerHTML=b;
}