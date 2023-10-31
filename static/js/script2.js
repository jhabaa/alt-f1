//imports
// Get DOM
const back_btn = document.querySelector("#back_btn")
const fordward_btn = document.querySelector("#forward_btn")
let container = document.querySelector(".container")
let cardsContainer = document.querySelector(".cards")
let background = document.querySelector("#background")
let city = document.querySelector("#city")
let description = document.querySelector("#description")
let cards = document.querySelectorAll(".card")
let images_count = document.querySelectorAll(".card").length - 1;
let indexes = [0,1,2] // Init with 3 firsts pictures that we want to display
let this_card = 0
//MARK: Cards are already hide in the css. We just need to show the first 3 cards
indexes.forEach((index) => {
    cards[index].style.display = "flex";
});

//MARK: Change datas for the page
function setDatas(){
    let card = cardsContainer.children[0]
    let card_bg = card.attributes.getNamedItem("data-bg").value
    let card_city = card.attributes.getNamedItem("data-city").value
    let card_description = card.attributes.getNamedItem("data-desc").value
    background.attributes.getNamedItem("src").value = "../static/"+card_bg
    city.innerHTML = card_city
    description.innerHTML = card_description
}

//Init
setDatas()

//MARK: Set the fist card image as showed. Add show class to the first card
console.log(cards[this_card].children)
cards[this_card].children[1].children[0].classList.add("show")
cards[this_card].children[1].children[1].classList.add("show")

//MARK: Add swipe event to left
back_btn.addEventListener("click", () => {  
    moveLeft();
})

//MARK: Add keyboard stroke event
window.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        console.log('left');
        moveLeft();
    }
    else if (event.key === 'ArrowRight') {
        moveRIght();
    }
});

//MARK: Add swipe event to right
fordward_btn.addEventListener("click", () => {
    moveRIght()
}) 

function moveRIght(){
    //MARk: Here is the tip: We need to move the first element to the end of the list then mark as visible the third element
    let first_el = cardsContainer.firstElementChild
    //remove show
    first_el.children[1].children[0].classList.remove("show") // This is the infos div
    first_el.children[1].children[1].classList.remove("show") //This is the img element
    first_el.classList.remove("show")
    first_el.style.display = "none"
    cardsContainer.appendChild(first_el)
    //add show
    cardsContainer.firstElementChild.children[1].children[0].classList.add("show")
    cardsContainer.firstElementChild.children[1].children[1].classList.add("show")
    cardsContainer.firstElementChild.classList.add("show")
    //show second el
    cardsContainer.children[2].style.display = "flex" // This is the complete card
    //delete first el
    console.log(cardsContainer.childElementCount)

    setDatas()
}
function moveLeft(){
    let last_el = cardsContainer.lastElementChild
    //remove show
    last_el.children[1].children[0].classList.add("show")
    last_el.children[1].children[1].classList.add("show")
    last_el.classList.add("show")
    last_el.style.display = "flex"
    cardsContainer.prepend(last_el);
    //add show
    cardsContainer.children[2].children[1].children[0].classList.remove("show")
    cardsContainer.children[2].children[1].children[1].classList.remove("show")
    cardsContainer.children[2].classList.remove("show")
    //turn off the third one 
    cardsContainer.children[2].style.display = "none"
 
    console.log(cardsContainer.childElementCount)

    setDatas()
}
