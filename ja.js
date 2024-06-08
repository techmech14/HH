document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('.clue-input');
    const verifyButton = document.querySelector('.verify-button');
    const clue = "MUYALKUTTI"; // Define your clue here

    inputs.forEach((input, index) => {
        input.addEventListener('input', () => {
            input.value = input.value.toUpperCase(); 
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
            checkClue();
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });

    verifyButton.addEventListener('click', checkClue);

    function checkClue() {
        let enteredClue = '';
        inputs.forEach(input => {
            enteredClue += input.value.toUpperCase();
        });

        if (enteredClue === clue) {
            window.location.href = "success.html"; // Redirect to the success page
        }
    }
});
