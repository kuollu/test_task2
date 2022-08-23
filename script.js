document.querySelector(".search").addEventListener("click", findPokemon)

function lowerCaseName(string) {
   return string.toLowerCase()
}
function firstLetterUpper(string) {
   return string.charAt(0).toUpperCase() + string.slice(1);
}
function findPokemon(e) {

   let name = document.querySelector(".value").value
   let pokemon = lowerCaseName(name)

   fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
         document.querySelector(".pokemonInfo").innerHTML = `
      <div> 
      <img
         src="${data.sprites.other["official-artwork"].front_default}"
      </div>
      <p class="default">ID: ${data.id}</p>
      <p>Имя: ${firstLetterUpper(data.name)}</p>
      <p>Рост: ${data.height*10} сантиметров.</p>
      <p>Вес: ${data.weight*0.1} кг.</p>`
})

e.preventDefault();
}