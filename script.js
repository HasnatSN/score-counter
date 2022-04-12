const addButtons = document.querySelector('[data-add]');

addButtons.forEach((addButton) => {
    addButton.addEventListener("click", () => {
        const scoringTeam = addButton.dataset.add;
        console.log(scoringTeam);
    })
})