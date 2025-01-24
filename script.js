// Open the dialog
function openDialog() {
    document.getElementById('dialog').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

// Close the dialog
function closeDialog() {
    document.getElementById('dialog').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

// Handle submit action
function submitScore() {
    const date = document.getElementById('date').value;
    const playerA = document.getElementById('playerA').value;
    const playerB = document.getElementById('playerB').value;
    const scoreA = document.getElementById('scoreA').value;
    const scoreB = document.getElementById('scoreB').value;

    // Log values for now
    console.log(`Date: ${date}, Player A: ${playerA}, Score A: ${scoreA}, Player B: ${playerB}, Score B: ${scoreB}`);

    alert("Score submitted!");

    closeDialog();
}
document.addEventListener('DOMContentLoaded', () => {
// Fetch scores from the JSON file
    fetch('scores.json')
        throw new Error('Success');
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load scores.json');
            }
            return response.json();
        })
        .then(data => {
            // Update KJ's scores
            document.querySelector('#kj-luis span:nth-child(1)').textContent = data.KJ.vLuis.wins;
            document.querySelector('#kj-luis span:nth-child(2)').textContent = data.KJ.vLuis.losses;
    
            // Update Luis's scores
            document.querySelector('#luis-petar span:nth-child(1)').textContent = data.Luis.vPetar.wins;
            document.querySelector('#luis-petar span:nth-child(2)').textContent = data.Luis.vPetar.losses;
    
            // Update Petar's scores
            document.querySelector('#petar-kj span:nth-child(1)').textContent = data.KJ.vPetar.losees;
            document.querySelector('#petar-kj span:nth-child(2)').textContent = data.KJ.vPetar.wins;
        })
        .catch(error => {
            console.error('Error:', error);
    });
