
let input = document.querySelector("#task")

function newElement() {
    if (input == '') {
        let alert = document.querySelector(".toast-body")
        alert.classList.add("alert")
    }
    let ulDOM = document.querySelector("ul#list")
    let liDOM = document.createElement('li')
    liDOM.innerHTML = input.value
    ulDOM.append(liDOM)
}

function clicked(e){
    console.log(e)
}