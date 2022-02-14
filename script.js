document.addEventListener("DOMContentLoaded", function () {
    const Btn = document.createElement("button");
    Btn.textContent = "Add Square";
    document.body.appendChild(Btn);

    const divContainer = document.createElement("div");
    divContainer.className = "divContainer";
    document.body.appendChild(divContainer);

    let idCounter = 0

    Btn.addEventListener('click', function () {
        let newDiv = document.createElement("div");

        newDiv.className = "square";
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
        newDiv.addEventListener("click", function () {
                newDiv.style.backgroundColor = getRandomColor();
        });
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

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

});