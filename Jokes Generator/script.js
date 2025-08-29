let JokeBtn = document.querySelector("#getJokeBtn");
let joke = document.querySelector("#joke");


JokeBtn.addEventListener("click", function(){
    joke.style.color = "black";
    joke.textContent = "Your Joke is Loading..."
     fetch("https://official-joke-api.appspot.com/random_joke")
     .then((response) => response.json())

     .then((data) =>{
        console.log(data.setup)
        joke.textContent = `${data.setup} 😂 ${data.punchline}`
        joke.style.color = "red";
     })

     .catch((error) =>{
         joke.textContent = "Sorry! Jokes coukdn't load..."; 
     })
});