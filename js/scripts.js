document.onreadystatechange = function () {
  if (document.readyState === "interactive") {

    let quotes;

    fetch('https://raw.githubusercontent.com/joshottey/TeaWisdom/master/assets/data/wisdom.json')
      .then(response => response.json())
      .then(data => {
        quotes = data.yogi.wisdom;
      });

    function newQuote() {
      let choice = Math.floor(Math.random() * (quotes.length));
      document.querySelector("#quote").innerHTML = quotes[choice];
    }

    document.querySelector('#new-quote').addEventListener("click", newQuote);
  }
}
