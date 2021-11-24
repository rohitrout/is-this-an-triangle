var first = document.querySelector("#ang1");
var second = document.querySelector("#ang2");
var third = document.querySelector("#ang3");

var btnCheck = document.querySelector("#btn-check");

btnCheck.addEventListener("click", function calculate() {
  console.log(first.value);
  console.log(second.value);
  console.log(third.value);

  if(Number(first.value) <=0 || Number(second.value) <=0 || Number (third.value) <=0){
    document.querySelector("#output").innerHTML="Please Enter Valid Values";
  }else{

  if (
    Number(first.value) + Number(second.value) + Number(third.value) ===180) {
    document.querySelector("#output").innerText="This is an Triangle";
  } else {
    document.querySelector("#output").innerText="Sorry This is not an Triangle";
  }}
});
