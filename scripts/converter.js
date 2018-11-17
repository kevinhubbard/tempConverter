$(document).ready(function() {
	//adds label for current unit
	$('#fahrenheit').change(function(e) {
		e.preventDefault();
		$('#test').empty();
		$('#test').append('&deg; Fahrenheit');
	});
	//adds label for current unit
	$('#celsius').change(function(e) {
		e.preventDefault();
		$('#test').empty();
		$('#test').append('&deg; Celsius');
	});



	//form checks what unit to convert
	$('form').on('submit', function(e) {
		e.preventDefault();
		//condition to check whether celsius or fahrenheit has been selected
		if ($('#fahrenheit').prop('checked')) {
			calculateCelsius();
		} else if ($('#celsius').prop('checked')) {
			calculateFahrenheit();
		} else {
			console.log('something went wrong');
		}

	});


	function calculateCelsius() {
		//clears div
		$('#output').empty();
		$('#unit').empty();
		//gets user input
		var input = $('#degree').val();
		//parses user input and does celsius conversion
		var celsius = (parseInt(input) - 32) * (5 / 9);
		//append output to div
		$('#unit').append('&deg;' + 'C');
		$('#output').append(celsius.toFixed(1));
	}

	function calculateFahrenheit() {
		//clears div
		$('#output').empty();
		$('#unit').empty();
		//gets user input
		var input = $('#degree').val();
		//parses user input and does fahrenheit conversion
		var fahrenheit = (parseInt(input) * (9 / 5)) + 32;
		//append output to div
		$('#unit').append('&deg;' + 'F');
		$('#output').append(fahrenheit);
	}


});