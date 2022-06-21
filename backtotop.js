// Getting back to top button
const backtotop_btn = document.getElementById("backtotop-btn")

// When page is being scrolled
window.onscroll = function () {
    /*
    • When scrolling down 700px from the top of the page, display the button
    • document.documentElement - For Chrome, Firefox, IE and Opera
    • document.body - For Safari
    */
    if (document.documentElement.scrollTop > 700 || document.body.scrollTop > 700) {
        /* ROCKET EMOJI - SHOW ANIMATION */
        backtotop_btn.setAttribute("class", "slide-in-bottom")

        /* TEXT & ARROW TOP SVG - SHOW ANIMATION */
        // backtotop_btn.setAttribute("class", "scale-in-center")

        // Show back to top button
        backtotop_btn.style.visibility = "visible"
    } else {
        /* ROCKET EMOJI - HIDE ANIMATION */
        backtotop_btn.setAttribute("class", "slide-out-top")

        /* TEXT & ARROW TOP SVG - HIDE ANIMATION */
        // backtotop_btn.setAttribute("class", "scale-out-center")

        // Hide back to top button
        backtotop_btn.style.visibility = "hidden"
    }
}

// When back to top button is clicked
backtotop_btn.onclick = function () {
    // For Chrome, Firefox, IE and Opera
    document.documentElement.scrollTop = 0
    // For Safari
    document.body.scrollTop = 0
}