const options = ["rock", "paper", "scissors"];

const playerScore = document.getElementById("player");
const opponentScore = document.getElementById("opponent");

const playerOptionImage = document.querySelector(".player .optionimage");
const opponentOptionImage = document.querySelector(".opponent .compimage img");
const optionImages = document.querySelectorAll(".player .options img");

let playerScoreCount = 0;
let opponentScoreCount = 0;
let totalGameCount = 0;

// Add click event listeners to the option images
optionImages.forEach((image) => {
  image.addEventListener("click", () => {
    const playerChoice = image.id;
    const opponentChoice = options[Math.floor(Math.random() * options.length)];

    playerOptionImage.innerHTML = `<img src="./assets/${playerChoice}-hand.png" alt="${playerChoice}">`;
    opponentOptionImage.src = `./assets/${opponentChoice}-hand.png`;

    const winner = getWinner(playerChoice, opponentChoice);

    totalGameCount++;
    if (totalGameCount < 10) {
      if (winner === "player") {
        playerScoreCount++;
        playerScore.textContent = playerScoreCount;
      } else if (winner === "opponent") {
        opponentScoreCount++;
        opponentScore.textContent = opponentScoreCount;
      }
    } else {
      let res = playerScoreCount >= opponentScoreCount ? 1 : 0;
      localStorage.setItem("verdict", res);
      location.href = "./gameover.html";
    }
  });
});

function getWinner(playerChoice, opponentChoice) {
  if (playerChoice === opponentChoice) {
    return "tie";
  } else if (
    (playerChoice === "rock" && opponentChoice === "scissors") ||
    (playerChoice === "paper" && opponentChoice === "rock") ||
    (playerChoice === "scissors" && opponentChoice === "paper")
  ) {
    return "player";
  } else {
    return "opponent";
  }
}
