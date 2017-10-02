$(document).ready(function() {
	// declare functions
	checkBoxes();
});


function checkBoxes() {

	// add listener to checkboxes

	// $('input[type=checkbox]').on('change', function() {   		
	// 	console.log($(this).val() + ' is checked: ' + $(this).prop('checked'));
	// });

	$('#accomBoxes input[type=checkbox]').each(function() {   		
		console.log($(this).val() + ' is checked: ' + $(this).prop('checked'));
	});


	// this will detect if checkbox is checked or not, and set the value to the 
	// hidden element after the checkbox, so both values can be posted to database
	$('input[type="checkbox"]').on('change', function(e){
        if($(this).prop('checked'))
        {
            $(this).next().val(1);
        } else {
            $(this).next().val(0);
        }
	});

}	

