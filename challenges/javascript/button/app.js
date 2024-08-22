

/** 
// modo onclick:
document.querySelector("button")
    .onclick = function(){
        alert("hola mundo")
    }
*/



// modo normal:
const btnAumentar = document.querySelector(".btn-info") //("btnMas")
const span = document.getElementById("span2")
let contador = 0 

btnAumentar.addEventListener("click", () =>{
    console.log('un click para aumentar')
    contador++
    span.textContent = contador
    
})

const btnDiminuir = document.querySelector(".btn-danger") //("btnMenos")

btnDiminuir.addEventListener("click", () => {
    console.log("otro click para diminuir")
    contador--
    //otro modo:
    //contador = contador - 1
    span.textContent = contador
})
 



/** 
// modo EVENT DELEGATION:

//
const container = document.querySelector(".container")
const span = document.getElementById("span2")
let contador = 0 

// de este modo delegamos eventos en todo el container
//nosotros estamos haciendo el evento click de todo el container

container.addEventListener("click", (e) =>{
    //console.log(e.target)
    console.log(e.target.classList.contains("btn-info")) 
    if(e.target.classList.contains("btn-info")){
        contador++
        span.textContent = contador
    }
    if(e.target.classList.contains("btn-danger"))
        {
        contador--
        span.textContent = contador
    }
})
*/



// e.stopPropagation() 
// solo si ejecuto el click en el boton se ese se ejecuta en cuestion y no se propaga
const btn = document.querySelector(".btn-dark")
const bgSuccess = document.querySelector(".bg-success")

btn.addEventListener("click", (e) => {
    console.log("click boton")
    e.stopPropagation()
})

bgSuccess.addEventListener("click", () =>{console.log("click bgSuccess")})