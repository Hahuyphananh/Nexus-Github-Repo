// practices.js

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the element where you want to display practice data
    const practiceDetails = document.getElementById("practice-details");

    // Make an HTTP request to retrieve practice data from your server (Flask, for example)
    fetch('/getPractices')  // Use the correct route to retrieve practice data
        .then((response) => response.json())
        .then((data) => {
            if (data.length > 0) {
                // Process and display the practice data
                const practiceHTML = data.map((practice) => `
                    <div class="practice">
                        <h3>${practice.name}</h3>
                        <p>Date: ${practice.date}</p>
                        <p>Duration: ${practice.duration}</p>
                        <!-- Add more fields as needed -->
                    </div>
                `).join('');

                // Append the practice data to the "practice-details" element
                practiceDetails.innerHTML = practiceHTML;
            } else {
                // Handle the case when there's no practice data
                practiceDetails.innerHTML = "No practice data available.";
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
