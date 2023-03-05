var showHideSI = document.getElementById("logInForm");
var showHideCA = document.getElementById("createAccountForm");
showHideSI.style.display = "none";
showHideCA.style.display = "none";

function signInFunc() {
        showHideSI.style.display = "block";
        showHideCA.style.display = "none";
}

function createAccountFunc() {
        showHideCA.style.display = "block";
        showHideSI.style.display = "none";
}