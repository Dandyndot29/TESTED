// Tambahkan kode JavaScript kalian di file ini
function getFormData (){
    return object = {
        firstName: document.getElementById('first-name').value,
        lastName:document.getElementById('last-name').value,
        city:document.getElementById('city').value,
        zipCode:document.getElementById('zip-code').value,
        check:document.getElementById('check').checked
    };
}

function isNumber (string){
    if (isNaN(string) == false){
        return true;
    }else{
        return false;
    }
}

function isLength (string, integer){
    if (string.islength == integer.length){
    return true;
}else{
    return false;
}
}

function checkboxIsChecked(){
    if (check.checked){
        return true;
    }else{
        return (false);
    }
}

function validateFormData(obj) {
    if (obj != null && isNumber(obj.zipCode) && checkboxIsChecked()) {
        return true
    }
    return false
}

function resetForm(){
    const input = document.getElementsByTagName ("input");
    for (let i = 0; i < input.length; i++){
        input[i].value ="";
        input[i].checked = false;
    }
}

function submit() {
    const obj = getFormData();

    const valid = validateFormData(obj);
    if (!valid) {
        document.getElementById("warning").innerHTML =
        "Periksa form anda sekali lagi";
    }else {
        document.getElementById("warning").innerHTML ="";
    }
}

