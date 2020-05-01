# day-planner

Day Planner is a third-party API powered weather forecast application that provides the user information about local real-time weather, humidity, wind speed and UV index and five-day weather forecasts. By a user selecting a city, the application accesses the OpenWeatherMap API, retrieves local weather data and stores the last five cities searched for later review.

I designed this application to demonstrate my JQuery proficiency, as well as mastery over the utilization of Bootstrap styling features, including the use of nested rows and columns and cards and demonstrate proficiency of third-party API usage, as this application required the use of three separate calls to the OpenWeatherMap API.

In this project I combined the use of JQuery and Moment.js to create a day planner application that a busy individual could use to enter events that needed to be completed between the business hours of 9am - 5pm.  

I used Moment.js to identify the current day planner date and to make the planner dynamically identify the past, present and future hours of the day, using the colors grey, red, and green that would change based on the time of day.

I used Bootstrap to generate the rows that would hold the hourly time blocks for data entry and JQuery to generate code to allow for dynamic changes to the webpage in place of vanilla Javascript.  

I also utilized local storage to allow the changes to the time blocks to persist upon reloading of the page.

Please see deployed application at https://willv1.github.io/weather-app/index.html.
