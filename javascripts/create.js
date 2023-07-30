function save() {
//saving all data into local storage 

    let name = document.getElementById("Name").value;//define all variabels and assign the value of each input tag 
    let kaksha = document.getElementById("class").value;
    let date = document.getElementById("Date").value;
    let nostudent = document.getElementById("numberofstudent").value;
//storing data into two array to make them in a single obj
  let sheetinfo = [];
  sheetinfo.push(kaksha, date , nostudent)
  let inputElements = document.querySelectorAll(".stName");
  let elementsArray = [];
  inputElements.forEach(inputElement => {
  elementsArray.push(inputElement.value);
  });

//making an obj to store two array 

  let sheetallinfo = {
  sheetinformation : sheetinfo,
  studentsdata: elementsArray
}
const jsonString = JSON.stringify(sheetallinfo);//making obj to JSON to store it 

localStorage.setItem(name + "-" + Date.now(), jsonString);
//soting data into localstorage name sheet1
//sending user to attendace section
window.location.href = "home.html";

}

function appendInputs() {
    const numberInput = document.getElementById('numberofstudent').value;
    const inputContainer = document.getElementById('stcreatesheet1');
    let nameInput = document.getElementById("Name");
    let name = nameInput.value;
  
    let classInput = document.getElementById("class");
    let kaksha1 = classInput.value;
  
    let nostInput = document.getElementById("numberofstudent");
    let student = nostInput.value;
  
    if (name === '') {
      nameInput.placeholder = `Please enter sheet name`;
    }
  
    if (kaksha1 === '') {
      classInput.placeholder = `Please enter Class name`;
    }
  
    if (student === '') {
      nostInput.placeholder = `Please enter no of students`;
    }
  
    // If any of the conditions are met, stop execution
    if (name === '' || kaksha1 === '' || student === '') {
      return;
    }

    // Clear previous content in inputContainer
    inputContainer.innerHTML = '';

    if (numberInput) {
        for (let i = 0; i < numberInput; i++) {
            const newInput = document.createElement('input');
            newInput.classList.add("stName")
            newInput.type = 'text';
            newInput.placeholder = `Balak ${i + 1} Naam`;
            inputContainer.appendChild(newInput);
        }
    }
    let btn = document.getElementById("stcreatesheet");
    btn.classList.remove("none");
    btn.classList.add("block");
}

const showSectionButton = document.getElementById("createsec1btn");
const section2 = document.getElementById("section2");
const divsec1creath1 = document.getElementById("divsec1creath1id")
showSectionButton.addEventListener("click", function() {
// Slide in Section 2 by changing the left property to 0
section2.style.left = "0";
divsec1creath1.style.marginTop ="90px";


});





