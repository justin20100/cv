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
let sliderObserver = new IntersectionObserver(function (entries){
    entries.forEach((function (entry){
        setInterval(()=>{
            scrollSave = entry.target.scrollLeft;
            entry.target.scrollLeft+=1;
        },100)
    }))
},{
    threshold: [0.5],
})
let sliders = document.querySelectorAll('.slider')
sliders.forEach(function (slider){
    sliderObserver.observe(slider);
})