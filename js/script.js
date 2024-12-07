// UI

const slides = document.getElementsByClassName("carousel-item"); // 0 1 2 3
const dots = document.querySelectorAll(".dot");// 0 1 2 3
console.log(slides.length); //4


let currentslide = 1;

document.getElementById('prev').addEventListener('click',function(){

        carousel(currentslide -= 1);

});

document.getElementById('next').addEventListener('click',function(){

        carousel(currentslide += 1 );

});

carousel(currentslide);


function carousel(slidenumber){

    // console.log(slidenumber);

    let x , y;

    //hide all slides
    for(x = 0 ; x < slides.length; x++){
        slides[x].style.display ="none";

    }

    //remove all active
    for(y = 0; y < slides.length; y++){
        dots[y].classList.remove("active");
    }


    if(slidenumber > slides.length){
        currentslide = 1;

    }else if(slidenumber < 1){
        currentslide = slides.length;
    }


    slides[currentslide -1].style.display = "block";
    dots[currentslide -1 ].className ="dot active";




}

for(let z = 0; z < dots.length; z++){
    dots[z].addEventListener('click',function(){
        
        currentslide = this.getAttribute("data-bs-dot-inc");

        carousel(currentslide);

    });

}



// slides       0          1         2        3
//currslides    1-1=0      2-1=1     3-1=2    4-1=3
//dots          0          1         2        3



