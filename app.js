// query selectors

const form = document.forms[0];
const inputs = document.querySelectorAll(".input");
const output = document.querySelector(".output");

// for output background

const contentDiv = document.querySelector(".displayFlex");
const cols = document.querySelectorAll(".col");

form.addEventListener("submit", function checkHandler(e) {
  e.preventDefault();

  let CP = inputs[0].value;
  let Qty = inputs[1].value;
  let SP = inputs[2].value;

  console.log("CP, Qty, SP", CP, Qty, SP);

  if (!isNaN(CP) && !isNaN(Qty) && !isNaN(SP)) {
    CP = Number(CP);
    Qty = Number(Qty);
    SP = Number(SP);
    if (CP > 0 && Qty > 0 && SP > 0) {
      if (CP > SP) {
        //loss
        const loss = ((CP - SP) * Qty).toFixed(2);
        // percentage
        const lossPer = (((CP - SP) * 100) / CP).toFixed(2);
        output.innerHTML = `<div style="background-color: rgb(255, 255,255,0.2); padding: 1rem">You lost ${lossPer}%. Your total loss is ₹${loss}</div>`;
      } else {
        // profit
        const profit = ((SP - CP) * Qty).toFixed(2);
        // percentage
        const profitPer = (((SP - CP) * 100) / CP).toFixed(2);
        output.innerHTML = `<div style="background-color: rgb(255, 255,255,0.2); padding: 1rem">You gained ${profitPer}%. Your total profit is ₹${profit}</div>`;
      }
    } else {
      // error
      output.innerHTML =
        "Please Enter Values Greater Than 0 (Only Numbers Are Allowed In Above Fields)";
    }
  } else {
    // error
    output.innerHTML =
      "Please Enter Values Greater Than 0 (Only Numbers Are Allowed In Above Fields)";
  }
});
