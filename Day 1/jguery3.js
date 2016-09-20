function myButton_Click(){
    alert("Clicked!");
}

$(function () {


    //Wire up the click event handlers.
$("#myButton").on("click", myButton_Click);
//every list item that contains ("mad)on click hide it.
$("li:contains('mad')").on("click", function() {
    $(this).hide();
    });
});
