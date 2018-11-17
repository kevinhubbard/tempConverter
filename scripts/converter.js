$(document).ready(function() {

	$('#fahrenheit').change(function(e) {
		e.preventDefault();
		$('#test').empty();
		$('#test').append('&deg; Fahrenheit');
	});

	$('#celsius').change(function(e) {
		e.preventDefault();
		$('#test').empty();
		$('#test').append('&deg; Celsius');
	});




	$('form').on('submit', function(e){
		e.preventDefault();
		//condition to check whether celsius or fahrenheit has been selected
		if($('#fahrenheit').prop('checked')){
			calculateCelsius();
		} else if ($('#celsius').prop('checked')){
			calculateFahrenheit();
		} else {
			console.log('something went wrong');
		}

	});


function calculateCelsius(){
		$('#output').empty();
		$('#unit').empty();
		var input = $('#degree').val();

		var celsius = (parseInt(input) - 32) * (5/9);
		$('#unit').append('&deg;'+'C');
		$('#output').append(celsius.toFixed(1));		
}

function calculateFahrenheit(){
	$('#output').empty();
	$('#unit').empty();
	var input = $('#degree').val();

	var fahrenheit = (parseInt(input) * (9/5)) + 32;
	$('#unit').append('&deg;'+'F');
	$('#output').append(fahrenheit);
}


});
