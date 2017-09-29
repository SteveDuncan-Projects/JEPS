$(document).ready(function(){
	
	$(".phoneSelector").change(function () {
		phoneType = $(this).val(); //get type: mobile, home or work
		phoneID = $(this).attr('id');

		console.log('This: ' + $(this));
	
		// console.log("phone type changed: " + phoneType);
		// console.log('phone id: ' + phoneID)

		// get value between brackets for number of cloned member
		var matches = phoneID.match(/\[(.*?)\]/);
		if (matches) {
			var mbrCount = matches[1];	
		}
		console.log('mbrCount: ' + mbrCount);

		// when any phone type is selected, hide inputs for the other types
		$('#famMbrs\\[' + mbrCount + '\\]\\[mobile\\]').addClass('none');
		$('#famMbrs\\[' + mbrCount + '\\]\\[home\\]').addClass('none');
		$('#famMbrs\\[' + mbrCount + '\\]\\[work\\]').addClass('none');

		// ...but show the phone field selected from dropdown
		$('#famMbrs\\[' + mbrCount + '\\]\\[' + phoneType + '\\]').removeClass('none');
	});
});


