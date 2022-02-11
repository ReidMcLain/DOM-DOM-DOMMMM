document.addEventListener("DOMContentLoaded", function () {
    let Btn = document.createElement("button");
    let BtnText = document.createTextNode("Add Square");
    Btn.appendChild(BtnText);
    document.body.appendChild(Btn);
    let divContainer = document.createElement("div")
    document.body.appendChild(divContainer)
    divContainer.classList.add("divContainer")

    let idCounter = 0

    let randomColors = {

    }

    Btn.addEventListener('click', function () {
        let newDiv = document.createElement("div")
        newDiv.classList.add("square")
        idCounter++
        newDiv.id = idCounter
        newDiv.innerHTML = idCounter
        divContainer.appendChild(newDiv)
        newDiv.addEventListener("mouseover", function () {
            newDiv.style.color = 'white'
        })
        newDiv.addEventListener("mouseout", function () {
            newDiv.style.color = ''
        })
        newDiv.addEventListener("click", function () {
            console.log('hi')
        })
    })
});