//THIS code is writen by an bigneer and i dont have study javaScript just started making this project 
let data;

function Showheets() {
    const allKeys = Object.keys(localStorage);
    const keyNamesArraysheets = [];
    const yoursheetstake = document.getElementById("yoursheetstake");// This will store the key-value pairs as an object
    if (allKeys === null || allKeys.length === 0) {
        yoursheetstake.innerHTML = 'You dont have any sheet'

    }

    allKeys.forEach(key => {
        keyNamesArraysheets.push(key);
    });


    for (let i = 0; i < keyNamesArraysheets.length; i++) {

        const keyname = keyNamesArraysheets[i];
        const jsonData = localStorage.getItem(keyname);
        data = JSON.parse(jsonData);
        //gating sheet information  
        //slice string to avoide the spaicel name 

        const supersecshow = document.getElementById("supersecshow");
        const bigboydiv = document.createElement("div");
        bigboydiv.classList.add("mastersecshow");
        const littleboydiv = document.createElement("div");
        littleboydiv.classList.add("contsecshow");
        const chailddiv = document.createElement("div");
        chailddiv.classList.add("flex", "center");
        const secondbigboy = document.createElement("div");
        secondbigboy.classList.add("detalsshowdatasec", "textcenter");
        const NametoShow = document.createElement("h3");
        NametoShow.id = "NameShow" + i;
        NametoShow.innerHTML = data.sheetinformation[2];
        const SheetName = document.createElement("h3");
        SheetName.id = "SheetName" + i;
        SheetName.innerHTML = data.sheetinformation[0];
        const datetoShow = document.createElement("h3");
        datetoShow.innerHTML = data.sheetinformation[1];
        //this part is little confuseing 
        supersecshow.append(bigboydiv);
        //appending First div
        bigboydiv.appendChild(littleboydiv);
        littleboydiv.appendChild(chailddiv);
        //appending second main div 
        bigboydiv.append(secondbigboy)
        secondbigboy.append(SheetName, NametoShow, datetoShow);


    }


}
Showheets();



let mastersecshow = document.querySelectorAll(".mastersecshow");

function hide() {
    mastersecshow.forEach(element => {
        element.classList.add("none");
    });
}

let attendaceData;
mastersecshow.forEach(element => {
    element.addEventListener("click", function ShowSheetData() {
        
        //prevent the doubling 
        /*
        let allsec2List = document.querySelectorAll(".allsec2");
        let toescapeList = Array.from(document.querySelectorAll(".toescape"));
        
        allsec2List.forEach(allsec2 => {
            const children = allsec2.children;
            for (const child of children) {
                if (!toescapeList.includes(child)) {
                    child.removeEventListener('click', ShowSheetData);
                    allsec2.removeChild(child);
                }
            }
        });
        */
        
        
        
        

        const getkeynamearray = [];

        // Loop through all the children and get their text content
        element.childNodes.forEach(childNode => {
            if (childNode.nodeType === Node.ELEMENT_NODE) {
                let textContent = childNode.textContent;
                getkeynamearray.push(textContent.trim()); // Use trim to remove leading/trailing whitespace
            }

        });



        jsondata = localStorage.getItem(getkeynamearray[1])
        attendaceData = JSON.parse(jsondata);



        hide()
        let viewsheetdata = document.getElementById("viewsheetdata");
        viewsheetdata.classList.remove("none")
        let yoursheetstake = document.getElementById("yoursheetstake");
        let classname = document.getElementById("classname");
        let Dateofsheet = document.getElementById("Dateofsheet");
        let studentsname = document.getElementById("studentsname");
        let studentsnaminput = document.getElementById("studentsnaminput");
        let starstogen = document.getElementById("starcont")
        let mainstr = document.getElementById("mainstr")

        //here the data is given to respective tags 
        yoursheetstake.innerHTML = "Attendace Sheet " + attendaceData.sheetinformation[0];
        classname.innerHTML = "Class Name - " + attendaceData.sheetinformation[0];
        Dateofsheet.innerHTML = "Date - " + attendaceData.sheetinformation[1];

        if(studentsnaminput.hasChildNodes()){
            
            studentsnaminput.innerHTML = "";
        }
        if(studentsname.hasChildNodes()){
            studentsname.innerHTML = "";
        }
        if(mainstr.hasChildNodes()){
            mainstr.innerHTML = "";
        }
        
        for (let x = 0; x < attendaceData.studentsdata.length; x++) {
            //append student name and check box 
            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("checkboxes");
            studentsnaminput.append(checkbox)
            let studentsNameP = document.createElement("p");
            studentsNameP.classList.add("flex", "alingcenter")
            studentsNameP.textContent = attendaceData.studentsdata[x];
            studentsname.append(studentsNameP);
            let starsDiv = document.createElement("div"); // Create a container for stars

            // Generate stars for each student
            for (let i = 0; i < 5; i++) {
                let svgcode = '<svg xmlns="http://www.w3.org/2000/svg" class="svgstar" height="1em" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>';

                let starIcon = document.createElement("span");
                starIcon.innerHTML = svgcode;
                starsDiv.classList.add("mainstrcont")
                starsDiv.appendChild(starIcon);

            }
            mainstr.appendChild(starsDiv); // Add the starsDiv to the student's name paragraph
            starstogen.appendChild(mainstr);
        }




        if (attendaceData.hasOwnProperty('present')) {
            showattendace();

        }


    });



});

//this function shows the attendeece if usr have submit there attendace 
function showattendace() {
    const checkboxes = document.querySelectorAll(".checkboxes");
    for (let B = 0; B < attendaceData.present.length; B++) {
        const presentBalak = attendaceData.present[B];
        checkboxes[B].checked = presentBalak.checked;
    }
}




function getCheckedValues() {
    const checkboxes = document.querySelectorAll(".checkboxes");
    const checkedValues = [];

    checkboxes.forEach((checkbox) => {
        checkedValues.push({

            checked: checkbox.checked,
        });
    });

    return checkedValues;
}


let saveattendaceinfo = document.getElementById("saveattendaceinfo");

saveattendaceinfo.addEventListener("click", () => {


    const checkedValues = getCheckedValues();


    const purename = attendaceData.sheetinformation[4];

    let sheetallinfo = {
        sheetinformation: attendaceData.sheetinformation,
        studentsdata: attendaceData.studentsdata,
        present: checkedValues
    }
        ;
    const jsonString = JSON.stringify(sheetallinfo);//making obj to JSON to store it 
    localStorage.setItem(purename, jsonString);

    saveattendaceinfo.textContent = "Saved";
    saveattendaceinfo.ariaDisabled = 'true';

});


let backbtn = document.getElementById("backbtn");

backbtn.addEventListener("click",()=>{
    mastersecshow.forEach(element => {
        element.classList.remove("none");

    });

    const viewsheetdata = document.getElementById("viewsheetdata");
    viewsheetdata.classList.add("none")
    yoursheetstake.textContent = "Your Sheets"
})








