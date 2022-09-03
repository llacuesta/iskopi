let slideIndexCoffee = 0;
slidesCoffee();

function slidesCoffee(){
    let i;
    let slides = document.getElementsByClassName("slide-coffee");

    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slideIndexCoffee++;

    if(slideIndexCoffee>slides.length){
        slideIndexCoffee=1;
    }
    slides[slideIndexCoffee-1].style.display="block";
    setTimeout(slidesCoffee,6000);
}

let slideIndexPastries = 0;
slidesPastries();

function slidesPastries(){
    let i;
    let slides = document.getElementsByClassName("slide-pastries");

    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slideIndexPastries++;

    if(slideIndexPastries>slides.length){
        slideIndexPastries=1;
    }
    slides[slideIndexPastries-1].style.display="block";
    setTimeout(slidesPastries,5000);
}

let slideIndexCoffeebeans = 0;
slidesCoffeebeans();

function slidesCoffeebeans(){
    let i;
    let slides = document.getElementsByClassName("slide-coffeebeans");

    for(i=0;i<slides.length;i++){
        slides[i].style.display = 'none';
    }
    slideIndexCoffeebeans++;

    if(slideIndexCoffeebeans>slides.length){
        slideIndexCoffeebeans=1;
    }
    slides[slideIndexCoffeebeans-1].style.display="block";
    setTimeout(slidesCoffeebeans,4000);
}