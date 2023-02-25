
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9347cfc124msh0655d81c2a1d5fcp1593b2jsn591a6a353194',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getweather1 = (city)=>{
	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
	.then(response => response.json())
	.then(response => {
				
		console.log(response)
	
		
		temp1.innerHTML  = response.temp
		feels_like1.innerHTML  = response.feels_like
		humidity1.innerHTML  = response.humidity
		min_temp1.innerHTML  = response.min_temp 
		max_temp1.innerHTML  = response.max_temp 
		wind_speed1.innerHTML  = response.wind_speed
		wind_degrees1.innerHTML  = response.wind_degrees
		
		
	})
	.catch(err => console.error(err));
	
}
getweather1("Bangalore")

const getweather2 = (city)=>{
	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Toronto', options)
	.then(response => response.json())
	.then(response => {
				
		console.log(response)
	
		
		temp2.innerHTML  = response.temp
		feels_like2.innerHTML  = response.feels_like
		humidity2.innerHTML  = response.humidity
		min_temp2.innerHTML  = response.min_temp 
		max_temp2.innerHTML  = response.max_temp 
		wind_speed2.innerHTML  = response.wind_speed
		wind_degrees2.innerHTML  = response.wind_degrees
		
		
	})
	.catch(err => console.error(err));
	
}
getweather2("Toronto")

const getweather3 = (city)=>{
	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Qatar', options)
	.then(response => response.json())
	.then(response => {
				
		console.log(response)
	
		
		temp3.innerHTML  = response.temp
		feels_like3.innerHTML  = response.feels_like
		humidity3.innerHTML  = response.humidity
		min_temp3.innerHTML  = response.min_temp 
		max_temp3.innerHTML  = response.max_temp 
		wind_speed3.innerHTML  = response.wind_speed
		wind_degrees3.innerHTML  = response.wind_degrees
		
		
	})
	.catch(err => console.error(err));
	
}
getweather3("Qatar")

const getweather4 = (city)=>{
	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then(response => {
				
		console.log(response)
	
		
		temp4.innerHTML  = response.temp
		feels_like4.innerHTML  = response.feels_like
		humidity4.innerHTML  = response.humidity
		min_temp4.innerHTML  = response.min_temp 
		max_temp4.innerHTML  = response.max_temp 
		wind_speed4.innerHTML  = response.wind_speed
		wind_degrees4.innerHTML  = response.wind_degrees
		
		
	})
	.catch(err => console.error(err));
	
}
getweather4("Mumbai")

const getweather5 = (city)=>{
	
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
	.then(response => response.json())
	.then(response => {
				
		console.log(response)
	
		
		temp5.innerHTML  = response.temp
		feels_like5.innerHTML  = response.feels_like
		humidity5.innerHTML  = response.humidity
		min_temp5.innerHTML  = response.min_temp 
		max_temp5.innerHTML  = response.max_temp 
		wind_speed5.innerHTML  = response.wind_speed
		wind_degrees5.innerHTML  = response.wind_degrees
		
		
	})
	.catch(err => console.error(err));
	
}
getweather5("Paris")

const getweather = (city)=>{

	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then(response => {
				
		console.log(response)
	
		humid_2.innerHTML  = response.humidity
		temp_2.innerHTML  = response.temp
		wins.innerHTML  = response.wind_speed
		temp.innerHTML  = response.temp
		feels_like.innerHTML  = response.feels_like
		humidity.innerHTML  = response.humidity
		min_temp.innerHTML  = response.min_temp 
		max_temp.innerHTML  = response.max_temp 
		wind_speed.innerHTML  = response.wind_speed
		wind_degrees.innerHTML  = response.wind_degrees
		sunset.innerHTML  = response.sunset 
		sunrise.innerHTML  = response.sunrise  
		
	})
	.catch(err => console.error(err));
	
}
submit.addEventListener("click" ,(e)=>{

	e.preventDefault()
	getweather(city.value)
})

getweather("Patna")



