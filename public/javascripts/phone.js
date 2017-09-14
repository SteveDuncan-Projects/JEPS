$(document).ready(function(){
	// when any phone type is selected, hide inputs for the other types
	$("#phone").change(function () {			
			phoneType = $(this).val();

			$(".phone").addClass("none");
			
			$('#' + phoneType).removeClass('none');

	});
});


