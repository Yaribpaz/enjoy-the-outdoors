# Read Me

## Description

- In this project I buiilt a website that helps users find things to do when researching mountains and National Parks.
- I had to make a national parks search page that contained a dropdown that was filter by location and by park type. Using radio buttons to switch between the filter options
- I had to also make a mountain information page that contained a dropdown with a list of the 48 mountains. When clicking a mountain it would display information about that mountain.

## national-parks.js

- Filter by location

  const filteredData =
  filter === "All" ? data : data.filter((nationalPark) => nationalPark.State === filter);
  buildTable(filteredData, tableBody);

  - If the selected filter is "All", it shows all data.
  - Otherwise, it filters the data array to show only parks that match the selected state (nationalPark.State === filter).
  - It then calls buildTable(filteredData, tableBody) to display the filtered data in the table.

-Filter by park type

    const filteredData =
    filter === "All" ? data : data.filter((nationalPark) => nationalPark.LocationName.includes(filter));
    buildTable(filteredData, tableBody);

- If the "Filter by Park Type" radio button is selected, it filters the data based on whether the park's LocationName includes the selected filter.

      byLocationRadio.addEventListener("change", () => {
       if (byLocationRadio.checked) {
      typeDropdown.style.display = "none";
      locationDropdown.style.display = "inline-block";
      populateDropdown(locationsArray, locationDropdown);

  }
  });


- When the "Filter by Location" radio button is clicked, this hides the park type dropdown (typeDropdown) and displays the location dropdown (locationDropdown).

## Homepage
![homepage with a transparent navbar](images2/Screenshot%202024-11-07%20170410.png)

## National Park 
![National Park page with my table, radio buttons and dropdown](images2/Screenshot%202024-11-07%20170803.png)


## Mountain 
![Mountains page with Mt.Washington being selected.](images2/Screenshot%202024-11-07%20171024.png)
