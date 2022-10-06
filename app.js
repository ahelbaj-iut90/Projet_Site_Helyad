const RATIO = .4;

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.intersectionRatio >= RATIO) {
            entry.target.classList.replace("appear-invisible", "appear-visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: RATIO
});

document.querySelectorAll(".appear-element").forEach((element) => {
    observer.observe(element);
});
