var b=document.querySelector("#inp1");
var h=document.querySelector("#inp2");
var out=document.querySelector("#output");

var btnCheck=document.querySelector("#btn1");

btnCheck.addEventListener("click", function calc(){
    var area=1/2*Number(b.value)*Number(h.value);

    out.innerText="The Area is "+area;


})