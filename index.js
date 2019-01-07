'use strict';

// Enter your js code Here


//<div id= "board">
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>
//  <div class="square"></div>




//var piece1 = {type: "King", location: 27, symbol: "K"};
//var piece1 = {type: "Queen", location: 27, symbol: "Q"};
//var piece1 = {type: "Bishop", location: 27, symbol: "B"};
//var piece1 = {type: "Bishop", location: 27, symbol: "B"};
//var piece1 = {type: "Rook", location: 27, symbol: "R"};
//var piece1 = {type: "Rook", location: 27, symbol: "R"};
//var piece1 = {type: "Knight", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};
//var piece1 = {type: "Pawn", location: 27, symbol: "P"};


//var piece2 = {type: "King", location: 27, symbol: "K"};
//var piece2 = {type: "Queen", location: 27, symbol: "Q"};
//var piece2 = {type: "Bishop", location: 27, symbol: "B"};
//var piece2 = {type: "Bishop", location: 27, symbol: "B"};
//var piece2 = {type: "Rook", location: 27, symbol: "R"};
//var piece2 = {type: "Rook", location: 27, symbol: "R"};
//var piece2 = {type: "Knight", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};
//var piece2 = {type: "Pawn", location: 27, symbol: "P"};

var board = document.getElementById("board");

var player1Pieces = new Array;
var player2Pieces = new Array;

     player1Pieces.push({type: "Rook", square:0, symbol: "R"});

     player1Pieces.push({type: "Knight", square:1, symbol: "Kn"});

     player1Pieces.push({type: "Bishop", square:2, symbol: "B"});

     player1Pieces.push({type: "Queen", square:3, symbol: "Q"});

     player1Pieces.push({type: "King", square:4, symbol: "K"});

     player1Pieces.push({type: "Bishop", square:5, symbol: "B"});

     player1Pieces.push({type: "Knight", square:6, symbol: "Kn"});

     player1Pieces.push({type: "Rook", square:7, symbol: "R"});

     player1Pieces.push({type: "Pawn", square:8, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:9, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:10, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:11, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:12, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:13, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:14, symbol: "P"});

     player1Pieces.push({type: "Pawn", square:15, symbol: "P"});



     player2Pieces.push({type: "Pawn", square:48, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:49, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:50, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:51, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:52, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:53, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:54, symbol: "P"});

     player2Pieces.push({type: "Pawn", square:55, symbol: "P"});

     player2Pieces.push({type: "Rook", square:56, symbol: "R"});

     player2Pieces.push({type: "Knight", square:57, symbol: "Kn"});

     player2Pieces.push({type: "Bishop", square:58, symbol: "B"});

     player2Pieces.push({type: "Queen", square:59, symbol: "Q"});

     player2Pieces.push({type: "King", square:60, symbol: "K"});

     player2Pieces.push({type: "Bishop", square:61, symbol: "B"});

     player2Pieces.push({type: "Knight", square:62, symbol: "Kn"});

     player2Pieces.push({type: "Rook", square:63, symbol: "R"});


     var squares = document.querySelectorAll('.square');

     var i;

     for (i=0; i<player1Pieces.length;i++)

     {

         squares[player1Pieces[i].square].innerHTML = player1Pieces[i].symbol;

     }

     for (i=0; i<player2Pieces.length;i++)

{

    squares[player2Pieces[i].square].innerHTML = player2Pieces[i].symbol;

}

board.addEventListener('click', function(e)

{

  alert(e.target.innerHTML);



});
