// Create a new XHR object
var xhr = new XMLHttpRequest();

// Define the API endpoint URL
var apiUrl = "YOUR_API_ENDPOINT_URL_HERE";

// Configure the XHR request
xhr.open("GET", apiUrl, true);

// Define a callback function to handle the response
xhr.onload = function () {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);

    // Extract the relevant information
    var countryInfo = response.countryInfo;

    // Print the details
    console.log("Country name: " + countryInfo.name);
    console.log("Currency: " + countryInfo.currency.name + " - " + countryInfo.currency.symbol);
    console.log("Capital: " + countryInfo.capital);
    console.log("Region: " + countryInfo.region);
    console.log("Language: " + countryInfo.languages.join(", "));
    console.log("Population: " + countryInfo.population);
    console.log("Country Flag image url: " + countryInfo.flag);
  } else {
    console.error("Request failed. Status: " + xhr.status);
  }
};

// Send the XHR request
xhr.send();
