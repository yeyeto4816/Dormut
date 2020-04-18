
<h1>Gracias</h1>
<div id="user"></div>


let inscritos = ['freddy', 'yudy', 'yeny', 'juan', 'diana']
let asistentes = ['yeny', 'diana', 'juan']
const user = document.getElementById('user')
let numeroInscrito = 0
for (let i = 0; i < inscritos.length; i++){
    let inscritos = inscritos[i]
    
if (asistentes.includes(inscritos)){
    numeroInscrito++
    user.innerHTML += '<p>Gracias por asistir ${numeroInscrito}, eres el número ${i}</p>'

    }
}
