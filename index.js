let bar=document.getElementById("bar")
let nave=document.getElementById("navebar")
let close=document.getElementById("close")

if(bar){
    bar.addEventListener("click",()=>{
        nave.classList.add('active')
    })
}
if(close){
    close.addEventListener("click",()=>{
        nave.classList.remove('active')
    })
}
