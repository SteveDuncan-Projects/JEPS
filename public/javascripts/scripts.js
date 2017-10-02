
$(document).ready(function(){


(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("hostFamilyForm");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());

 
  // enable Next buttons to show tabs
  EnableNext();

 }); // /document.ready   

////////////////////// Functions ///////////////////////////////


function EnableNext() {
// make button click event click the corresponding tab
  $(".btnFamInfo").click(function(e) {
    // enable the next tab
    $( "#tabs" ).tabs( "enable", "#familyInfo" );
    // call click event on tab
    $('#hostFamNav a[href="#familyInfo"').click();
    // CopyUser();
    e.stopPropagation();
    e.preventDefault();
  });

  $(".btn-accom").click(function(e) {
    $('#hostFamNav a[href="#accomodations"').click();
    e.stopPropagation();
    e.preventDefault();
  });

  $(".btn-pets").click(function(e) {
    $('#hostFamNav a[href="#petsInfo"').click();
    e.stopPropagation();
    e.preventDefault();
  });
} 




// TODO
//  
// add validation; only unlock next tab if current tab is valid
// gray out disabled tabs
// add Previous buttons
// on click add row, clear fam form fields and reset form
// phone field dynamic for multiple numbers
// mask phone field for proper format
// don't allow to add row if fields are blank
// only allow one main contact
// x  edit function
//  don't allow delete main contact, unless admin?
