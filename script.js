document.addEventListener("DOMContentLoaded", function () {
    let Btn = document.createElement("button");
    let BtnText = document.createTextNode("Add Square");
    Btn.appendChild(BtnText);
    document.body.appendChild(Btn);
    let divContainer = document.createElement("div");
    document.body.appendChild(divContainer);
    divContainer.classList.add("divContainer");

    let idCounter = 0

    const randomColors = [
        "black",
        "pink",
        "brown",
        "red",
        "orange",
        "yellow",
        "green",
        "cyan",
        "blue",
        "purple"
    ];

    Btn.addEventListener('click', function () {
        let newDiv = document.createElement("div");
        newDiv.classList.add("square");
        idCounter++;
        newDiv.id = idCounter;
        newDiv.innerHTML = idCounter;
        divContainer.appendChild(newDiv);
        newDiv.addEventListener("mouseover", function (event) {
            newDiv.style.color = "white";
        })
        newDiv.addEventListener("mouseout", function (event) {
            newDiv.style.color = "transparent";
        })
        newDiv.addEventListener("click", setRandomColor);
        newDiv.addEventListener("dblclick", removeSquare);
    });

    function removeSquare(event) {
        const Squares = document.querySelectorAll(".square")
        let targetIndex = -1
        for (let i = 0; i < Squares.length; i++) {
            if (Squares[i].id == event.target.id) {
                targetIndex = i
                break;
            }
        }
        if (event.target.id % 2 == 0) {
            let SquareToremove = Squares[targetIndex].nextSibling
            if (SquareToremove == null) {
                alert("square does not exist")
            }
            else {
                SquareToremove.remove()
            }
        } else {
            let SquareToremove = Squares[targetIndex].previousSibling
            if (SquareToremove == null) {
                alert("square does not exist")
            }
            else {
                SquareToremove.remove()
            }
        }
    }

    function setRandomColor(event) {
        const randomNum = Math.floor(Math.random() * randomColors.length);
        event.target.style.backgroundColor = randomColors[randomNum];
        event.target.style.color = randomColors[randomNum];
    }

});