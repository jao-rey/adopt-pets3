async function start() {
   const weatherPromise = await fetch("https://api.weather.gov/gridpoints/LOX/155,42/forecast")
   const weatherData = await weatherPromise.json()
   const ourTemperature = weatherData.properties.periods[0].temperature
   document.querySelector("#temperature-output").textContent = ourTemperature
   // console.log(ourTemperature)
}
start()

async function start() {
   const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
   const petsData = await petsPromise.json()
   petsData.forEach(pet => {   // This will loop to an array with elements made of objects.
      console.log(pet.species)
      // console.log("hello!")
   });
}
start()



