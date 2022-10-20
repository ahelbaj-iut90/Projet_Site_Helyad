const line = document.querySelector("#line");
const topContentHeight = document.querySelector("#top-content").offsetHeight + (document.querySelector("#timeline").offsetHeight - line.offsetHeight)/2;

const SMOOTH_PERCENTAGE = 12;

// LINE
window.addEventListener("scroll", (e) => {
    if (window.scrollY + window.innerHeight/2 <= topContentHeight) return;
    
    let offset = window.scrollY + window.innerHeight/2 - topContentHeight;
    let percentage = 100*offset/line.offsetHeight;
    
    percentage = Math.floor(percentage);

    line.style.background = `linear-gradient(green 0% ${percentage + SMOOTH_PERCENTAGE/2}%, rgba(0, 0, 0, 0) ${percentage + SMOOTH_PERCENTAGE}% ${100-percentage}%)`;
});

// APPARITION SCROLL
let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (!entry.target.classList.contains("visible")) {
                entry.target.classList.replace("invisible", "visible");
            }
        } else {
            if (entry.boundingClientRect.top > 0) {
                entry.target.classList.replace("visible", "invisible");
            }
        }
        console.log(entry);
    });
}, {
    rootMargin: "0px 0px -60% 0px"
});

document.querySelectorAll(".box").forEach((box) => {
    observer.observe(box);
});
