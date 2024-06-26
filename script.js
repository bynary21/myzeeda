function respondToProposal(response) {
    var responseMessage = document.getElementById("responseMessage");
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");

    if (response) {
        responseMessage.textContent = "That's great Zeeda, you just got yourself a great boyfriend (Yoruba Demon)";
        yesButton.disabled = true;
        noButton.disabled = true;
    }
}

function moveButton() {
    const button = document.getElementById('noButton');
    
    // Calculate new position within the viewport
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    
    button.style.position = 'absolute';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

document.getElementById('noButton').addEventListener('mouseover', moveButton);
