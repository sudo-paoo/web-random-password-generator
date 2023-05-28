function genPass() {
    const chars = 
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxy@#-"
    
   
    let passwordLength = 12
    let password = ""

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length)
        
        password += chars.substring(randomNumber, randomNumber + 1)
    }
    document.getElementById('passwordTxt').value = password;
}

function copyToclipboard () {
    var snack = document.getElementById("snackbar");
    var copyText = document.getElementById("passwordTxt");
    
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    snack.className = "show";
    setTimeout(function(){ snack.className = snack.className.replace("show", ""); }, 1000);
    console.log("going");
}