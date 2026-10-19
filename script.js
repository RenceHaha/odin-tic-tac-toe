const game = (function Gameboard(){
    let player = "x";

    let board = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
    
    const play = function (x, y){
        board[x][y] = player;
        if(player === 'x'){
            player = 'o';
        }else{
            player = 'x';
        }
        showBoard();
        console.log(`${player}'s turn`);
    }

    const showBoard = function (){
        for(row of board){
            console.log(`${row[0]} | ${row[1]} | ${row[2]}`);
        }
    }

    return {play, showBoard}
})();



// let board = [["x", "a", "b"], ["c", "d", "e"], ["f", "g", "h"]];


// console.log(board[1][2]);