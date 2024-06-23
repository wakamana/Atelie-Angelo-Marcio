//Const dos elementos de input
const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const login = document.getElementById("email");
const senha = document.getElementById("password")


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
    nome: "",
    senhaC: ""
   }
   listaUser = JSON.parse(localStorage.getItem("usuario"))
   listaUser.forEach((item) => {
    if (login.value == item.nomeCad && senha.value == item.senhaCad){
        userValid = {
            nome: item.nomeCad,
            senhaC: item.senhaCad
        }
    }
   })
   if(login.value == userValid.nome && senha.value == userValid.senhaC){
    alert("deu certo");
   }else{
    alert("errado");
   }
}
 

