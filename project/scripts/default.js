$(function (){
    console.log("made it here");
    console.log(location.pathname);
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1":{
            "url": "index.html",
            "text": "Home"
        },
        "2":{
            "url": "photos.html",
            "text": "Photos"
        },
        "3":{
            "url": "qualifications.html",
            "text": "Qualifications"
        },
        "4":{
            "url": "school_work.html",
            "text": "School Work"
        },
        "5":{
            "url": "about_me.html",
            "text": "About Me"
        }
    }

    const linkSeparator = " | ";
    let htmlString = "";

    for(let id in links){
        if(pathname === links[id]['url']){
            htmlString += links[id]['text'];
        } else {
            htmlString += '<a href="' + links[id]['url'] + '">' + links[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(links).length){
            htmlString += linkSeparator;
        }
    }
    $('#siteLinks').html(htmlString);
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}