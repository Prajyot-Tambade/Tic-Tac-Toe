let turn = 'X';
let count = 0;
const boxes = Array.from(document.querySelectorAll(".box"));

function changeTurn() {
    return turn === 'X' ? 'O' : 'X';
}

function checkWin() {
    const winCases = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    winCases.forEach((e) => {
        if (boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText !== "") {
            turn === 'X' ? document.getElementById('X').classList.toggle("active") : document.getElementById('O').classList.toggle("active");
        }

    });
    if (count === 9) {
        document.getElementById("draw").classList.toggle("active");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        box.innerText === ""? box.innerText = turn: checkWin();
        checkWin();
        turn = changeTurn();
    });
});

document.getElementById("reset").addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        turn = "X";
        count = 0;
    });
});

document.querySelectorAll(".replay").forEach((btn) => {
    btn.addEventListener("click", () => {
        location.reload();
    });
});