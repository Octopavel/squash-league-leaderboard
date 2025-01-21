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
