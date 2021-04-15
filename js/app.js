const canvas = document.getElementById('tetris');
var context = canvas.getContext("2d");

const row = 20;
const col = 10;
const squareSize = 20;
const blank = "white"; //collor of a empty square

// draw square

const drawSquare = (x,y,color) => {
    context.fillStyle = color;
    context.fillRect(x*squareSize,y*squareSize,squareSize,squareSize);

    context.strokeStyle = "black";
    context.strokeRect(x*squareSize, y*squareSize, squareSize, squareSize);
}
drawSquare(0, 0, 'red');
let Board = [];
for (let r = 0; r < row; r++){
    for (let c = 0; c < row; c++) {
        Board[[r][c]] = blank;
    }
    
}
const drawBoard = () => {
    for (let r = 0; r < row; r++){
        for (let c = 0; c < row; c++) {
            drawSquare(r,c,Board[[r][c]]) ;
        }
        
    }
}
drawBoard()


//create pieces and colors

const PIECES = [
    [Z,'red'],
    [S,'green'],
    [T,'yellow'],
    [O,'blue'],
    [L,'purple'],
    [I,'cyan'],
    [J,"orange"],
]

// objetc piece
const piece = (tetromino, color) => {
    this.tetromino = tetromino;
    this.color = color;

    this.tetrominoNumber = 0;
    this.activeTetromino = this.tetromino[this.tetrominoNumber]

    this.x = 0;
    this.y = 0;   
}