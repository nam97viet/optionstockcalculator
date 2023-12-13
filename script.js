function calculateresults() {
  // Clear previous result
  document.getElementById("result").innerHTML = "";

  // Get input
  var account_size = parseInt(document.getElementById("account_size").value);
  var account_risk = parseInt(document.getElementById("account_risk").value);
  var stop_loss = parseInt(document.getElementById("stop_loss").value);

  // Create table
  var table =
    "<table><thead><tr><th>Number of Trade</th><th>Amount per Trade</th></tr></thead><tbody>";

  // Loop from i = 1 to 7
  for (var i = 1; i <= 7; i++) {
    var result = (account_size * account_risk) / stop_loss / i;
    table += "<tr><td>" + i + "</td><td>" + result.toFixed(2) + "</td></tr>";
  }

  // Close table
  table += "</tbody></table>";

  // Set result as table HTML code
  document.getElementById("result").innerHTML = table;
}

document.addEventListener("keydown", function (event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
  if (event.keyCode == 123) {
    event.preventDefault();
  }
});

document.addEventListener("contextmenu", (event) => event.preventDefault());
