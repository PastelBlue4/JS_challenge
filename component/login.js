const loginForm = document.querySelector("#loginForm");
const loginInput = document.querySelector("#loginForm input");
const showUserName = document.querySelector("#showUserName");

const USERNAME_KEY = "username";
const HIDDNE_CLASSNAME = "hidden";




function handleBtnClcik(event){
   
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDNE_CLASSNAME);
    localStorage.setItem("USERNAME_KEY", userName);
    paintUserName(userName);
    
}

function paintUserName(userName){
   
    showUserName.innerText = `Hi! ${userName}`;
    showUserName.classList.remove(HIDDNE_CLASSNAME);
    
}


const saveUserName = localStorage.getItem("USERNAME_KEY");

if (saveUserName === null) {
 
    loginForm.classList.remove(HIDDNE_CLASSNAME);
    loginForm.addEventListener("submit", handleBtnClcik);

} else {
 
    paintUserName(saveUserName);
    
}
