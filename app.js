function TipCalculate() {
  let Amount = document.getElementById("amount").value;
  let service = document.getElementById("service").value;
  let persons = document.getElementById("persons").value;

  if (Amount === "" || service == 0) {
    alert("Please enter values");
    return;
  }

  if (persons === "" || persons <= 1) {
    persons = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }

  let total = (Amount * service) / persons;

  total = total.toFixed(2);

  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;
}

document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("calculate").onclick = function () {
  TipCalculate();
};
