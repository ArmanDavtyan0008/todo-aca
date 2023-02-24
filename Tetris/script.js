let matrix = document.querySelector(".matrix");
let activEl = null;
for (let i = 0; i < 225; i++) {
    const row = Math.floor(i / 15);
    const col = i % 15;
    let newDiv = document.createElement('div');
    newDiv.append(`${row} - ${col}`);
    newDiv.dataset.row = row;
    newDiv.dataset.col = col;
    if (row === 1 && col === 4) {
        newDiv.classList.add("yellow");
        activEl = newDiv;
    }
    // newDiv.className = "item";
    newDiv.classList.add("item");
    matrix.append(newDiv);
}
document.body.addEventListener('keydown', onKeyDown);
function moveDown() {
    const activRow = activEl.dataset.row;
    const activCol = activEl.dataset.col;
    const nextActivRow = +activRow + 1;
    const nextActivEl = document.querySelector(`[data-row="${nextActivRow}"][data-col="${activCol}"]`);
    nextActivEl.classList.toggle("yellow");
    activEl.classList.toggle("yellow");
    activEl = nextActivEl;
}
function onKeyDown(event) {
    if (event.key == "ArrowDown") {
        moveDown();
    }
}
document.body.addEventListener('keydown', onKeyDown);
function onkeyup() {
    const activRow = activEl.dataset.row;
    const activCol = activEl.dataset.col;
    const nextActivRow = +activRow + 1;
    const nextActivEl = document.querySelector(`[data-row="${nextActivRow}"][data-col="${activCol}"]`);
    nextActivEl.classList.toggle("yellow");
    activEl.classList.toggle("yellow");
    activEl = nextActivEl;
}
function onKeyDown(event) {
    if (event.key == "ArrowUp") {
        onkeyup();
    }
}