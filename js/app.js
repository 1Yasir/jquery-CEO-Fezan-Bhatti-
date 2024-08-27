$(document).ready(function () {
    // Select the button with id #alertMessage and show an alert when clicked
    $("#alertMessage").click(function () {
        alert("Hello JQUERY.....");
    });

    // Select list items inside the unordered list and hide the clicked item
    $("#unOrderList ul li").click(function () {
        $(this).hide();
    });
});
