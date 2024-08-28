import { typeEffect } from "./app.function.js";
import { aboutJQuery , jQueryEffects } from "./value.store.js";

$(document).ready(function () {
// Start typing effect
typeEffect(aboutJQuery, "#typing-effect", 100, 500);
typeEffect(jQueryEffects, "#j-query-effects", 300, 1000);



    // jQuery Effects - Hide and Show section script  

    $("#hide").click(function () {
        $("#methods-performance").hide(500);
    })

    $("#show").click(function () {
        $("#methods-performance").show(500);
    })
    $("#toggle").click(function () {
        $("#methods-performance").toggle(500);
    })



});
