$(document).ready(function() {
	// declare functions
	AddPet();
	DelPets();
});

// declaring counter outside of function
var petCount = 0;

function AddPet() {
	// call from tab click or button click
  $('.addPet').add('#hostFamNav a[href="#petsInfo"').click(function() {

	// copy input row from hidden div 
  	clone = $('.pettemplate').clone(true);

  	// increment name and id fields 
    clone.find(':input').attr('id', function(i, val) {
         return 'pets[' + petCount + '][' + val + ']';
    });
    clone.find(':input').attr('name', function(i, val) {
         return 'pets[' + petCount + '][' + val + ']';
    });


    // append clone to div and remove template & hidden classes
    clone.appendTo('.add-row-pet');
    $("div.add-row-pet > div").removeClass('pettemplate none');
    // add class to div of row + incremented number
	$("div.add-row-pet > div:last-child").addClass('row' + petCount);
    petCount++;
    return petCount;
  });
}

function DelPets() {
	// Find and remove selected table rows
	$(".deletePet").click(function(){
		var a = this.name;
		// get the value for this div and its elements
		var index = a.substring(a.indexOf("[")+1,a.indexOf("]"));
		//  delete the div
		$('.row'+index).remove();	
		
	});
}