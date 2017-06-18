var tab=['blue','yellow','purple']

function Clique (){
if (document.getElementById("image").style.backgroundColor == document.getElementById('select').value) {
alert ("Tu es un gagnant !")
}
else {
  alert ("Tu es un perdant !")
}
document.getElementById("image").style.backgroundColor = tab[Math.floor(Math.random()*tab.length)]
}

document.getElementById('button').addEventListener('click', Clique)
