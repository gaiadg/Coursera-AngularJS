var student = {
  name : "",
  type : "student"
};

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded(event) {
  document.getElementById('addName').addEventListener("keyup", keyUp)
}

function keyUp(event) {
  calculateNumericOutput();
}

function calculateNumericOutput () {
  student.addName = document.getElementById('addName').value;
  var totalNameValue = 0
  for (var i = 0; i < student.addName.length; i++) {
    totalNameValue =+ student.addName.charCodeAt(i);
  }

  var output = "The total value is: " + totalNameValue;
  document.getElementById('output').innerText = output;

}
