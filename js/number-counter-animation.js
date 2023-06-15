//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

const showcaseSection = document.getElementById("showcase-client-section");
let isCounting = false;

const startCounting = () => {
    if (isCounting) return;

    isCounting = true;
    counterAnim("#count1", 0, 75, 3000);
    counterAnim("#count2", 0, 150, 1500);
    counterAnim("#count3", 0, 1000, 2000);
};

const stopCounting = () => {
    isCounting = false;
};

const isInView = (elem) => {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 0
    );
};

window.addEventListener("scroll", () => {
    if (isInView(showcaseSection)) {
        startCounting();
    } else {
        stopCounting();
    }
});

// start counting immediately if the section is already in view
if (isInView(showcaseSection)) {
    startCounting();
}