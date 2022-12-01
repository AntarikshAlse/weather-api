const displayContainer = document.getElementById("weatherData");
const locField = document.getElementById("locate");
const accessField = document.getElementById("accessKey");

const fetchData = async (e) => {
  e.preventDefault();
  const accessKey = document.getElementById("accessKey").value;
  const fallbackKey = accessKey ? accessKey : "WQGBZXUWWNHEU887XUKWXGWE7";
  const location = document.getElementById("locate").value;
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&include=current&key=${fallbackKey}&contentType=json`;
  let response = "";
  try {
    response = await fetch(url);
    const data = await response.json();
    console.log("data", data);
    displayContainer.innerHTML = `
    <h1 class="card-title ">Weather Data</h1>
    <div class="container p-0" >
      <div class="row  p-2">
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Location :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.address}</h6>
        </div>
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">TimeZone :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.timezone}</h6>
        </div>
      </div>
      <div class="row  p-2">
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Latitude :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.latitude}</h6>
        </div>
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Longitude :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.longitude}</h6>
        </div>
      </div>
      <div class="row  p-2">
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">WindSpeed :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.currentConditions.windspeed} Km/s</h6>
        </div>
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Preassure :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.currentConditions.pressure} Pa </h6>
        </div>
      </div>
      <div class="row  p-2">
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Humidity :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.currentConditions.humidity}</h6>
        </div>
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Wind Direction :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.currentConditions.winddir}</h6>
        </div>
      </div>
      <div class="row  p-2">
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">UV Index :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.currentConditions.uvindex}</h6>
        </div>
        <div class="col d-flex ">
          <h6 class="card-subtitle my-2 text-muted">Feels Like :</h6>
          &nbsp;
          <h6 class="card-subtitle my-2">${data.currentConditions.feelslike} °C</h6>
        </div>
      </div>
    </div>
    `;
  } catch (err) {
    if (!response.ok) {
      displayContainer.innerHTML = `
      <div class="container ">
      <h4 class="card-title  text-danger">No Result Found</h4>
      <span class="text-warning">${err}</span>
      </div>
      `;
      console.log("data", data);
      return false;
    }
  }
};
