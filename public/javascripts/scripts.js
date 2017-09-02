
(function() {
  "use strict";
  window.addEventListener("load", function() {
    var form = document.getElementById("userInfo");
    form.addEventListener("submit", function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add("was-validated");
    }, false);
  }, false);
}());

$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {

  var target = this.href.split('#')[1];
  // show the selected tab;
  $('.nav a').filter('a[href="#'+target[1]+'"]').tab('show');

  CopyName();

});

function CopyName() {
  // load the user name from first tab
  $("#firstName-1").val($("#firstName").val());
  $("#lastName-1").val($("#lastName").val());
  $("#prefName-1").val($("#prefName").val());
}

// enable tabs to show active when clicked from button
$("#btn-fam-info").click(function() {
  $('a[href="#familyInfo"]').tab('show');
});
$("#btn-accom").click(function() {
  $('a[href="#accomodations"').tab('show');
});
$("#btn-pets").click(function() {
  $('a[href="#petsInfo"').tab('show');
});

// add row to table
$(document).ready(function(){

  PetsTableState();

  $(".add-row").click(function(){
    var petType = $("#petType").val();
    var petLives = $("#petLives").val();
    var petName = $("#petName").val();
    var petNotes = $("#petNotes").val();
    // var btnDelRow = "<button type='button' class='delete-row'>Delete Row</button>";
    var markup = "<tr><td><input type='checkbox' name='record'></td><td>" 
    + petType + "</td><td>" + petLives + "</td><td>" + petName + "</td><td>" 
    + petNotes + "</td></tr>";
    $("table tbody").append(markup);

    PetsTableState();
    // var rowCount = $('#petsTable tr').length-1;
    // alert("There are " + rowCount + " rows");


    $("#petType").prop("selectedIndex",0);
    $("#petLives").prop("selectedIndex",0);
    $("#petName").val("");
    $("#petNotes").val("");
  });
  
  // Find and remove selected table rows
  $(".delete-row").click(function(){
      $("table tbody").find('input[name="record"]').each(function(){
        if($(this).is(":checked")){
              $(this).parents("tr").remove();
          }
      });
      PetsTableState();
  });

    // var rowCount = $('#petsTable tr').length-2;
    // alert("There are " + rowCount + " rows");

    // if (rowCount>0) {
    //   $("#petsTable").show();
      // removeClass("hidden").addClass("visible");
    // }
  function PetsTableState() {
    var rowCount = $('#petsTable tr').length-2;
    if (rowCount===0) {
      $("#petsTable").hide();
    } else {
      $("#petsTable").show();
    }
  }
  
}); // /document.ready   

// var btnDelRow = "<button type='button' class='delete-row'>Delete Row</button>";
      


