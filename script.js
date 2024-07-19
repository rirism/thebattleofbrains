function updateScore(teamId, points) {
    const scoreElement = document.getElementById(`score${teamId === 'team1' ? '1' : '2'}`);
    let currentScore = parseInt(scoreElement.textContent);
    currentScore += points;
    scoreElement.textContent = currentScore;
    updateTotalScore(teamId);
}

function resetScore(teamId) {
    const scoreElement = document.getElementById(`score${teamId === 'team1' ? '1' : '2'}`);
    scoreElement.textContent = '0';
    updateTotalScore(teamId);
}

function addInputField() {
    const teams = ['team1', 'team2'];
    teams.forEach(teamId => {
        const container = document.getElementById(`${teamId}-input-fields`);
        const input = document.createElement('input');
        input.type = 'number';
        input.className = 'score-input';
        input.value = 0;
        input.onchange = function() { updateTotalScore(teamId); };
        container.appendChild(input);
    });
}

function removeInputField() {
    const teams = ['team1', 'team2'];
    teams.forEach(teamId => {
        const container = document.getElementById(`${teamId}-input-fields`);
        if (container.children.length > 1) {
            container.removeChild(container.lastElementChild);
        }
        updateTotalScore(teamId);
    });
}

function updateTotalScore(teamId) {
    const container = document.getElementById(`${teamId}-input-fields`);
    let totalScore = 0;
    for (const input of container.children) {
        totalScore += parseInt(input.value);
    }
    document.getElementById(`totalScore${teamId === 'team1' ? '1' : '2'}`).textContent = totalScore;
}
