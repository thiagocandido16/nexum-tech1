// CONTATO
const form = document.getElementById("formulario");
const msg = document.getElementById("msg");

if(form){
form.addEventListener("submit",function(e){
e.preventDefault();

const nome=document.getElementById("nome").value;

if(nome===""){
msg.innerText="Preencha os campos!";
msg.style.color="red";
}else{
msg.innerText="Mensagem enviada!";
msg.style.color="green";
form.reset();
}
});
}

// LOGIN
const loginForm=document.getElementById("loginForm");
const loginMsg=document.getElementById("loginMsg");

if(loginForm){
loginForm.addEventListener("submit",function(e){
e.preventDefault();

const user=document.getElementById("user").value;
const senha=document.getElementById("senha").value;

if(user==="admin"&&senha==="1234"){
loginMsg.innerText="Login correto!";
loginMsg.style.color="green";
}else{
loginMsg.innerText="Login errado!";
loginMsg.style.color="red";
}
});
}