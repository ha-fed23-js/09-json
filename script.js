const userInput = document.querySelector('#user-input')
const colorInput = document.querySelector('#color-input')
const saveButton = document.querySelector('#save-button')
const key = 'favourite-color'

let json = localStorage.getItem(key)
console.log('Data from localStorage: ', json);
try {
	let object = JSON.parse(json)  // { user, color }
	userInput.value = object.user
	colorInput.value = object.color
} catch {
	console.log('Nåt gick fel. Försök spara igen.');
	// TODO: lägg till HTML-element som talar om för användaren vad man ska göra för att det ska bli rätt
}

saveButton.addEventListener('click', () => {
	let user = userInput.value
	let color = colorInput.value
	let data = {
		user: user,
		color: color
	}

	// ()  <- anropa funktion
	// []  <- array/lista: flera värden av samma datatyp
	// {}  <- objekt: olika saker som hör ihop
	
	let json = JSON.stringify(data)
	
	localStorage.setItem(key, json)
})
