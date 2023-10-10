const buttons = document.querySelectorAll(".navButton");
const  characters = document.querySelectorAll(".character");

buttons.forEach((navButton, index ) => {
    
    navButton.addEventListener("click", () => {
        unselectButton();
        unselectContent();
 
        navButton.classList.add("selected");
        characters[index].classList.add("selected");   

    })

    

});

function unselectContent() {
    const selectedCharacter = document.querySelector(".character.selected");
    selectedCharacter.classList.remove("selected");
}

function unselectButton() {
    const selectedButton = document.querySelector(".navButton.selected");
    selectedButton.classList.remove("selected");
}
