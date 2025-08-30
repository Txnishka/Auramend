document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const responses = {};
    for (const [name, value] of formData.entries()) {
        responses[name] = value;
    }
    // Save the responses to the database
    // ...
});

document.getElementById('check-status').addEventListener('click', function() {
    // Fetch the saved responses from the database
    // Display the result as stable or unstable
    // ...
});