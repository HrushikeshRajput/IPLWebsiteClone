// JAVASCRIPT CODE TO DISPLAY GREETINGS AS PER TIME
let today = new Date();
let hour = today.getHours();
let greeting;

if (hour >= 0 && hour < 12) {
  greeting = "Good morning!";
} else if (hour >= 12 && hour < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good night!";
}

window.onload = function () {
  document.getElementById("greeting").innerHTML = greeting;
};
// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX