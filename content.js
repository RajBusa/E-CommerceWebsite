let mainContainer = document.getElementById("mainContainer");
let containerClothing = document.getElementById("containerClothing");
let containerAccessories = document.getElementById("containerAccessories");

fetch('./data.json')
  .then(response => response.json())
  .then(data => {
    // Store the JSON data in a variable
    const jsonData = data;
    for (let i = 0; i < jsonData.length; i++) {
      containerAccessories.appendChild(
        dynamicClothingSection(jsonData[i])
      );
    }
  })
  .catch(error => {
    console.log('Error:', error);
  });

function dynamicClothingSection(ob) {
  let boxDiv = document.createElement("div");
  boxDiv.id = "box";

  let boxLink = document.createElement("a");

  let imgTag = document.createElement("img");
  imgTag.src = ob.photo;

  let detailsDiv = document.createElement("div");
  detailsDiv.id = "details";

  let h3 = document.createElement("h3");
  let h3Text = document.createTextNode(ob.name);
  h3.appendChild(h3Text);

  let h4 = document.createElement("h4");
  let h4Text = document.createTextNode(ob.description);
  h4.appendChild(h4Text);

  let buttonDiv = document.createElement('div')
  buttonDiv.id = 'button'

  let buttonTag = document.createElement('button')
  buttonTag.addEventListener("click", function () {
    window.location.href = ob.affiliatelink;
  });
  buttonDiv.appendChild(buttonTag)
  buttonText = document.createTextNode('Purchase')

  boxDiv.appendChild(boxLink);
  boxLink.appendChild(imgTag);
  boxLink.appendChild(detailsDiv);
  detailsDiv.appendChild(h3);
  detailsDiv.appendChild(h4);
  detailsDiv.appendChild(buttonTag);
  buttonTag.appendChild(buttonText);

  return boxDiv;
}