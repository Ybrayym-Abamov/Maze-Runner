const map = [
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", "W", " ", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", "W", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W", " ", " ", " ", "W"],
    ["W", " ", "W", "W", "W", "W", "W", "W", "W", " ", "W", " ", "W", "W", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W"],
    ["W", " ", "W", " ", " ", " ", "W", " ", " ", " ", "W", " ", "W", " ", " ", " ", " ", " ", "W", " ", "W"],
    ["W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W", " ", "W", "W", "W", " ", "W", " ", "F"],
    ["S", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", "W", "W"],
    ["W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "W", " ", "W", " ", "W", " ", " ", " ", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", "W", "W", "W", "W", "W", "W", "W", " ", "W", "W", "W", "W", "W", " ", "W", " ", "W", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"]
];

let mazeDiv = document.getElementById("maze")
let runnerDiv = document.getElementById("runner")

function displayMaze() {
    for (let row = 0; row < map.length; row++) {

        for (let column = 0; column < map[row].length; column++) {
            if (map[row][column] === "W") {
                // console.log(row, column)
                let Walls = document.createElement("div")
                Walls.id = row + "-" + column
                Walls.classList.add("Ws")
                mazeDiv.appendChild(Walls)
            } else if (map[row][column] === " ") {
                // console.log(row, column)
                let Path = document.createElement("div")
                Path.id = row + "-" + column
                Path.classList.add("Paths")
                mazeDiv.appendChild(Path)
            } else if (map[row][column] === "S") {
                // console.log(row, column)
                let Start = document.createElement("div")
                Start.id = row + "-" + column
                Start.classList.add("sPoint")
                // console.log(runnerDiv)
                Start.appendChild(runnerDiv)
                mazeDiv.appendChild(Start)
            }
            else if (map[row][column] === "F") {
                // console.log(row, column)
                let Finish = document.createElement("div")
                Finish.id = row + "-" + column
                Finish.className = "Paths"
                mazeDiv.appendChild(Finish)
            }
        }

    }

}
displayMaze();



let runnerTop = 0;
let runnerLeft = 0;
let rowLocation = 9;
let colLocation = 0;

// document.getElementById("runner").style.top = runnerTop + "px";
// document.getElementById("runner").style.left = runnerLeft + "px";

document.addEventListener('keydown', move);

function move(e) {
    

    console.log(e.code);
    if (e.code === "ArrowDown" && (map[rowLocation+1][colLocation]===" "||map[rowLocation+1][colLocation]==="F")) {
        rowLocation += 1
        runnerTop += 20;
    } else if (e.code === "ArrowUp" && (map[rowLocation-1][colLocation]===" "||map[rowLocation-1][colLocation]==="F")) {
        rowLocation -= 1
        runnerTop -= 20;
    } else if (e.code === "ArrowLeft" && (map[rowLocation][colLocation-1]===" "||map[rowLocation][colLocation-1]==="F")) {
        colLocation -= 1
        runnerLeft -= 20;
    } else if (e.code === "ArrowRight" && (map[rowLocation][colLocation+1]===" "||map[rowLocation][colLocation+1]==="F")){
        colLocation += 1
        runnerLeft += 20;
    }
    document.getElementById("runner").style.top = runnerTop + "px";
    document.getElementById("runner").style.left = runnerLeft + "px";
    Win(runnerTop, runnerLeft);
    console.log(runnerTop + " " + runnerLeft)
}

let winTop = -20;
let winLeft = 400;

function Win(runnerTop, runnerLeft) {
    if (runnerTop === winTop && runnerLeft === winLeft) {
        document.getElementById("win").innerHTML = "You Made It!"
    }
}
