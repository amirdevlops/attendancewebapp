//THIS code is writen by an bigneer and i dont have study javaScript just started making this project  



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
    
    const createdivtake = document.getElementById("createdivtake");
    const keyname = keyNamesArraysheets[i];
    const jsonData = localStorage.getItem(keyname);
    const data = JSON.parse(jsonData);
    console.log(data);
//gating sheet information 
    const contOfBalakData = document.createElement("div");
    contOfBalakData.classList.add("contOfBalakData","none");//adding class to make it easy to apply css 
    const contOfSheetData = document.createElement("div");
    contOfSheetData.classList.add("contOfSheetData","none");
    const Sheetdate = document.createElement("h2");
    const SheetClassname = document.createElement("h2");
    const NoOfStudents = document.createElement("h2");

    SheetClassname.innerHTML = data.sheetinformation[0];
    Sheetdate.innerHTML = data.sheetinformation[1];
    NoOfStudents.innerHTML = data.sheetinformation[2];
    createdivtake.append(contOfSheetData, contOfBalakData);
    contOfSheetData.append(Sheetdate,SheetClassname,NoOfStudents);
    //taking all balak informaion balak = students chiled

    for (let j = 0 ; j < data.studentsdata.length ; j++){
        const balak = document.createElement("h1");
        balak.innerHTML = data.studentsdata[j];
        contOfBalakData.appendChild(balak)
    }
//GIving inforkation to outer box so usr can see that


const supersecshow = document.getElementById("supersecshow");

const bigboydiv  = document.createElement("div");
bigboydiv.classList.add("mastersecshow");
const littleboydiv  = document.createElement("div");
littleboydiv.classList.add("contsecshow");
const  chailddiv  = document.createElement("div");
chailddiv.classList.add("flex","center");
const  secondbigboy = document.createElement("div");
secondbigboy.classList.add("detalsshowdatasec","textcenter");
const NametoShow = document.createElement("h3");
NametoShow.innerHTML =data.sheetinformation[0];
const datetoShow =  document.createElement("h3");
datetoShow.innerHTML = data.sheetinformation[1];

supersecshow.append(bigboydiv);
bigboydiv.appendChild(littleboydiv);
littleboydiv.appendChild(chailddiv);
bigboydiv.append(secondbigboy)
secondbigboy.append(NametoShow, datetoShow);
}
/*for(let i = 0; i<allKeys.length;i++ ){
    const createdivforsec = document.createElement("div");
    createdivforsec.classList.add("showdatacreate");
}*/




