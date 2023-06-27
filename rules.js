// Get all the <p> elements on the page
const paragraphs = document.querySelectorAll('p');

// Add an event listener for the "scroll" event on the window object
window.addEventListener('scroll', () => {
        // For each paragraph element, check if it's currently visible on the screen
        paragraphs.forEach((paragraph) => {
                if (isElementInViewport(paragraph)) {
                        // If the paragraph is visible, "type" out its text content
                        typeOutParagraph(paragraph);
                }
        });
});

// Helper function to check if an element is currently visible on the screen
function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}

// Helper function to simulate typing out the text of a paragraph
function typeOutParagraph(paragraph) {
        const text = paragraph.textContent;
        let index = 0;
        const intervalId = setInterval(() => {
                // Append the next character of the text to the paragraph element
                paragraph.textContent += text.charAt(index);
                index++;

                // If we've reached the end of the text, stop the interval
                if (index === text.length) {
                        clearInterval(intervalId);
                }
        }, 50); // Adjust this value to control the typing speed
}