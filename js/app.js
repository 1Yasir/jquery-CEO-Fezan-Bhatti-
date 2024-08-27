$(document).ready(function () {
    // Select the button with id #alertMessage and show an alert when clicked
    $("#alertMessage").click(function () {
        alert("Hello JQUERY.....");
    });

    // Select list items inside the unordered list and hide the clicked item
    $("#unOrderList ul li").click(function () {
        $(this).hide();
    });

// Select all paragraph elements and add multiple events at the same time

    $("#paragraph p").on({
        mouseenter: function () {
            $(this).css("background-color", "lightgray");
        },
        mouseleave : function(){
            $(this).css("background-color",  "lightblue")
        },
        click : function(){
            $(this).css("background-color" , "crimson")
        }
    })

});
