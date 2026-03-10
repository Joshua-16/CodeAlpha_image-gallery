let slides = document.querySelectorAll(".slide");
let current = 0;

function slideDisplay(index){

    slides.forEach(slide => {
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function nextSlide(){
    current++;

    if(current >= slides.length){
        current = 0;
    }

    slideDisplay(current);
}

function prevSlide(){
    current--;

    if(current < 0){
        current = slides.length - 1;
    }

    slideDisplay(current);
}