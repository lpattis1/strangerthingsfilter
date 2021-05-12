const lights = document.querySelectorAll(".light");
const letters = document.querySelectorAll(".letter");
const searchGlass = document.querySelector(".fa-search");
const characters = document.querySelectorAll(".character");
const search = document.querySelector(".search");

console.log(characters[1].children[0].textContent);

function findCharacters() {
  search.addEventListener("keyup", function (e) {
    let userSearch = e.target.value.toLowerCase();
    characters.forEach((character) => {
      let strangerCharacter = character.children[0].textContent.toLowerCase();

      if (strangerCharacter.indexOf(userSearch) === -1) {
        character.classList.add("hidden");
      } else {
        character.classList.remove("hidden");
      }
    });
  });
}

findCharacters();
