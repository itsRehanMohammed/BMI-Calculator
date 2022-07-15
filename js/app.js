let calculateBMI = () => {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let btnCal = document.getElementById("btnCal");
  let result = document.getElementById("result");

  let bmiCalculator = (cm, kg) => {
    let resultBmi = (kg / (cm * cm)) * 10000;
    return resultBmi;
  };

  btnCal.addEventListener("click", () => {
    let output = bmiCalculator(height, weight);
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    result.innerHTML = output;
  });
};
