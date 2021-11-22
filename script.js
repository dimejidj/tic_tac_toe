"use strict";
const gameBoard = (() => {
  const gameSpace = [, , , , , , , ,];
  const addMove = function (symbol, position) {
    if (typeof this.gameSpace[position] !== "string") {
      this.gameSpace[position] = symbol;
    }
  };
  return {
    gameSpace,
    addMove,
  };
})();

const gameFunctionality = (function () {
  const weaponSelector = document.querySelectorAll(".xorobtn");
  const gameBoardBtns = document.querySelectorAll(".game-board");
  const displayWinner = document.querySelector(".display-winner");
  const resetBtn = document.querySelector(".reset");
  let gameInPlay = false;
  let playerSymbol;
  let CompSymbol;
  let playerTurn;

  weaponSelector.forEach((el) =>
    el.addEventListener("click", function (e) {
      if (gameInPlay == false) {
        clearGame();
        playerSymbolChoose(e.target.value);
        computerAi("reset");
        gameInPlay = true;
        playerSymbol == "X"
          ? (playerTurn = playerSymbol)
          : (playerTurn = CompSymbol);
        if (CompSymbol == "X") {
          computerAi(CompSymbol);
          playerTurn = playerSymbol;
        }
      }
    })
  );

  function playerSymbolChoose(symbol) {
    if (symbol == "X") {
      CompSymbol = "O";
      playerSymbol = "X";
    }
    if (symbol == "O") {
      CompSymbol = "X";
      playerSymbol = "O";
    }

    return {
      playerSymbol: playerSymbol,
      CompSymbol: CompSymbol,
    };
  }

  resetBtn.addEventListener("click", function (e) {
    clearGame();
    gameInPlay = false;
  });

  function computerAi(symbol) {
    if (symbol == "reset") {
      gameBoardBtns.forEach((el) => {
        el.textContent = "";
        el.innerHTML = "";
      });
      return;
    }
    let randomNum = Math.floor(Math.random() * 9);
    let board = gameBoard.gameSpace;
    let checkCompMove = board[randomNum];
    if (typeof checkCompMove == "string") {
      do {
        computerAi(symbol);
      } while (typeof checkCompMove !== "string");
    } else {
      board[randomNum] = symbol;
      gameBoardBtns.forEach((el) => {
        if (el.value == randomNum) {
          setTimeout(function () {
            el.textContent = symbol;
          }, 200);
        }
      });
    }
    findWinner();
  }

  gameBoardBtns.forEach((el) => {
    el.addEventListener("click", function (e) {
      if (gameInPlay == true && !e.target.textContent) {
        gameBoard.addMove(playerTurn, e.target.value);
        this.textContent = playerTurn;
        findWinner();
        if (gameInPlay == true && gameBoard.gameSpace.includes() == true)
          computerAi(CompSymbol);
      }
    });
  });

  function findWinner() {
    let board = gameBoard.gameSpace;
    if (
      board[0] == board[1] &&
      board[1] == board[2] &&
      typeof board[0] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[0]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[3] == board[4] &&
      board[4] == board[5] &&
      typeof board[3] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[3]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[6] == board[7] &&
      board[7] == board[8] &&
      typeof board[6] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[6]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[0] == board[3] &&
      board[3] == board[6] &&
      typeof board[0] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[0]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[1] == board[4] &&
      board[4] == board[7] &&
      typeof board[1] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[1]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[2] == board[5] &&
      board[5] == board[8] &&
      typeof board[2] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[2]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[0] == board[4] &&
      board[4] == board[8] &&
      typeof board[0] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[0]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (
      board[2] == board[4] &&
      board[4] == board[6] &&
      typeof board[2] == "string"
    ) {
      gameInPlay = false;
      displayWinner.textContent = `WINNER IS ${board[2]}. Choose your weapon to begin a new round`;
      displayWinner.classList.add("winner");
      return;
    }

    if (!board.includes()) {
      setTimeout(function () {
        displayWinner.textContent = `TIE GAME. Choose your weapon to begin a new round`;
        displayWinner.classList.add("winner");
      }, 300);
      gameInPlay = false;
      return;
    }
  }

  function clearGame() {
    displayWinner.textContent = "Choose Your Weapon!";
    displayWinner.classList.remove("winner");
    gameBoard.gameSpace = [, , , , , , , ,];
    playerSymbol = "";
    CompSymbol = "";
    playerTurn = "";
    gameBoardBtns.forEach((el) => {
      el.innerHTML = "";
      el.textContent = "";
    });
  }
})();
