// Check if the random value is already stored in local storage
var storedTotalMarks = localStorage.getItem('totalMarks');

if (storedTotalMarks) {
  // Use the stored value if it exists
  var totalMarks = parseInt(storedTotalMarks);
} else {
  // Generate a new random value if it doesn't exist and store it
  totalMarks = Math.floor(Math.random() * (500 - 271 + 1)) + 271;
  localStorage.setItem('totalMarks', totalMarks);
}

var formattedTotalMarks = totalMarks + "/500";
document.getElementById('totalMarks').textContent = formattedTotalMarks;
