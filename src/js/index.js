const goldLine = document.querySelector('#goldLine');
const rPaths = document.querySelectorAll('#rp');
const mPaths = document.querySelectorAll('#mp');
const ramadan = Array.from(rPaths)
const mubarak = Array.from(mPaths)
function svgInitialise(el) {
    const length = el.getTotalLength()
    el.style.strokeDasharray = length;
    el.style.strokeDashoffset = length;
}
function svgDraw(el, delay, duration) {
    setTimeout(() => {
        el.style.strokeDashoffset = 0;
        el.style.transitionDuration = `${duration}s`
    }, delay);
    // el.style.transitionDelay = `${delay ? delay : 0}s`
}
svgInitialise(goldLine)
ramadan.map(p => {
    svgInitialise(p)
}
);
mubarak.map(p => {
    svgInitialise(p)
}
);

ramadan.map((p, i) => {
    svgDraw(p, 2500, 1.5)
}
)

mubarak.map((p, i) => {
    svgDraw(p, 2000, 1.5)
}
)

svgDraw(goldLine, 0, 3)


const tl = gsap.timeline({ delay: 5 });
tl.to('.mubarakContainer', { top: '4rem', gap: '2rem', duration: 2, ease: 'Power4.easeInOut' });
tl.to('.mubarak svg', { width: '90px', duration: 2, ease: 'Power4.easeInOut' }, '<');
tl.from('.mBefore, .mAfter', { width: 0 }, '<');
tl.from('.dua', { opacity: 0, duration: 2, ease: 'Power4.easeInOut' });
