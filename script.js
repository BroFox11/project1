let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;

    document.getElementById("myTextResult").textContent = `Hello, ${username}!`;

    document.getElementById("mySubmit2").onclick = function() {
        username = document.getElementById("myText2").value;
    
        document.getElementById("myTextResult2").textContent = `Your console is..., ${username}!`;
    }

    document.getElementById("mySubmit3").onclick = function() {
        username = document.getElementById("myText3").value;
    
        document.getElementById("myTextResult3").textContent = `Your playstyle is..., ${username}!`;
    }

    document.getElementById("mySubmit4").onclick = function() {
        username = document.getElementById("myText4").value;
    
        document.getElementById("myTextResult4").textContent = `You have confirm your submit, ${username}!`;
    }
}
