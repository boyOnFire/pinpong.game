let scores = document.querySelectorAll(".score");

const btns = document.querySelectorAll(".btn");

const gameOptions = document.querySelector(".select-options");
let winningScore = 3;
let gameOver = false;
let p1Score = 0;
let p2Score = 0;
gameOptions.addEventListener("change", function (e) {
  winningScore = parseInt(this.value);
});

btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    if (btn.classList.contains("player-1")) {
      if (!gameOver) {
        p1Score += 1;
        scores.forEach(function (score) {
          if (score.classList.contains("player1-score")) {
            if (p1Score === winningScore) {
              gameOver = true;
              scores.forEach(function (score) {
                if (score.classList.contains("player1-score")) {
                  score.classList.add("winner");
                } else if (score.classList.contains("player2-score")) {
                  score.classList.add("loser");
                }
              });
            }
            score.textContent = p1Score;
          }
        });
      }
    } else if (btn.classList.contains("player-2")) {
      if (!gameOver) {
        p2Score += 1;
        scores.forEach(function (score) {
          if (score.classList.contains("player2-score")) {
            if (p2Score === winningScore) {
              gameOver = true;
              scores.forEach(function (score) {
                if (score.classList.contains("player2-score")) {
                  score.classList.add("winner");
                } else if (score.classList.contains("player1-score")) {
                  score.classList.add("loser");
                }
              });
            }
            score.textContent = p2Score;
          }
        });
      }
    } else if (btn.classList.contains("reset")) {
      scores.forEach(function (score) {
        gameOver = false;
        p1Score = 0;
        p2Score = 0;
        score.textContent = 0;
        score.classList.remove("loser", "winner");
      });
    } else {
      console.log("error");
    }
  });
});
