function saveLocal(){
    let validationCheck = document.getElementById("addToList");
    if (validationCheck.checked == true){
        let pName = document.getElementById("PFriendlyName");
        let pCP = document.getElementById("CP");
        let pNumber = document.getElementById("pNumber");
        let pType = document.getElementById("pTypeName");
        var sJSON = 
                    '{"pNumber":"'+pNumber.innerText+
                    '" , "pType":"'+pType.innerText+
                    '" , "pName":"'+pName.value+
                    '" , "pCP":"'+pCP.value+'"}';
        console.log(sJSON);
        localStorage.setItem(pName.value,sJSON);
        pName.value = "";
        pCP.value = "";
        document.getElementById("addToList").checked = false;
        alert("Pokemon added to collection.")
    }

}

function enableInput(){
    let validationCheck = document.getElementById("addToList");
    let pName = document.getElementById("PFriendlyName");
    let pCP = document.getElementById("CP");

    if (validationCheck.checked == true){
        pName.disabled = false;
        pCP.disabled = false;
    }
    else{
        pName.disabled = true;
        pCP.disabled = true;
    }
}