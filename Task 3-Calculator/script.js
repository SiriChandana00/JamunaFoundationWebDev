let userInput = "";

function insertNum(num) {
  userInput += num;
  document.getElementById("inputScreen").value = userInput;
}

// Add an operator (+, -, *, /)
function addOperator(op) {
  const lastChar = userInput.slice(-1);
  if (userInput && !isMathSymbol(lastChar)) {
    userInput += op;
    document.getElementById("inputScreen").value = userInput;
  }
}


function insertDot() {
  const lastChar = userInput.slice(-1);
  if (!userInput || isMathSymbol(lastChar)) {
    userInput += "0.";
  } else {
    userInput += ".";
  }
  document.getElementById("inputScreen").value = userInput;
}

function isMathSymbol(ch) {
  return ["+", "-", "*", "/"].includes(ch);
}

function resetDisplay() {
  userInput = "";
  document.getElementById("inputScreen").value = "";
  document.getElementById("outputText").textContent = "";
}

function solveExpression() {
  try {
    let result = eval(userInput);
    if (!isFinite(result)) throw new Error();
    userInput = result.toString();
    document.getElementById("inputScreen").value = userInput;
    document.getElementById("outputText").textContent = `✅ Result: ₹${result.toFixed(2)}`;
  } catch {
    document.getElementById("outputText").textContent = "⚠️ Invalid calculation!";
  }
}


function showImpact() {
  const amount = parseFloat(userInput);
  if (isNaN(amount) || amount <= 0) {
    document.getElementById("outputText").textContent = "Please enter a valid amount!";
    return;
  }

  const trees = Math.floor(amount / 15);
  document.getElementById("outputText").textContent =
    `🌳 Donation of ₹${amount} can grow around ${trees} trees!`;
}
