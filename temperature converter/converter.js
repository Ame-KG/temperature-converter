const celsius = document.querySelector('.celsius')
const submit = document.querySelector('.submit')
const fahrenheit = document.querySelector('.fahr')
const kelvin = document.querySelector('.kelvin')
const h4 = document.querySelectorAll('heat')


submit.addEventListener('click', function(){
	if (celsius.value == '') {
		fahrenheit.innerHTML = 0
		kelvin.innerHTML = 0
	}

	else {
		fahrenheit.innerHTML = Number(celsius.value) * (9/5) + 32;
		kelvin.innerHTML = Number(celsius.value) + 273.15;
	}
})
