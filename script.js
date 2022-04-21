
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

function seCor(env){
    let sec = document.querySelector(".selected");
    sec.classList.remove("selected");
    env.target.classList.add("selected");
};

let squeb = document.getElementById("black");
squeb.addEventListener("click",seCor);

let squeR = document.getElementById("red");
squeR.addEventListener("click",seCor);

let squeBl = document.getElementById("blue");
squeBl.addEventListener("click",seCor);

let squeG = document.getElementById("grenn");
squeG.addEventListener("click",seCor);