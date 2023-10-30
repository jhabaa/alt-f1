// Get DOM
const back_btn = document.querySelector("#back_btn")
const fordward_btn = document.querySelector("#forward_btn")
let container = document.querySelector(".container")
let cards = document.querySelectorAll(".card")
let images_count = document.querySelectorAll(".card").length - 1;
let indexes = [0,1,2] // Init with 3 firsts pictures that we want to display

//MARK: Cards are already hide in the css. We just need to show the first 3 cards
indexes.forEach((index) => {
    cards[index].style.display = "flex";
});
//MARK: Let's create a function to update the buttons hide/show
let updateButtons = () => {
    if (indexes[0] == 0){
        back_btn.style.display = "none";
    }else{
        back_btn.style.display = "flex";
    }
    if (indexes[indexes.length - 1] < images_count){
        fordward_btn.style.display = "flex";
    }else{
        fordward_btn.style.display = "none";
    }
}

back_btn.addEventListener("click", () => {  
    //MARK: Get images availables in the left
    let images_availables_on_left = indexes[0] > 3 ? 3 : indexes[0];
    //MARK: Create a new array with indexes move to the left by the images count in the left
    let new_indexes = indexes.map((index) => index - images_availables_on_left);
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
    //MARK: Update buttons
    updateButtons()
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
    updateButtons()
}) 