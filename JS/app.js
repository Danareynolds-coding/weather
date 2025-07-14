const fetchWeatherBtn = document.getElementById('fetchWeatherBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const weatherContainer = document.getElementById('weather-container');

const API_KEY = 'User-Agent:(https://github.com/Danareynolds-coding/Weather-Forecast, danareynolds77vj@gmail.com)';    
const url = `https://api.weather.gov/gridpoints/{30},{88}/forecast?units=us`;
fetchWeatherBtn.addEventListener('click', fetchWeatherWithLoading() );

    
function fetchWeatherWithLoading() {
    const latitude = 30;
    const longitude = 88;
    const url = `https://api.weather.gov/gridpoints/AKQ/30,88/forecast?units=us`;
    loadingSpinner.style.display = 'block';
  fetch(url)
      .then(response => {
        if (!response.ok) {
        throw new Error('Weather data not available')
      }
      return response.json()
  })
      .then(data => {
         console.log(data);
        return new Promise(resolve => {
        setTimeout(() => resolve(data), 2000);
      });
      })
      .then(data => {
       loadingSpinner.style.display = 'none';

        const periods = data.properties.periods;
        const daily = periods.filter(p=>p.isDaytime).slice(0,7);
        weatherContainer.innerHTML="";
        daily.forEach(day => {
        const dayDiv = document.createElement("div");
        dayDiv.className = "day";
        dayDiv.innerHTML = `
            <h5><strong>${day.name}</strong><br>
           ${day.detailedForecast}
           </h5>
           <p>Temperature: ${day.temperature}
           <p><img src="${day.icon}" alt="Weather icon showing ${day.shortForecast} for ${day.name}. The forecast is: ${day.detailedForecast}. Temperature is ${day.temperature} degrees." />
        `;
        weatherContainer.appendChild(dayDiv);
    });
  })
}

