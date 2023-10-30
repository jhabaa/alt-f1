// Get buttons
const back_btn = document.querySelector("#back_btn")
const fordward_btn = document.querySelector("#forward_btn")

var container = document.querySelector(".container")

let cards = document.querySelectorAll(".card")
var images_count = document.querySelectorAll(".card").length - 1;
var indexes = [0,1,2] // Init with 23 firsts pictures that we want to display
// Print the first 3 cards

indexes.forEach((index) => {
    cards[index].style.display = "flex";
});


back_btn.addEventListener("click", () => {  
    //MARK: Get images availables in the left
    let images_availables_on_left = indexes[0] > 3 ? 3 : indexes[0];
    //MARK: Create a new array with indexes move to the left by the images count in the left
    let new_indexes = indexes.map((index) => index - images_availables_on_left);
    console.log("go to new_indexes: ", new_indexes)
    //MARK: Set indexes to True
    new_indexes.forEach((index) => {
        cards[index].style.display = "flex";
    });
    //MARK: Set indexes to False
    indexes.forEach((index) => {
        if (!new_indexes.includes(index)){
            cards[index].style.display = "none";
        }
    });
    //MARK: Update indexes
    indexes = new_indexes;
    //MARK: Hide the left button if there is no more images to display
    if (indexes[0] == 0){
        back_btn.style.display = "none";
    }
    //MARK: Show the right button if there is more images to display
    if (indexes[indexes.length - 1] < images_count){
        fordward_btn.style.display = "flex";
    }
})
fordward_btn.addEventListener("click", () => {
    //MARK: Get imges availables in the right
    let images_availables_on_right = images_count - indexes[indexes.length - 1] > 3 ? 3 : images_count - indexes[indexes.length - 1];
    //MARK: Create a new array with indexes move to the right by the images count in the right
    let new_indexes = indexes.map((index) => index + images_availables_on_right);
    console.log("go to new_indexes: ", new_indexes)
    //MARK: Set indexes to True
    new_indexes.forEach((index) => {
        cards[index].style.display = "flex";
    });
    //MARK: Set indexes to False
    indexes.forEach((index) => {
        if (!new_indexes.includes(index)){
            cards[index].style.display = "none";
        }
    });
    
    //MARK: Update indexes
    indexes = new_indexes;
    //MARK: Hide the right button if there is no more images to display
    if (indexes[indexes.length - 1] == images_count){
        fordward_btn.style.display = "none";
    }
    //MARK: Show the left button if there is more images to display
    if (indexes[0] > 0){
        back_btn.style.display = "flex";
    }
}) 