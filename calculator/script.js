const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (button.classList.contains("clear")) {
      display.value = "";
    } else if (button.classList.contains("del")) {
      display.value = display.value.slice(0, -1);
    } else if (button.classList.contains("percent")) {
      try {
        display.value = parseFloat(display.value) / 100;
      } catch {
        display.value = "Error";
      }
    } else if (button.classList.contains("equal")) {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += value;
    }
  });
});
