let x = 'Cairo';
const date = new Date();
let fullDate = date.getDate()
let dayNum = date.getDay()
let monthNum = date.getMonth()

weather()

$('#search-inp').keyup(function () {
    x = $('#search-inp').val()
    if (x.length >= 3) {
        weather()
    }

})

async function weather() {
    const direction = ''
    const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=44c81ca799fa41bcb79113756230808&q=${x}&days=3`);
    const weatherData = await response.json();
    if (weatherData.code !== 1006) {
        showData(weatherData)
    } else {
    }
}

function getMonth(monthNum) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    let month = months[monthNum]
    return month
}

function getDay(dayNum) {
    const days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday '
    ]

    if (dayNum > 6) {
        dayNum -= 7
    }

    let day = days[dayNum]
    return day
}

function showData(weatherData) {
    $('#weather-container').html(`<div class="lg-shadow col-lg-4 today">
<div class="row header p-2">
    <div class="col-6">
        <p class="m-0">${getDay(dayNum)}</p>
    </div>
    <div class="col-6 text-end">
        <p class="m-0">${fullDate}${getMonth(monthNum)}</p>
    </div>
</div>
<div class="body py-4 px-2">
    <div class="row">
        <p>${weatherData.location.name}</p>
    </div>
    <div class="d-flex flex-wrap">
        <div>
            <h2 class="position-relative">${weatherData.current.temp_c}<span class="degree">o</span>C</h2>
        </div>
        <div>
            <img src="https:${weatherData.current.condition.icon}" alt="" width="90">
        </div>
    </div>
    <div class="weather-condition my-4">
        <p>${weatherData.current.condition.text}</p>
    </div>
    <div class="wind-data">
        <span><img src="images/icon-umberella.png" alt="">20%</span>
        <span><img src="images/icon-wind.png" alt="">18km/h</span>
        <span><img src="images/icon-compass.png" alt="">East</span>
    </div>
</div>
</div>
<div class="lg-shadow col-lg-4 tomorrow">
<div class="row text-center header tomorrow-header p-2">
    <p class="m-0">${getDay(dayNum + 1)}</p>
</div>
<div class="body py-4 px-2">
    <div class="row">
        <div class=" col-4 mx-auto">
            <div class="d-flex justify-content-center">
                <img src="https:${weatherData.forecast.forecastday[1].day.condition.icon}" alt="" width="90">
            </div>
        </div>
    </div>
    <div class="row text-center">
        <h2 class="position-relative max-degree">${weatherData.forecast.forecastday[1].day.maxtemp_c}<span class="degree">o</span>C</h2>
        <h2 class="position-relative min-degree">${weatherData.forecast.forecastday[1].day.mintemp_c}<span class="degree">o</span>C</h2>
    </div>
    <div class="weather-condition my-4 text-center">
        <p>${weatherData.forecast.forecastday[1].day.condition.text}</p>
    </div>
</div>
</div>
<div class="lg-shadow col-lg-4 after-tomorrow">
<div class="row text-center header after-tomorrow-header p-2">
    <p class="m-0">${getDay(dayNum + 2)}</p>
</div>
<div class="body py-4 px-2">
    <div class="row">
        <div class=" col-4 mx-auto">
            <div class="d-flex justify-content-center">
                <img src="https:${weatherData.forecast.forecastday[2].day.condition.icon}" alt="" width="90">
            </div>
        </div>
    </div>
    <div class="row text-center">
        <h2 class="position-relative max-degree">${weatherData.forecast.forecastday[2].day.maxtemp_c}<span class="degree">o</span>C</h2>
        <h2 class="position-relative min-degree">${weatherData.forecast.forecastday[2].day.mintemp_c}<span class="degree">o</span>C</h2>
    </div>
    <div class="weather-condition my-4 text-center">
        <p>${weatherData.forecast.forecastday[2].day.condition.text}</p>
    </div>
</div>
</div>`)

}
