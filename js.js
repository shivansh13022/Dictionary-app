// Selecting the button using its class
const button = document.querySelector(".button");

function display() {
  const word = document.getElementById("word").value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Display the first meaning of the first definition, if available
      if (
        data[0] &&
        data[0].meanings[0] &&
        data[0].meanings[0].definitions[0]
      ) {
        alert(data[0].meanings[0].definitions[0].definition);
        // Alternatively, you might want to display this information in the HTML rather than an alert
        // e.g., document.getElementById('definition').innerText = data[0].meanings[0].definitions[0].definition;
      }
    })
    .catch((error) => {
      alert("no words found");
      console.error("There was a problem with the fetch operation:", error);
    });
}

button.addEventListener("click", display);
