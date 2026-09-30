// Global variable storing seat capacity
let availableSeats = 12;

/**
 * 1. Check Registration Status
 */
function checkRegistration() {
  let message = document.getElementById("registrationStatus");
  if (availableSeats > 0) {
    message.textContent = "Registration is currently open.";
  } else {
    message.textContent = "Registration is currently closed.";
  }
}

/**
 * 2. Check Seat Availability
 */
function checkSeats() {
  let message = document.getElementById("seatMessage");
  if (availableSeats > 0) {
    message.textContent = "Seats are available. Remaining seats: " + availableSeats;
  } else {
    message.textContent = "Sorry, no seats are available.";
  }
}

/**
 * 3. Personal Greeting Generator
 * Reads the typed name using .value
 */
function showGreeting() {
  let name = document.getElementById("studentName").value;
  let output = document.getElementById("greetingMessage");
  
  if (name.trim() === "") {
    output.textContent = "Please enter your name first!";
  } else {
    output.textContent = "Welcome, " + name + "!";
  }
}

/**
 * 4. Show Workshop Venue
 */
function showVenue() {
  let message = document.getElementById("venueMessage");
  message.textContent = "The workshop will be held in Computer Lab 2.";
}

/**
 * 5. Full Workshop Registration Logic
 * Reads inputs (Name, ID, Email), validates, checks seats, and registers student!
 */
function registerStudent() {
  let name = document.getElementById("studentName").value;
  let studentId = document.getElementById("studentId").value;
  let email = document.getElementById("studentEmail").value;
  let result = document.getElementById("registrationResult");

  // Input check
  if (name.trim() === "" || studentId.trim() === "" || email.trim() === "") {
    result.textContent = "Please enter your Name, Student ID, and Email to register.";
    result.style.color = "#dc2626";
    return;
  }

  // Seat availability check
  if (availableSeats > 0) {
    availableSeats = availableSeats - 1; // Decrement seat count
    result.textContent = "Registration Successful! " + name + " (" + studentId + ") is registered. Remaining seats: " + availableSeats;
    result.style.color = "#15803d";
    
    // Auto update seat status if displayed
    let seatMsg = document.getElementById("seatMessage");
    if (seatMsg) {
      seatMsg.textContent = "Seats are available. Remaining seats: " + availableSeats;
    }
  } else {
    result.textContent = "Sorry " + name + ", registration failed: No seats available!";
    result.style.color = "#dc2626";
  }
}

/**
 * 6. Experimental Grade Calculator
 */
function grd() {
  let name = prompt("Enter student name:");
  if (!name || name.trim() === "") {
    alert("Please enter a name first.");
    return;
  }

  let web = Number(prompt("Enter Web & Internet Programming marks (0-100):"));
  let os = Number(prompt("Enter Operating System marks (0-100):"));
  let embedded = Number(prompt("Enter Embedded System marks (0-100):"));

  let message = document.getElementById("grdMsg");

  if (
    isNaN(web) || isNaN(os) || isNaN(embedded) ||
    web < 0 || web > 100 ||
    os < 0 || os > 100 ||
    embedded < 0 || embedded > 100
  ) {
    message.textContent = "Please enter valid marks between 0 and 100 for all subjects.";
    return;
  }

  let total = web + os + embedded;
  let percentage = (total / 300) * 100;
  let grade;

  if (percentage >= 80) {
    grade = "A+";
  } else if (percentage >= 70) {
    grade = "A-";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 50) {
    grade = "C";
  } else if (percentage >= 40) {
    grade = "D";
  } else {
    grade = "Fail";
  }

  message.textContent =
    name +
    " -- Total: " +
    total +
    "/300, Percentage: " +
    percentage.toFixed(2) +
    "%, Grade: " +
    grade;
}