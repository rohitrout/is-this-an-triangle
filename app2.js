var first = document.querySelector("#sd1");
var second = document.querySelector("#sd2");

var btnCheck = document.querySelector("#btn-check");

btnCheck.addEventListener("click", function calculate() {
  console.log(first.value);
  console.log(second.value);
  
  var n1 = Number(first.value * first.value);
  var n2 = Number(second.value * second.value);
  var sum = n1 + n2;
  
  var hypo = Math.sqrt(sum);
  console.log(hypo);

  document.querySelector("#output").innerText = "The Hypotenuse is : " + hypo;
});
