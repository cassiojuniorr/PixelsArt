
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

let squeG = document.getElementById("green");
squeG.addEventListener("click",seCor);


//pegando cor
const boardP = document.getElementById("pixel-board");
function takeC(en){
    const color = document.querySelector('.selected');
    en.target.style.backgroundColor = color.id;
    console.log(en.target.style.backgroundColor = color.id);
}
//coloca a cor
function putCo() {
    const pixel = document.querySelectorAll('.pixel');
    for (let ind of pixel) {
        ind.addEventListener('click', takeC);
    }
}
putCo();

//botão limpar
function botu(){
    const pixel = document.querySelectorAll('.pixel');
    for(let cont of pixel){
        cont.style.backgroundColor = "white";
    }
}
botu();

let butto = document.getElementById("clear-board");
butto.addEventListener("click", botu);
//BONÛS
