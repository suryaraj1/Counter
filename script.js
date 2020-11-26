// global counter 
// initally set to 0

let count = 0;
var value = document.querySelector("#value");
var cache = document.querySelectorAll(".btn");
var color = document.querySelector(".color");
const buttons = [];
for (let i = 1; i < 4; i++) buttons.push(cache[i]);
var flipperButton = document.querySelector("#flipper")
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

console.log(color);
//console.log(buttons);
// console.log(value);
// console.log(buttons);

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

flipperButton.addEventListener("click", function() {
   	let hexColor = "#";
    // every hex color has 6 places
    for (let i = 0; i < 6; i++) {
    	hexColor += colors[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


buttons.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        const styles = event.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("reset")) {
            count = 0;
        } else {
            count++;
        }
        if (count < 0) value.style.color = "red";
        else if (count > 0) value.style.color = "green";
        else value.style.color = "black";
        value.textContent = count;
    });
});