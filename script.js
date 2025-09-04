const navdialog = document.getElementById("nav-dialog")
function handleMenu(){
    console.log('first')
    navdialog.classList.toggle("hidden")
}
function setupIntersectionObserver(element, isLTR, speed) {
    if (!element) return;

    let ticking = false;

    // Extract initial translateX from computed style
    const initialMatrix = window.getComputedStyle(element).transform;
    let initialOffset = 0;

    if (initialMatrix && initialMatrix !== "none") {
        const matrixValues = initialMatrix.match(/matrix\(([^)]+)\)/);
        if (matrixValues) {
            const parts = matrixValues[1].split(", ");
            initialOffset = parseFloat(parts[4]); // matrix(a, b, c, d, tx, ty)
        }
    }

    function scrollHandler() {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const rect = element.getBoundingClientRect();
                const translateX = (window.innerHeight - rect.top) * speed;

                let scrollOffset = isLTR ? translateX : -translateX;

                const totalTranslate = initialOffset + scrollOffset;

                element.style.transform = `translateX(${totalTranslate}px)`;

                ticking = false;
            });

            ticking = true;
        }
    }

    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            scrollHandler(); // Trigger once
            document.addEventListener('scroll', scrollHandler);
        } else {
            document.removeEventListener('scroll', scrollHandler);
        }
    };

    const observer = new IntersectionObserver(intersectionCallback, {
        threshold: 0.1,
    });

    observer.observe(element);
}
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
const line4 = document.getElementById('line4');

setupIntersectionObserver(line1, true, 0.15);
setupIntersectionObserver(line2, false, 0.15);
setupIntersectionObserver(line3, true, 0.15);
setupIntersectionObserver(line4, false, 0.50);
