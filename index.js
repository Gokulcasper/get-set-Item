let textAreaElement = document.getElementById("message");
let saveButton = document.getElementById("saveButton");
let para = document.getElementById("para");

saveButton.onclick = function(){
    let userEnterText = textAreaElement.value;
    localStorage.setItem("userEntervalue",userEnterText);
}

let storageUserInput = localStorage.getItem("userEntervalue");
// if(storageUserInput === null)
// {
//     textAreaElement.value = "";
// }else{
//     textAreaElement.value = storageUserInput;
// }
para.textContent=storageUserInput;