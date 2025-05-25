//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function () {
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value, 10);
  const outputDiv = document.getElementById("output");

  // Clear the output before setting new message
  outputDiv.textContent = "";

  // Guard clause for invalid inputs
  if (!textInput || isNaN(delayInput) || delayInput < 0) {
    outputDiv.textContent = "Please enter valid text and delay.";
    return;
  }

  await delay(delayInput);
  outputDiv.textContent = textInput;
});

// Utility function for delay using Promise
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
