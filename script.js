const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("number")) {
            display.value += button.textContent;
        } else if (button.classList.contains("operator")) {
            display.value += " " + button.textContent + " ";
        } else if (button.classList.contains("calculate")) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        } else if (button.classList.contains("clear")) {
            display.value = "";
        }
    });
});
