// Select all elements with the class "title_one"
const titleOnes = document.querySelectorAll(".title_one");

// Loop through each selected element
titleOnes.forEach((titleOne) => {
    // Create a SplitText instance for each title element
    var titleOneSplit = new SplitText(titleOne, {
        type: "words,chars",
        textAlign: "center", // This should be handled via CSS, not in JS
    });

    // Apply the GSAP animation to the words
    gsap.from(titleOneSplit.words, {
        scrollTrigger: {
            trigger: titleOne,
            toggleActions: "restart none none none",
        },
        duration: 1,
        opacity: 0,
        x: 20,
        stagger: 0.02,
    });

    // Apply the GSAP animation to the characters
    gsap.from(titleOneSplit.chars, {
        scrollTrigger: {
            trigger: titleOne,
            toggleActions: "restart none none none",
        },
        duration: 1,
        opacity: 0,
        x: 40,
        stagger: 0.02,
    });
});

// Select all elements with the class "title_three"
const titleThrees = document.querySelectorAll(".title_three");

// Loop through each selected element
titleThrees.forEach((titleThree) => {
    // Create a SplitText instance for each title element
    var titleThreeSplit = new SplitText(titleThree, {
        type: "lines",
        linesClass: "split-line",
        textAlign: "center", // This should be handled via CSS, not in JS
    });

    // Apply the GSAP animation to the lines
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
});

const smoother = ScrollSmoother.create({
    content: "#scrollsmoother-container",
    smooth: 2,
    normalizeScroll: true,
    ignoreMobileResize: true,
    effects: true,
});

// Select all elements with the class "fadeInUp"
const fadeInUpElements = document.querySelectorAll('.fadeInUp');

// Loop through each selected element
fadeInUpElements.forEach((element, index) => {
    // Apply the GSAP animation to each element
    gsap.from(element, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: index * 0.2, // Delay each animation based on its index
        scrollTrigger: {
            trigger: element.closest('.section-animation'), // Find the closest parent with the class "section-animation"
            start: "top 80%", // When the top of the element hits 80% of the viewport height
            toggleActions: "restart none none none", // Play the animation on scroll
        }
    });
});

// Select all elements with the class "section-animation"
const sections = document.querySelectorAll('.section-animation');

sections.forEach((section) => {
    // Create a GSAP timeline for each section
    const service = gsap.timeline({
        delay: 0.3,
        scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            toggleActions: "restart none none none", // Play the animation on scroll
        }
    });

    // Apply animations to elements within the section
    service.from(section.querySelectorAll('.fadeInLeft'), {
        x: -50,
        opacity: 0,
        duration: 0.8,
    }, 'first-row');

    service.from(section.querySelectorAll('.fadeInRight'), {
        x: 50,
        opacity: 0,
        duration: 0.8,
    }, 'first-row');
});

// Select all image containers
const containers = document.querySelectorAll('.portfolio-image');

containers.forEach(container => {
    const button = container.querySelector('.portfolio-btn');

    container.addEventListener('mouseenter', () => {
        gsap.to(button, {
            opacity: 1,       // Show the button on mouse enter
            duration: 0.5,
            scale: 1,
            ease: "power2.out"
        });
        container.addEventListener('mousemove', onMouseMove);
    });

    container.addEventListener('mouseleave', () => {
        gsap.to(button, {
            opacity: 0,       // Hide the button on mouse leave
            duration: 0.5,
            scale: .6,
            ease: "power2.out"
        });
        container.removeEventListener('mousemove', onMouseMove);
    });

    function onMouseMove(e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gsap.to(button, {
            x: x - rect.width / 2,  // Move button horizontally with mouse
            y: y - rect.height / 2, // Move button vertically with mouse
            duration: 0.1,
            ease: "power1.out"
        });
    }
});

