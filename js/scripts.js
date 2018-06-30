document.onreadystatechange = function () {
  if (document.readyState === "interactive") {
    fetch('../assets/data/wisdom.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      });
  }
}
