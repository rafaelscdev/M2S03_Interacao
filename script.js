document.addEventListener("DOMContentLoaded", () => {
    const startButton = document.getElementById("start-button");
    const messageDiv = document.getElementById("message");

    startButton.addEventListener("click", () => {
        const name = prompt("Por favor, insira seu nome:");

        if (!name) {
            showMessage("Erro: Você não inseriu um nome.", "error");
            return;
        }

        const proceed = confirm("Deseja continuar com a interação, " + name + "?");

        if (proceed) {
            showMessage("Obrigado por continuar, " + name + "!", "success");
        } else {
            showMessage("Interação encerrada.", "info");
        }
    });

    function showMessage(message, type) {
        messageDiv.textContent = message;
        messageDiv.className = ""; // Resetar classes
        messageDiv.classList.add(type);
        messageDiv.classList.remove("hidden");
    }
});
