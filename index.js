const jokeEl = document.getElementById('joke');
const getJoke = document.getElementById('get-joke');

getJoke.addEventListener('click', generateJoke)

async function generateJoke() {
  //call api
  const jokeRes = await fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  })

  const joke = await jokeRes.json();
  console.log(joke);

  //set new joke
  jokeEl.innerHTML = joke.joke;
}