var input = document.querySelector("#input")
var btn = document.querySelector("#translate-btn")
var output = document.querySelector("#output")

var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslateUrl(text){
    return serverURL+"?text="+text
}

function errorHandler(error){
    console.log(" Error occured : ",error)
    alert("Oops! something wrong with the server, Try again after sometime")
}

btn.addEventListener("click" , ()=>{
    var text = input.value 
    var url = getTranslateUrl(text)
    fetch(url)
    .then(response => response.json())  //converting response to json format
    .then(json => {
        output.innerText = json.contents.translated
    })
})








// https://api.funtranslations.com/translate/valyrian.json?text=Fire is blood