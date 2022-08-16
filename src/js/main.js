/* transitions */
const ratio = .1;
const options ={
    root: null,
    rootMargin: '-100px',
    threshold: .1
}
const handleIntersect = function (entries, observer){
    entries.forEach(function (entry){
        if (entry.intersectionRatio > ratio){
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
        }
    })
}
const observer = new IntersectionObserver(handleIntersect, options);
document.querySelectorAll('.reveal').forEach(function (r){
    observer.observe(r);
})

/* slider */
const sliderinfos ={
    root: null,
    rootMargin: '-100px',
    threshold: .1
}
const sliderObserver = function (entries, slider){
    entries.forEach(function (entry){
        setInterval(()=>{
            entry.target.scrollLeft+=1;
        },100)

    })
}
const slider = new IntersectionObserver(sliderObserver, sliderinfos);
document.querySelectorAll('.slider').forEach(function (r){
    slider.observe(r);
})

/* menu */
function toggleMenu () {
    const navbar = document.querySelector('.navbar');
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', (e) => {
        navbar.classList.toggle('show-nav');
    });
}
toggleMenu();