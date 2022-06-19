// destructuring 
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}) {
    console.log(forecast.date)
    console.log(forecast.weather)
}

logWeather(todaysWeather)

// how to desctructure the function above 
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather}: {date: Date, weather: string}) {
    console.log(date)
    console.log(weather)
}

logWeather(todaysWeather)