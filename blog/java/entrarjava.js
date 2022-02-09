let nome = document.getElementById('nome')
let snome = document.getElementById('sobrenome')
let ema = document.getElementById('email')
let senha = document.getElementById('senha')
let csenha = document.getElementById('confirmarsenha')
function criar(){
    window.location = "pprincipal.html" 
}
let a = document.getElementById('texto')
let pa = document.createElement('p')
pa.innerHTML = `esse é o seu nome ${nome} ${snome}`
a.appendChild(pa)