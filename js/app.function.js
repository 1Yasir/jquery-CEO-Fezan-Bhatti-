function typeEffect(texts, selector, typingSpeed = 100, nextTextDelay = 500) {
    let index = 0; // Current text index
    let textIndex = 0; // Current character index
    let currentText = ""; // Text being typed out

    function startTyping() {
        if (textIndex < texts[index].length) {
            // Append the next character to currentText
            currentText += texts[index][textIndex];
            $(selector).text(currentText); // Set text to provided selector element

            // Move to next character
            textIndex++;

            // Set timeout for typing effect speed
            setTimeout(startTyping, typingSpeed); // Adjust typing speed
        } else {
            // Move to the next text after a delay
            setTimeout(() => {
                currentText = ""; // Clear currentText
                textIndex = 0; // Reset character index
                index = (index + 1) % texts.length; // Move to next text
                startTyping(); // Start typing effect for next text
            }, nextTextDelay); // Delay before starting the next text
        }
    }

    startTyping(); // Initialize the typing effect
}

export { typeEffect };