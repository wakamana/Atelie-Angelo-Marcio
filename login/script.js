//Const dos elementos de input
const form = document.getElementById("form");
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const login = document.getElementById("email");
const senha = document.getElementById("password");
let msgError = document.getElementById("msgError");

form.addEventListener("submit", (event) => {
    event.preventDefault();
 
    entrar();
});

inputs.forEach(inp => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if(inp.value != "") return;
        inp.classList.remove("active");
    });
});


function entrar(){
    
   let listaUser = []

   let userValid = {
    nome: " ",
    senhaC: " "
   }
   listaUser = JSON.parse(localStorage.getItem("usuario"))
   listaUser.forEach((item) => {
    if (login.value == item.nomeCad && senha.value == item.senhaCad){
        userValid = {
            nome: item.nomeCad,
            senhaC: item.senhaCad,
            userCad: item.userCad,
            
        }
    }
   })
   if(login.value == userValid.nome && senha.value == userValid.senhaC){
    window.location.href = "http://127.0.0.1:5500/index.html";
    
    let token = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2) ;
    localStorage.setItem("token", token);
    localStorage.setItem("userLogado", JSON.stringify(userValid))

   }else{
    msgError.setAttribute("style", "display: block");
    msgError.innerHTML = "Usuário ou senha incorretos";

   }
};
 

