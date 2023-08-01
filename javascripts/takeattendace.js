//THIS code is writen by an bigneer and i dont have study javaScript just started making this project  
const allKeys = Object.keys(localStorage);
const keyNamesArraysheets = [];
const yoursheetstake = document.getElementById("yoursheetstake");// This will store the key-value pairs as an object
if (allKeys === null || allKeys.length === 0) {
    yoursheetstake.innerHTML = 'You dont have any sheet '
    //chaking if There is any sheets or not 
}
allKeys.forEach(key => {
    keyNamesArraysheets.push(key);
});

for (let i = 0; i < keyNamesArraysheets.length; i++) {
    const keyname = keyNamesArraysheets[i];
    const jsonData = localStorage.getItem(keyname);
    const data = JSON.parse(jsonData);
    console.log(data);
    //gating sheet information 
    const createdivtake = document.getElementById("createdivtake");
    const contOfSheetData = document.createElement("div");
    const Sheetdate = document.createElement("h2");
    const SheetClassname = document.createElement("h2");
    const NoOfStudents = document.createElement("h2");
    SheetClassname.innerHTML = data.sheetinformation[0];
    Sheetdate.innerHTML = data.sheetinformation[1];
    NoOfStudents.innerHTML = data.sheetinformation[2];
    createdivtake.appendChild(contOfSheetData);
    contOfSheetData.append(Sheetdate,SheetClassname,NoOfStudents);
    //taking all balak informaion balak = students chiled
    for (let j = 0 ; j < data.studentsdata.length ; j++){
        const balak = document.createElement("h1");
        balak.innerHTML = data.studentsdata[j];
        contOfSheetData.appendChild(balak)
    }
    

}



