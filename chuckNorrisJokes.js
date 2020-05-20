var joke = document.getElementById("jokePlaceholder");
var nextBtn = document.getElementById("nextBtn");

function onBtnChange() {
    nextBtn.innerHTML = "Next Joke Pls!";
}

async function getData() {
    try {
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        joke.textContent = data.value;
        console.log(data.value);
    } catch(error) {
        console.log(error, " Something went wrong!");
    }
    
}

nextBtn.addEventListener("click", onBtnChange);
