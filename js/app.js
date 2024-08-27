$(document).ready(function () {

    // display the about jquery  
    const texts = [
        "jQuery is a JavaScript Library.",
        "jQuery greatly simplifies JavaScript programming.",
        "jQuery is easy to learn.",
        "jQuery makes HTML document traversal and manipulation simple.",
        "jQuery simplifies event handling.",
        "jQuery provides animations and effects.",
        "jQuery is compatible with various browsers.",
        "jQuery is lightweight and fast.",
        "jQuery helps in AJAX operations.",
        "jQuery has a large community and many plugins.",
        "jQuery is useful for web development."
    ];

    let index = 0; // Current text index
    let textIndex = 0; // Current character index
    let currentText = ""; // Text being typed out

    // Function to start typing effect
    function typeEffect() {
        if (textIndex < texts[index].length) {
            // Append the next character to currentText
            currentText += texts[index][textIndex];
            $("#typing-effect").text(currentText); // Set text to <h2> element

            // Move to next character
            textIndex++;

            // Set timeout for typing effect speed
            setTimeout(typeEffect, 100); // Adjust typing speed (100 ms per character)
        } else {
            // Move to the next text after a delay
            setTimeout(() => {
                currentText = ""; // Clear currentText
                textIndex = 0; // Reset character index
                index = (index + 1) % texts.length; // Move to next text
                typeEffect(); // Start typing effect for next text
            }, 500); // Delay before starting the next text (500 ms)
        }
    }

    // Start typing effect
    typeEffect();



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
