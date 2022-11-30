const displayContainer = document.getElementById("weatherData");
const locField = document.getElementById("locate");
const accessField = document.getElementById("accessKey");
  
  const fetchData = async (e) => {
    e.preventDefault();
      const accessKey = document.getElementById('accessKey').value;
      const fallbackKey = accessKey ? accessKey :"6695bd379ac131eb534c785d94436be9";
      const location = document.getElementById('locate').value;
      const url = `http://api.weatherstack.com/current?access_key=${fallbackKey}&query=${location}`;
    const response = await fetch(url,{
      
        method: 'GET',
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
    });
  const data = await response.json();
  if(data.error){
    displayContainer.innerHTML=`
    <div class="container">
    <h4 class="card-title text-center text-danger">No Result Found</h4>
    </div>
    `;
    return false;
  }
  displayContainer.innerHTML=`
  <h4 class="card-title text-center">Weather Data</h4>
  <div class="container" >
    <div class="row  p-2">
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Location :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.location.name}</h6>
      </div>
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">TimeZone :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.location.timezone_id}</h6>
      </div>
    </div>
    <div class="row  p-2">
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Latitude :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.location.lat}</h6>
      </div>
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Longitude :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.location.lon}</h6>
      </div>
    </div>
    <div class="row  p-2">
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">WindSpeed :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.current.wind_speed}</h6>
      </div>
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Preassure :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.current.pressure} Pa </h6>
      </div>
    </div>
    <div class="row  p-2">
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Humidity :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.current.humidity}</h6>
      </div>
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Wind Direction :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.current.wind_dir}</h6>
      </div>
    </div>
    <div class="row  p-2">
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">UV Index :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.current.uv_index}</h6>
      </div>
      <div class="col d-flex justify-content-center">
        <h6 class="card-subtitle my-2 text-muted">Feels Like :</h6>
        &nbsp;
        <h6 class="card-subtitle my-2">${data.current.feelslike} °C</h6>
      </div>
    </div>
  </div>
  `
  };