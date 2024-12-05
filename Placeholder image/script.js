
const select = document.querySelector("#selectImage");
const inputAll = document.querySelectorAll("input");
const img = document.querySelector("img");
let textarea = document.querySelector("textarea");

let objVal ={};
function removeHas(str){
    return str.replace("#", "")
}
const removeSpace=(str)=>{
    return str.split(" ").join("+");
}
function createImagePath(){
    objVal.size = select.value;
    objVal.text = removeSpace(inputAll[0].value);
    objVal.backgroundColor = removeHas(inputAll[1].value);
    objVal.textColor = removeHas(inputAll[2].value);
let urlPath = `http://via.placeholder.com/${objVal.size}/${objVal.backgroundColor}/${objVal.textColor}?text=${objVal.text}`;

img.src = urlPath;
textarea.value = urlPath;
img.style.backgroundColor= inputAll[0].value;
textarea.focus();
textarea.select();
navigator.clipboard.writeText(textarea.value);
 }


inputAll.forEach((currELem)=>currELem.addEventListener("change", createImagePath));
select.addEventListener("change", createImagePath);