
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

  FamMbrsTableState();
  // PetsTableState();


  //  TODO: gray out disabled tabs
  // $("#tabs").tabs({
  //         disabled: [1,2,3]
  //         });

  // enable Next buttons to show tabs
  EnableNext();


  AddFamMember();
  DelFamMember();

  AllowRowEdit();
  
}); // /document.ready   

////////////////////// Functions ///////////////////////////////

function FamMbrsTableState() {
    var rowCount = $('#famMbrsTable tr').length-2;
    if (rowCount===0) {
      $("#famMbrsTable").hide();
    } else {
      $("#famMbrsTable").show();
    }
  }

function EnableNext() {
// make button click event click the corresponding tab
  $("#btn-fam-info").click(function(e) {
    // enable the next tab
    $( "#tabs" ).tabs( "enable", "#familyInfo" );
    // call click event on tab
    $('#hostFamNav a[href="#familyInfo"').click();
    CopyUser();
    e.preventDefault();
  });

  $("#btn-accom").click(function(e) {
    $('#hostFamNav a[href="#accomodations"').click();
    e.preventDefault();
  });

  $("#btn-pets").click(function(e) {
    $('#hostFamNav a[href="#petsInfo"').click();
    e.preventDefault();
  });
} 


function CopyUser() {
  // copy user information from User Info to Family Info tab
  $("#firstNameFam").val($("#firstName").val());
  $("#lastNameFam").val($("#lastName").val());
  $("#prefNameFam").val($("#prefName").val());
  $("#prefNameFam").val($("#prefName").val());
  $("#emailFam").val($("#email").val());
  $("#addressFam").val($("#address").val());
  $("#addressFam_2").val($("#address_2").val());
  $("#cityFam").val($("#city").val());
  $("#stateFam").val($("#state").find(":selected").text());
  $("#zipFam").val($("#zip").val());

  // set this user's role to Main Contact
  $('#relationship').val("mainContact");
}      
function AddFamMember() {
  // dynamically render family members table
  $(".add-row-fam").click(function(){
    var firstName = $("#firstNameFam").val();
    var lastName = $("#lastNameFam").val();
    var prefName = $("#prefName").val();
    var phone = $("#phone").val();
    var gender = $("#gender").find(":selected").text();

    var relationship = $("#relationship").find(":selected").text();
    var age = $("#age").val();
    var email = $("#email").val();
    var occupation = $("#occupation").val();
    var hobbies = $("#hobbies").val();
    var notes = $("#notes").val();

    var markup = "<tr><td><input type='checkbox' name='record'></td><td>" 
    + firstName + "</td><td>" + lastName + "</td><td>" + prefName + "</td><td>" 
    + phone + "</td><td>"+ gender + "</td><td>" + relationship + "</td><td>"
    + age + "</td><td>"+ email + "</td><td>" + occupation + "</td><td>"
    + hobbies + "</td><td>"+ notes + "</td></tr>";
    $("#famMbrsTable tbody").append(markup);

    // clear the form
    $("#firstNameFam, #lastNameFam, #prefNameFam, #phone, #age, #emailFam, #occupation, #hobbies, #notes").val("");
    $("#gender, #relationship").prop("selectedIndex",0);
    FamMbrsTableState();
  });
}

function DelFamMember() {
    // Find and remove selected table rows
  $(".delete-row-fam").click(function(){
    // check each row
    $("#famMbrsTable tbody").find('input[name="record"]').each(function(){
      if($(this).is(":checked")) {
        var currentRow=$(this).closest("tr");
        // get the value of relationship in the 7th cell
        var role=currentRow.find("td:eq(6)").html();
        //don't allow delete main contact
          if(role == "Main Contact"){
            alert("Only the administrator may delete the Main Contact!");
          } else {
            $(this).parents("tr").remove();
          }            
        }
    });
    FamMbrsTableState();
  });
}

function AllowRowEdit() {
  $('#famMbrsTable .edit-row-fam').click(function(){
    $("#famMbrsTable tbody").find('input[name="record"]').each(function(){
      if($(this).is(":checked")) {
        var currentRow=$(this).closest("tr");
        var cells = currentRow.find('td').each(function(cell){
           $(this).attr("contenteditable", true);
           $(this).addClass("red");
        });
      }
    });
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
