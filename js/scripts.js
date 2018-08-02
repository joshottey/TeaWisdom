document.onreadystatechange = function () {
  if (document.readyState === "interactive") {

    let quotes;
    let myWisdom = document.querySelector("#quote");

    fetch('https://raw.githubusercontent.com/joshottey/TeaWisdom/master/assets/data/wisdom.json')
      .then(response => response.json())
      .then(data => {
        quotes = data.yogi.wisdom;
      });

    // tea leaf click event listener
    document.querySelector('#new-quote').addEventListener("click", function() {
      let choice = Math.floor(Math.random() * (quotes.length));
      myWisdom.innerHTML = quotes[choice];
    });

    // tweet event listener
    document.querySelector('#tweet-quote').addEventListener("click", function() {
      window.open("https://twitter.com/intent/tweet?text=" + myWisdom.innerHTML + " https://teawisdom.me/;hashtags=TeaWisdom");
    });
  }
}
