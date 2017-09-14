// FormGet Online Form Builder JS Code
// Creating and Adding Dynamic Form Elements.
var i = 1; // Global Variable for Name
var j = 1; // Global Variable for E-mail
/*
=================
Creating Text Box for name field in the Form.
=================
*/
function textBoxCreate(){
var y = document.createElement("INPUT");
y.setAttribute("type", "text");
y.setAttribute("Placeholder", "Name_" + i);
y.setAttribute("Name", "Name_" + i);
document.getElementById("myForm").appendChild(y);
i++;
}
/*
=================
Creating Text Box for email field in the Form.
=================
*/
function emailBoxCreate(){
var y = document.createElement("INPUT");
var t = document.createTextNode("Email");
y.appendChild(t);
y.setAttribute("Placeholder", "Email_" + j);
y.setAttribute("Name", "Email_" + j);
document.getElementById("myForm").appendChild(y);
j++;
}

$(document).ready(function(){
	AddPet();

});





// function AddPet() {
// 	$('.addPet').click(function() {
// 		alert("addPet clicked");


// 		// var html = $(".pettemplate").html();
// 		// $(".after-add-more").after(html);

// 		$('.pettemplate').clone(true).appendTo('.add-row-pet');
// 		$("div.add-row-pet > div").removeClass('pettemplate');

// 	});
// }


function AddPet() {
    var count = 0;
    $('.addPet').click(function() {

        // var source = $('form:first'),
        //     clone = source.clone();
        clone = $('.pettemplate').clone(true);

        clone.find(':input').attr('id', function(i, val) {
            return val + count;
        });

        // clone.appendTo('body');
        clone.appendTo('.add-row-pet');
        $("div.add-row-pet > div").removeClass('pettemplate');

        count++;
    });

}

$('.dropdown-menu input').click(function (e) {
     e.stopPropagation();
 });
$('.dropdown-menu li').click(function(){
 
$('.dropdown-toggle b').remove().appendTo($('.dropdown-toggle').text($(this).text()));
});