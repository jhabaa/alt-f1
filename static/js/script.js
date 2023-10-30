// Get buttons
const back_btn = document.querySelector("#back_btn")
const fordward_btn = document.querySelector("#forward_btn")
// Get Spacers
const left_spacer = document.querySelector(".lspacer")
const right_spacer = document.querySelector(".rspacer")
var container = document.querySelector(".container")
var index = 2; // Display 3 images at a time
let cards = document.querySelectorAll(".card")
var images_count = document.querySelectorAll(".card").length - 1;

// Print the first 3 cards
for (let i = 0; i <= index; i++) {
    cards[i].style.display = "flex"; // Start at index 3 (3 images are displayed)
}

back_btn.addEventListener("click", () => {  
    //MARK: Switch On 3 previous cards
    for (let i = index - 6; i < index - 3; i++) {
        cards[i].style.display = "flex";
    }
    //MARK: Switch Off 3 next cards
    for (let i = index - 3; i < index; i++) {
        cards[i].style.display = "none";
    }
    index -= 3; // Decrement
})
fordward_btn.addEventListener("click", () => {
    let cars_available = (images_count - index +1) >= 3 ? 3 : 1; // Get the number of cars available with a maximum of three. Else, just display the remaining cars
    let startIndex = index - cars_available < 0 ? 0 : index - cars_available;
    //logic
    //Foreach next cards availables, make true
    for (let i = index; i < index + cars_available; i++) {
        cards[i+1].style.display = "flex";
    }
    //set Index
    index += cars_available;
    //Foreach previous cards, make false from the start index
    for (let i = startIndex; i < startIndex+cars_available; i++) {
        cards[i].style.display = "none";
    }
    //Print values of all cards
    cards.forEach((card) => {
        console.log(card.style.display)
    })
}) 