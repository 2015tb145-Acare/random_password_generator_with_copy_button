let alertBox = document.querySelector('.alertBox')

function getPassword(){
    let chars = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]`;
    let passwordLength = 16;
    let password ="";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    
    document.getElementById("password").value = password;
    alertBox.innerHTML = "Mot de passe copié : <br>" + password;
}

function copyPassword(){
    let copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0,16);
    document.execCommand("copy");
    alertBox.classList.toggle("active");
    setTimeout(() => {
        alertBox.classList.toggle("active")
    },2000)
}

// améliorations : 
//      - si champ vide copyPassword renvoie null
//      - réinitialiser le champ après copie