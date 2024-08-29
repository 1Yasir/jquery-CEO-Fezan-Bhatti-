import { typeEffect, applyEffect } from "./app.function.js";
import { aboutJQuery, jQueryEffects } from "./app.store.js";

$(document).ready(function () {
    // Start typing effect
    typeEffect(aboutJQuery, "#typing-effect", 100, 500); // (value in array , selector , typing speed , nextTextDelay )
    typeEffect(jQueryEffects.hideShowToggle, "#j-query-effects-hide-show-toggle", 300, 1000);
    typeEffect(jQueryEffects.fades, "#j-query-effects-fades", 300, 1000);



    // jQuery Effects - Hide and Show section script  


    applyEffect("#hide", "#methods-performance1", "hide", 500);
    applyEffect("#show", "#methods-performance1", "show", 500);
    applyEffect("#toggle", "#methods-performance1", "toggle", 500);

    applyEffect("#fadeIn", "#methods-performance2", "fadeIn", 500);
    applyEffect("#fadeOut", "#methods-performance2", "fadeOut", 500);
    applyEffect("#fadeToggle", "#methods-performance2", "fadeToggle", 500);
    applyEffect("#fadeTo", "#methods-performance2", "fadeTo", 500);


    $('#simple_timer').syotimer({
        date: new Date(2024, 7, 30, 13, 0),  // Year: 2024, Month: 8 (0-based index), Day: 29, Hour: 13 (1:00 PM), Minutes: 0
        periodic: false,  // Not periodic since it's a one-time countdown
        effectType: 'opacity',


    });


    //  data fetch jsonPlaceholder using AJAX technique and display the web page   -->
    $("#fetchDataBtn").click(function () {
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/users',
            method: "GET",
            success: function (response) {
                $('#userData').html('');  // Clear previous data
                $.each(response, function (index, user) {
                    // Display user data in the div
                    $('#userData').append(`
                        <div class="col-sm-6 col-md-4 col-lg-4  mb-3">
                        <div class = "border shadow-sm rounded-3">
                            <h3>${user.name}</h3>
                            <p><strong>Email:</strong> ${user.email}</p>
                            <p><strong>Phone:</strong> ${user.phone}</p>
                        </div>
                        </div>
                        
                    `);
                });

                console.log(response);

            },
            error: function (xhr, status, error) {  // Callback function on error
                $('#userData').html('<p>An error occurred while fetching data.</p>');
            }
        })
    })






});
