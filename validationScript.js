// JavaScript code for form validation
document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById('myForm');
  let inputField = document.getElementById('inputField');
  let feedback = document.createElement('p');
  feedback.style.color = 'red';
  form.appendChild(feedback);
      
  form.addEventListener('submit', function(event) {
      // Prevent form from submitting
      event.preventDefault();
      
      // Retrieve the input field value
      let inputValue = inputField.value;
      
      // Regular expression pattern for alphanumeric input
      let pattern = /^[a-zA-Z0-9]+$/;
      
      // Check if the input value matches the pattern
      if (pattern.test(inputValue)) {
          // Valid input: display confirmation and submit the form
          feedback.style.color = "green";
          feedback.textContent = "Submission successful.";

      } else {
          // Invalid input: display error message
          feedback.style.color = "red";
          feedback.textContent = "Error: Input must be alphanumeric.";
      }
  });
});