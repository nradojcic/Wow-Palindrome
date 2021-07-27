// get user input
// Controller function
function getValue() {
  // make sure the alert box is off and not styled at the beginning
  document.getElementById("alert").classList.add("invisible");
  document
    .getElementById("alert")
    .classList.remove("alert-danger", "alert-success");

  // get user string from the page
  let userString = document.getElementById("userString").value;

  // check for a palindrome
  let returnObj = checkForPalindrome(userString);

  // display a message to the webpage
  displayMessage(returnObj);
}

// check if string is a palindrome
// Logic function
function checkForPalindrome(userString) {
  // convert to lowercase, and then ...
  userString = userString.toLowerCase();

  // ... remove any spaces and special characters before checking
  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, "");

  // reverse the string
  let revString = [];
  let returnObj = {};

  for (let i = userString.length - 1; i >= 0; i--) {
    revString += userString[i];
  }

  // check if both strings are the same
  if (revString == userString) {
    returnObj.msg = "Well  done! Yes! You entered a Palindrome!";
    document.getElementById("alert").classList.add("alert-success");
  } else {
    returnObj.msg = "Sorry! No, it's NOT a Palindrome!";
    document.getElementById("alert").classList.add("alert-danger");
  }

  returnObj.reversed = revString;

  // return the object
  return returnObj;
}

// display a message on the webpage
// View function
function displayMessage(returnObj) {
  // write heading and the message
  document.getElementById("alert-heading").innerHTML = returnObj.msg;
  document.getElementById(
    "msg"
  ).innerHTML = `Your Phrase reversed is: <strong>${returnObj.reversed}</strong>`;

  // turn the alert on
  document.getElementById("alert").classList.remove("invisible");
}
