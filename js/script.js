let displayJoke = document.querySelector("p");

async function fetchJoke() { 
    try {
        const results = await fetch(`https://api.chucknorris.io/jokes/random`);
        const data = await results.json();
        displayJoke.textContent = data.value;
    }
    catch (error) {
        displayJoke.textContent = "Error fetching joke as Chuck Norris is currently busy."
    }
    
  } 
  fetchJoke();