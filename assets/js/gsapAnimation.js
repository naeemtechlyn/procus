// Select all elements with the class "title_four"
const titles = document.querySelectorAll(".main-title");

// Loop through each selected element
titles.forEach((title) => {
    // Create a SplitText instance for each title element
    var titleSplit = new SplitText(title, {
        type: "lines,words",
        linesClass: "split-line",
        textAlign: "center",
    });

    // Apply the GSAP animation to each SplitText instance
    gsap.from(titleSplit.words, {
        scrollTrigger: {
            trigger: title,
            toggleActions: "restart none none none",
        },
        duration: 1.2,
        y: "100%",
        rotationY: 10,
        stagger: .1,
        opacity: 0,
    });
});

const titleThree = document.querySelector(".title_three");

var titleThreeSplit = new SplitText(titleThree, {
    type: "lines",
    linesClass: "split-line",
    textAlign: "center",
});

gsap.from(titleThreeSplit.lines, {
    scrollTrigger: {
        trigger: titleThree,
        toggleActions: "restart none none none",
    },
    duration: 1,
    perspective: "2000px",
    rotateX: "-120deg",
    translateY: "90px",
    stagger: 0.1,
    opacity: 0,
});