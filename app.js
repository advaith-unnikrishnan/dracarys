var input = document.querySelector("#input")
var btn = document.querySelector("#translate-btn")
var output = document.querySelector("#output")

btn.addEventListener("click" , ()=>{
    output.innerText = input.value 
})