function save() {
    let name = document.getElementById("Name").value;
    let kaksha = document.getElementById("class").value;
    let date = document.getElementById("Date").value;
    let nostudent = document.getElementById("numberofstudent").value;

    localStorage.setItem("name", name);
    localStorage.setItem("class", kaksha);
    localStorage.setItem("data", date);
    localStorage.setItem("nostudent", nostudent);
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

showSectionButton.addEventListener("click", function() {
  // Slide in Section 2 by changing the left property to 0
section2.style.left = "0";
});





