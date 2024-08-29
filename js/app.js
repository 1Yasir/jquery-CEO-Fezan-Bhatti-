import { typeEffect , applyEffect } from "./app.function.js";
import { aboutJQuery , jQueryEffects } from "./app.store.js";

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
    
        





});
