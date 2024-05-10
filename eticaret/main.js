let sidebar = document.querySelector(".sidebar");
let menu = document.querySelector("#menu");

menu.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
function passwordname(){
  alert("bdasda");
var Realname="admin12";
var Realpassword="admin12";
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(username== Realname && password==Realpassword)
{
  window.location.href="index.html";

}
else{
  alert("sıfre veya parola uymuyor");
}
}

