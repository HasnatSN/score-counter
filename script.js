const addButtons = document.querySelectorAll("[data-add]");
const subButtons = document.querySelectorAll("[data-sub]");
const teamOneScoreboard = document.querySelector(".team-1");
const teamTwoScoreboard = document.querySelector(".team-2");

let teamOneScore = 0;
let teamTwoScore = 0;

addButtons.forEach((addButton) => {
  addButton.addEventListener("click", () => {
    const addTeam = addButton.dataset.add;
    addPoint(addTeam);
  });
});

subButtons.forEach((subButton) => {
  subButton.addEventListener("click", () => {
    const subTeam = subButton.dataset.sub;
    subPoint(subTeam);
  });
});

function addPoint(team) {
  if (team == 1) {
    teamOneScore += 1;
    teamOneScoreboard.textContent = `${teamOneScore}`;
  } else if (team == 2) {
    teamTwoScore += 1;
    teamTwoScoreboard.textContent = `${teamTwoScore}`;
  }
}

function subPoint(team) {
  if (team == 1) {
    teamOneScore -= 1;
    teamOneScoreboard.textContent = `${teamOneScore}`;
  } else if (team == 2) {
    teamTwoScore -= 1;
    teamTwoScoreboard.textContent = `${teamTwoScore}`;
  }
}
