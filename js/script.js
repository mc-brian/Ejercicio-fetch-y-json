const DATA_URL = "json/data.json";

const container = document.getElementById("container");

function showData(dataArray) {
  for (const item of dataArray.students) {
    container.innerHTML += `<p> ${item.name} ${item.lastname} </p>`;
  }
}

fetch(DATA_URL)
  .then((respuesta) => respuesta.json())
  .then((respuesta) => {
    showData(respuesta);
  });
