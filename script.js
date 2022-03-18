// Button Convert
let conv = document.getElementById("convert");
conv.onclick = function () {
  let inSuhu = document.getElementById("inputCelcius").value;
  if (inSuhu == "" || isNaN(inSuhu)) {
    alert("Masukkan Data Yang Benar !!!");
  } else {
    inSuhu = parseFloat(inSuhu);
    document.getElementById("outputFarenheit").innerHTML =
      (9 / 5) * inSuhu + 32;
    document.getElementById("outputReamur").innerHTML = (4 / 5) * inSuhu;
    document.getElementById("outputKelvin").innerHTML = inSuhu + 273;
  }
};
// Button Reset
let btnreset = document.getElementById("reset");
btnreset.onclick = function () {
  document.querySelector("#inputCelcius").value = "";
  document.querySelector("td:nth-child(1)").innerHTML = "?";
  document.querySelector("td:nth-child(2)").innerHTML = "?";
  document.querySelector("td:nth-child(3)").innerHTML = "?";
};
// Switch
let btnSwtch = document.getElementById("switchTheme");
btnSwtch.onclick = function () {
  document.querySelector("body").classList.toggle("dark");
};
