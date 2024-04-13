document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('button[type="submit"]');
    const resultDiv = document.getElementById('result');

    // Function to calculate the number of correct answers and update the result
    function updateResult() {
        // Count the number of false checkboxes
        const falseCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked[value="false"]');
        const falseCount = falseCheckboxes.length;

        // Calculate the number of correct answers
        const correctCount = 40 - falseCount;

        // Display the count in the result div
        resultDiv.textContent = `Correct Answers: ${correctCount}`;

        // Check if the number of correct answers is more than 35
        if (correctCount > 35) {
            // If true, display congratulations message
            resultDiv.textContent += ". Congratulations! You made it!";
        } else if (correctCount > 30 && correctCount <= 35) {
            // If true, display close message
            resultDiv.textContent += ". That was close! Keep it up!";
        }
    }

    // Add click event listener to the submit button
    submitButton.addEventListener("click", function() {
        // Update the result when the submit button is clicked
        updateResult();
    });

    const resetButton = document.getElementById('resetBtn');

    // Add click event listener to the reset button
    resetButton.addEventListener("click", function() {
        // Clear the content of the result div
        resultDiv.textContent = "";

        // Uncheck all checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });

        // Clear all input fields
        const inputs = document.querySelectorAll('input[type="text"]');
        inputs.forEach(input => {
            input.value = "";
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input[type='text']");

    inputs.forEach((input, index) => {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault(); // Prevent default behavior of Enter key
                const nextIndex = index + 1;
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus(); // Move focus to the next input
                }
            } else if (event.key === "Enter" && event.shiftKey) {
                event.preventDefault(); // Prevent default behavior of Shift + Enter
                const prevIndex = index - 1;
                if (prevIndex >= 0) {
                    inputs[prevIndex].focus(); // Move focus to the previous input
                    inputs[prevIndex].select(); // Select all text in the previous input
                }
            }
        });
    });
});
