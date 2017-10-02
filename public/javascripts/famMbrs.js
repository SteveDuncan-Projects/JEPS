$(document).ready(function() {
	// declare functions
  AddFamMbr();
  DelFamMbr();
});

// declaring counter outside of function
var mbrCount = 0;

function AddFamMbr() {
	// call from tab click or button click
  $('.addMbr').click(function() {

	// copy input row from hidden div 
  	clone = $('.famMbrTemplate').clone(true);

  	// increment name and id fields 
    clone.find(':input').attr('id', function(i, val) {
         return 'famMbrs[' + mbrCount + '][' + val + ']';
    });
    clone.find(':input').attr('name', function(i, val) {
         return 'famMbrs[' + mbrCount + '][' + val + ']';
    });

    // append clone to div and remove template & hidden classes
    clone.appendTo('.add-row-fam');
    $("div.add-row-fam > div").removeClass('famMbrTemplate none');

    $('#famForm > h2 ').show();
    // TODO: make the h2 show only if cloned element exists
    
    // add class to div of row + incremented number
    $("div.add-row-fam > div:last-child").addClass('row' + mbrCount).addClass('rowSmall');
    // add class to make inputs smaller
    $('.add-row-fam .form-control').addClass('form-control-sm');
    mbrCount++;
    return mbrCount;
  });

  $('#btnMbrDone').on('click', function() {
    location.href = '#accomodations';
  });
}



function DelFamMbr() {
	// Find and remove selected table rows
	$(".deleteMbr").click(function(){
		var a = this.name;
		// get the value for this div and its elements
		var index = a.substring(a.indexOf("[")+1,a.indexOf("]"));
		//  delete the div
		$('.row'+index).remove();	
		
	});
}