const newColor = document.getElementById("new-color");
let colorArray = [];

newColor.addEventListener("submit", getColor);

function getColor(e) {
  e.preventDefault();
  const hexColor = document.querySelector("#color-picker").value.substring(1);
  const colorAttribute = document.querySelector("#color-attribute").value;
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${colorAttribute}`
  )
    .then((res) => res.json())
    .then((color) => {
      colorArray = color.colors;
      renderColor();
    });
}

function renderColor() {
  let html = "";
  colorArray.forEach((color) => {
    console.log(color.hex.value);
    html += `
        <span class="color" style="background-color:${color.hex.value}"></span>
        <span class="bottom-text">${color.hex.value}</span>
        `;
    document.getElementById("grid-container").innerHTML = html;
  });
}
