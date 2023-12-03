const clickerButton = document.getElementById("clicker");

clickerButton.addEventListener("click", function () {
  fetchData();
});
12
async function fetchData() {
  const response = await fetch("https://api.adviceslip.com/advice");

  const data = await response.json();

  const quotes = data.slip.advice;

  document.getElementById("quote").innerHTML = quotes;
  console.log(quotes);

  const id = data.slip.id;
  document.getElementById("number").innerHTML = id;
  console.log(id);
}
