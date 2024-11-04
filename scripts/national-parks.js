"use strict";

const nationalParkArrayTBody = document.querySelector("#nationalParkArrayTBody");
const locationFilter = document.querySelector("#locationFilter");
const typeFilter = document.querySelector("#typeFilter");
const filterLocationRadio = document.querySelector("#filterlocationRadio");
const filterParkTypeRadio = document.querySelector("#filterParkTypeRadio");

function buildTable(data, tableBody) {
  tableBody.innerHTML = "";

  data.forEach((nationalPark) => {
    let tr = tableBody.insertRow();

    let td1 = tr.insertCell();
    td1.innerText = nationalPark.LocationID;

    let td2 = tr.insertCell();
    td2.innerText = nationalPark.LocationName;

    let td3 = tr.insertCell();
    td3.innerText = nationalPark.Address || "N/A";

    let td4 = tr.insertCell();
    td4.innerText = nationalPark.City;

    let td5 = tr.insertCell();
    td5.innerText = nationalPark.State;

    let td6 = tr.insertCell();
    td6.innerText = nationalPark.ZipCode || "N/A";

    let td7 = tr.insertCell();
    td7.innerText = nationalPark.Phone || "N/A";

    let td8 = tr.insertCell();
    td8.innerText = nationalPark.Fax || "N/A";

    let td9 = tr.insertCell();
    td9.innerText = nationalPark.Latitude;

    let td10 = tr.insertCell();
    td10.innerText = nationalPark.Longitude;

    let td11 = tr.insertCell();
    td11.innerText = nationalPark.Location;
  });
}

function populateDropdown(data, dropdown) {
  const types = [...new Set(data.map((nationalPark) => nationalPark.State))];
  dropdown.innerHTML = '<option value="All">All</option>';
  types.forEach((type) => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    dropdown.appendChild(option);
  });
}

function populateTypeDropdown() {
  typeFilter.innerHTML = '<option value="All">All</option>';
  parkTypesArray.forEach(type => {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
  typeFilter.style.display = 'inline-block';
}

function filterTable(data, tableBody, filter) {

  if (filterLocationRadio.checked){
    const filteredData = filter === "All" ? data : data.filter((nationalPark) => nationalPark.State === filter);
  buildTable(filteredData, tableBody);

  } else {
    console.log("hekll")
    // const filteredData = filter === "All" ? data : data.filter((nationalPark) =>  nationalPark.LocationName.includes(filter));
    // console.log(filteredData)
    // buildTable(filteredData, tableBody);
  }
 
}


populateDropdown(nationalParksArray, locationFilter);
buildTable(nationalParksArray, nationalParkArrayTBody);

filterLocationRadio.addEventListener("change", () => {
  if (filterLocationRadio.checked) {
    typeFilter.style.display = 'none';
    locationFilter.style.display = 'inline-block';
  }
});

filterParkTypeRadio.addEventListener("change", () => {
  if (filterParkTypeRadio.checked) {
    locationFilter.style.display = 'none'; 
    populateTypeDropdown();
  }
});

locationFilter.addEventListener("change", () => {
  filterTable(nationalParksArray, nationalParkArrayTBody, locationFilter.value);
});

