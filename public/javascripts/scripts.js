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
  PetsTableState();


  //  TODO: gray out disabled tabs
  // $("#tabs").tabs({
  //         disabled: [1,2,3]
  //         });

  // enable Next buttons to show tabs
  EnableNext();

  AddPets();
  DelPets();

  AddFamMember();
  DelFamMember();

  AllowRowEdit();


  // $( "#hostFamilyForm" ).submit(function( req, res ) {
    // e.preventDefault();
    // alert( "Handler for .submit() called." );
    // alert("Form submit: " + req.method);

    // TODO: pass form elements to console to test; then connect to database
    // e.preventDefault();
  // });

  $("#btnHostFamSubmit").on("click", function(){
    // console.log(btnHostFamSubmit)
    // $( "#hostFamilyForm" ).submit();
    console.log("WTF???");
  });
  
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

  function PetsTableState() {
    var rowCount = $('#petsTable tr').length-2;
    if (rowCount===0) {
      $("#petsTable").hide();
    } else {
      $("#petsTable").show();
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

function AddPets() {
   // dynamically render pets table
  $(".add-row-pet").click(function(){
    var petType = $("#petType").val();
    var petLives = $("#petLives").val();
    var petName = $("#petName").val();
    var petNotes = $("#petNotes").val();
    var markup = "<tr><td><input type='checkbox' name='record'></td><td>" 
    + petType + "</td><td>" + petLives + "</td><td>" + petName + "</td><td>" 
    + petNotes + "</td></tr>";
    $("#petsTable tbody").append(markup);

    PetsTableState();

    //clear the form
    $("#petType").prop("selectedIndex",0);
    $("#petLives").prop("selectedIndex",0);
    $("#petName").val("");
    $("#petNotes").val("");
  });
}

function DelPets() {
  // Find and remove selected table rows
  $(".delete-row-pet").click(function(){
      $("#petsTable tbody").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){
              $(this).parents("tr").remove();
          }
      });
      PetsTableState();
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
// left align table contents
// phone field dynamic for multiple numbers
// mask phone field for proper format
// don't allow to add row if fields are blank
// only allow one main contact
// x  edit function
//  don't allow delete main contact, unless admin?
