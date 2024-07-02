const button = document.getElementById("button");
const quote = document.getElementById("quote");

const generateQuote = () => {
    fetch("https://api.kanye.rest/")
    .then(response => response.json())
    .then(data => (quote.innerHTML = data.quote));
}


button.addEventListener("click", generateQuote);

