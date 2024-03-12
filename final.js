const final = document.getElementById("finalscore_disp");
// const vf = document.getElementById("winner");
verdict = localStorage.getItem("verdict");

if (verdict == 1) {
  final.innerHTML = "You Won";
} else {
  final.innerHTML = "Opponent Won";
}
