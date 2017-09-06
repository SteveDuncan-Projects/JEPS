var validator = $("#hostFamilyForm").validate();
var tabs = $("#tabs").tabs({
    select: function(event, ui) {
        var valid = true;
        var current = $(this).tabs("option", "selected");
        var panelId = $("#tabs ul a").eq(current).attr("href");
        
        $(panelId).find("input").each(function() {
            console.log(valid);
            if (!validator.element(this) && valid) {
                valid = false;
            }
        });
       
        return valid;
    }
});


$(".nexttab").click(function() {
        $("#tabs").tabs("select", this.hash);
});

//use link to submit form instead of button
$("a[id=submit]").click(function() {
    $(this).parents("form").submit();
});

//form validation



// var next1 = false;
// var next2 = false;
// var next3 = false;


// $(document).ready(function() {
// 	// set initial state of tabs to disabled
// 	$("a[href$='familyInfo']").addClass('disabled');
// 	$("a[href$='accomodations']").addClass('disabled');
// 	$("a[href$='petsInfo']").addClass('disabled');



// });
// // /////////////////////////////////////////////////////
// var validator = $("#hostFamilyForm").validate();
// var tabs = $("#userInfo").tabs({
//     select: function(event, ui) {
//         var valid = true;
//         var current = $(this).tabs("option", "selected");
//         var panelId = $("#hostFamNav a").eq(current).attr("href");
        
//         $(panelId).find("input").each(function() {
//             console.log(valid);
//             if (!validator.element(this) && valid) {
//                 valid = false;
//             }
//         });
       
//         return valid;
//     }
// });


// // $(".nexttab").click(function() {
// //         $("#tabs").tabs("select", this.hash);
// // });

// //use link to submit form instead of button
// // $("a[id=submit]").click(function() {
// //     $(this).parents("form").submit();
// // });

// // /////////////////////////////////////////////////////

// // var checkButton = document.querySelector("#check");
// // var reportButton = document.querySelector("#report");

// // checkButton.addEventListener("click", function() {
// //   var checkVal = form.checkValidity();
// //   output.innerHTML = "checkValidity returned: " + checkVal;
// // });

// // reportButton.addEventListener("click", function() {
// //   var reportVal = form.reportValidity();
// //   output.innerHTML = "reportValidity returned: " + reportVal;
// // });

// // $('#btn-fam-info').on('click', function(){
// $('#btn-fam-info').addEventListener('click', function(){
//      //validate your inputs fields
//      // alert("Validate fields on User Info tab");

//      var reportVal = form.reportValidity();
//   alert("reportValidity returned: " + reportVal);

//      // var result = selectElt.checkValidity();
//      // var userInfoValid = false;// assign true if validation is correct.
// });

// $('#btn-accom').on('click', function(){
// //validate your inputs fields
// 	// alert("Validate fields on Family Info tab");
//      var next2 = true;// assign true if validation is correct
// });

// $('#btn-pets').on('click', function(){
// //validate your inputs fields
// 	// alert("Validate fields on Accomodations tab");
//         var next3 = true;// assign true if validation is correct

//                 if((next1 == 'true') && (next2 == 'true') && (next3 == 'true'))

//                         {
//                                  //submit form
//                         }

// })

