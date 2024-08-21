
// modo onclick:
// document.querySelector("button")
//     .onclick = function(){
//         alert("hola mundo")
//     }



const btnAumentar = document.querySelector(".btnMas")
const span = document.getElementById("span2")
let contador = 0 

btnAumentar.addEventListener("click", () =>{
    console.log('un click de aumentar')
    contador++
    span.textContent = contador
    
})

const btnDiminuir = document.querySelector(".btnMenos")

btnDiminuir.addEventListener("click", () => {
    console.log("otro click")
    contador = contador - 1
    span.textContent = contador
})

