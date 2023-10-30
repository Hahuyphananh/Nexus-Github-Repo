document.addEventListener("DOMContentLoaded", function () {
    const createPracticeForm = document.querySelector("form");
    const createPracticeButton = document.getElementById("createPracticeButton");
    const myPracticesButton = document.getElementById("myPracticesButton");

    createPracticeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Collect form data
        const practiceData = {
            name: document.getElementById("practice-name").value,
            date: document.getElementById("practice-date").value,
            duration: document.getElementById("practice-duration").value,
            // Add more fields as needed
        };

        // Define the appendPracticeData function to handle the data
        function appendPracticeData(data) {
            // Your logic to append data to a JSON file or perform other actions goes here
        }

        // Call the appendPracticeData function with the relevant data
        appendPracticeData(practiceData);
    });

    myPracticesButton.addEventListener("click", function () {
        // Navigate to the "My Practices" page when the button is clicked
        window.location.href = "practices.html"; // Replace with the actual URL
    });
});


//dropdown list
// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the select element
    const select = document.getElementById("practice-goals");
    const selectDuration = document.getElementById("practice-duration");
  
    // Define an array of options
    const options = [
      { value: "endurance", text: "Endurance" },
      { value: "speed", text: "Speed" },
      { value: "Technique", text: "Technique" },
      { value: "Taper", text: "Taper" }
    ];
  
    // Check if the default option already exists
    const defaultOption = select.querySelector('option[value=""]');
    
    if (!defaultOption) {
      // Create a default option if it doesn't exist
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.textContent = "Select an option";
      select.appendChild(defaultOption);
    }
  
    // Populate the select element with options
    options.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      select.appendChild(optionElement);
    });
  });

// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the select element
    const selectDuration = document.getElementById("practice-duration");
  
    // Define an array of options for practice duration
    const durationOptions = [
      { value: "15min", text: "15min" },
      { value: "30min", text: "30min" },
      { value: "1h-1h30", text: "1h" },
      { value: "2h+", text: "2h +" },
    ];
  
    // Check if the default option already exists
    const defaultOption = selectDuration.querySelector('option[value=""]');
  
    if (!defaultOption) {
      // Create a default option if it doesn't exist
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      defaultOption.textContent = "Select an option";
      selectDuration.appendChild(defaultOption);
    }
  
    // Populate the select element with practice duration options
    durationOptions.forEach((option) => {
      const optionElement = document.createElement("option");
      optionElement.value = option.value;
      optionElement.textContent = option.text;
      selectDuration.appendChild(optionElement);
    });
  });
  