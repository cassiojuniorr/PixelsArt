
function createBoard(){
    let contB = document.getElementById("pixel-board");
    for (let cont = 0; cont < 5; cont++){
        let sec = document.createElement("section");
        for (let index = 0; index < 5; index++){
            let divs = document.createElement("div");
            divs.classList.add("pixel");
            sec.appendChild(divs);
        }
        contB.appendChild(sec);
    }
}
createBoard();

