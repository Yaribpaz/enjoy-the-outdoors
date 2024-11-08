"use strict";

const mountainsDropdown = document.querySelector("#mountainsDropdown");
const detailsButton = document.querySelector("#detailsButton")
const mountainDetails = document.querySelector("#mountainDetails");
const mountainImage = document.querySelector("#mountainImage");
const cardTitleHeading = document.querySelector("#cardTitleHeading");
const abbreviationParagraph = document.querySelector("#abbreviationParagraph");
const mountainDetailsDiv =document.querySelector("#mountainDetailsDiv")



function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    option.value = mountain.name
    mountainsDropdown.appendChild(option)
  }
}

loadMountains();

function showMountainDetails() {
  const mountainName = mountainsDropdown.value;
  if (mountainName) {
    mountainDetailsDiv.style.display = "block";
  } else {
    mountainDetailsDiv.style.display ="none";
  }

  for(const mountain of mountainsArray) {
    if (mountain.name === mountainName){
      mountainImage.src = `./images/${mountain.img}`;
      cardTitleHeading.innerText = mountain.name;
      abbreviationParagraph.innerText = mountain.desc;
      elevationHeader.innerText =`Elevation: ${mountain.elevation}`;

    }
  }

}




