const headers = { 'User-Agent': 'https://github.com/Danareynolds-coding, danareynolds77vj@gmail.com' };

let button = document.querySelector('#fetchWeatherDataBtn');
button.addEventListener("click", pasteDataToPage);
let weatherBox = document.querySelector('weather-box');

 async function fetchTemperature(){
    let url = `https://api.weather.gov/gridpoints/AKQ/30,88/forecast?units=us`
     
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            let forecastTime;
         forecastTime = data.properties.periods;
        forecastTime.forEach(period =>{
        const forecastTime = document.createElement("div");
        if (period.isDaytime) {  
        forecastTime.innerHTML = `${period.temperature}F(Max)`; 
    } else {
         forecastTime.innerHTML = `${period.temperature}F(Min)`;     
     }
  
    })
 })
    .catch(error => {
    console.error("Error fetching forecast:", error);
  });
 }
async function pasteDataToPage(){
    await fetchTemperature();
    weatherBox.innerHTML = ""; 
    let paragraph = document.createElement("p");
     paragraph.innerText = 
     weatherBox.append(paragraph);

}
    // 
// async function fetchWeather() {
//         const metadataUrl = `https://api.weather.gov/points/30,88/forecast?units=us`;
//         const forecastResponse = await fetch(forecastUrl, { headers: { 'User-Agent': userAgent } });
//         async function getMinMaxTemperatures(latitude, longitude) {
//     try {
//         const pointsUrl = `https://api.weather.gov/points/${latitude},${longitude}`;
//         const pointsResponse = await fetch(pointsUrl);
//         const pointsData = await pointsResponse.json();

//         if (!pointsData || !pointsData.properties || !pointsData.properties.forecast) {
//             console.error("Could not retrieve gridpoint information or forecast URL.");
//             return;
//         }

//         const forecastUrl = pointsData.properties.forecast;

//         const forecastResponse = await fetch(forecastUrl);
//         const forecastData = await forecastResponse.json();

//         if (!forecastData || !forecastData.properties || !forecastData.properties.periods) {
//             console.error("Could not retrieve forecast data.");
//             return;
//         }

//         const periods = forecastData.properties.periods;
//         const dailyTemperatures = {};

//         periods.forEach(period => {
//             const date = new Date(period.startTime).toISOString().split('T')[0];
//             const temperature = period.temperature;

//             if (!dailyTemperatures[date]) {
//                 dailyTemperatures[date] = { minTemp: Infinity, maxTemp: -Infinity };
//             }
            
//             dailyTemperatures[date].minTemp = Math.min(dailyTemperatures[date].minTemp, temperature);
//             dailyTemperatures[date].maxTemp = Math.max(dailyTemperatures[date].maxTemp, temperature);
//         });

//         console.log("Daily Minimum and Maximum Temperatures:");
//         for (const date in dailyTemperatures) {
//             console.log(`${date}: Min Temp = ${dailyTemperatures[date].minTemp}°F, Max Temp = ${dailyTemperatures[date].maxTemp}°F`);
//         }

//     } catch (error) {
//         console.error("Error fetching weather data:", error);
//     }
//   }
// }
// fetchWeather();
        