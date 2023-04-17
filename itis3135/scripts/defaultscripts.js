$(function (){
    console.log("made it here");
    console.log(location.pathname);
    console.log(location.pathname.split("/").splice(-1));
    const pathname = String(location.pathname.split("/").splice(-1));
    const links = {
        "1": {
            "url": "index.html",
            "text": "Home",
            "alt": "Example Homepage"
        },
        "2": {
            "url": "contract.html",
            "text": "Contract"
        },
        "3": {
            "url": "tables.html",
            "text": "HTML Tables",
            "alt": "Single and Complex Table Demonstration"
        },
        "4": {
            "url": "forms.html",
            "text": "HTML Forms",
            "alt": "Single and Complex Table Demonstration"
        }, 
        "5": {
            "url": "website_evaluations.html",
            "text": "Website Evaulations",
            "alt": "Single and Complex Table Demonstration"
        },
        "6": {
            "url": "firstscripts.html",
            "text": "Javascript First Scripts",
            "alt": "Single and Complex Table Demonstration"
        },
        "7": {
            "url": "polygons.html",
            "text": "Polygons",
            "alt": "Single and Complex Table Demonstration"
        }, 
        "8": {
            "url": "calculator_try.html",
            "text": "Calculator Try",
            "alt": "Single and Complex Table Demonstration"
        },
        "9": {
            "url": "calculator_fcc.html",
            "text": "Calculator FCC",
            "alt": "Single and Complex Table Demonstration"
        },
        "10":{
            "url": "arrays.html",
            "text": "Arrays"
        },
        "11":{
            "url": "slideshow.html",
            "text": "Slideshow"
        },
        "12":{
            "url": "template.html",
            "text": "Template"
        },
        "13":{
            "url": "project1.html",
            "text": "Project1"
        },
        "14":{
            "url": "review1.html",
            "text": "Review 1"
        },
        "15":{
            "url": "review2.html",
            "text": "Review 2"
        }
    };

    const secondlinks = {
        "1":{
            "url": "https://webpages.charlotte.edu/jvanstor/itis3135/stuff/bad%20Name@2.htm",
            "text": "Bad Website"
        },
        "2":{
            "url": "accessibility/Vanstory_Activity_Accessibility.html",
            "text": "Accessibility"
        },
        "3":{
            "url": "hobby",
            "text": "Hobby"
        },
        "4":{
            "url": "https://webpages.charlotte.edu/jvanstor/project/",
            "text": "Project"
        },
        "5":{
            "url": "https://webpages.charlotte.edu/jvanstor/Exercise/Vanstory-Activity11.html",
            "text": "Activity 11"
        },
        "6":{
            "url": "https://webpages.charlotte.edu/jvanstor/Exercise/Vanstory-Activity12.html",
            "text": "Activity 12"
        },
        "7":{
            "url": "https://webpages.charlotte.edu/jvanstor/Exercise/Vanstory-Activity13.html",
            "text": "Activity 13"
        },
        "8":{
            "url": "https://webpages.charlotte.edu/jvanstor/Exercise/Vanstory-Activity14.html",
            "text": "Activity 14"
        }
    }

    let secondString = "";
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
    for(let id in secondlinks){
        if(pathname === secondlinks[id]['url']){
            secondString += secondlinks[id]['text'];
        } else {
            secondString += '<a href="' + secondlinks[id]['url'] + '">' + secondlinks[id]['text'] + '</a>';
        }
        if(Number(id) < Object.keys(secondlinks).length){
            secondString += linkSeparator;
        }
    }
    $('#siteLinks').html(htmlString);
    $('#secondLinks').html(secondString);
});

$(document).ready(function () {
    $('#footer').load('./footer.html');
});

let slideIndex = 1;
const slides = document.querySelectorAll('#slideshow .slides .slide');
const prev = document.querySelector('#slideshow .prev');
const next = document.querySelector('#slideshow .next');

function showSlide(n) {
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slides[slideIndex-1].style.display = 'block';
}

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

showSlide(slideIndex);

var date =  new Date();
time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("date").innerHTML = "Today is " + time + " on " + month + "/" + day + "/" + year;

function greeting(){
    var fullName = document.getElementById("fullName").value;
    console.log(fullName);
    var mood = document.getElementById("mood").value;
    console.log(mood);
    document.getElementById("greet").innerHTML = "The Jittery Vultures welcomes you, " + fullName + "! We're glad you are doing " + mood;
}

function addition(){
    var input1 = Number(document.getElementById("addinput1").value);
    var input2 = Number(document.getElementById("addinput2").value);
    value = (input1) + (input2);
    document.getElementById("sum").innerHTML = value;
}

function subtraction(){
    var input1 = Number(document.getElementById("subinput1").value);
    var input2 = Number(document.getElementById("subinput2").value);
    value = (input1) - (input2);
    document.getElementById("subsum").innerHTML = value;
}

function multiplication(){
    var input1 = Number(document.getElementById("multinput1").value);
    var input2 = Number(document.getElementById("multinput2").value);
    value = (input1) * (input2);
    document.getElementById("multsum").innerHTML = value;
}

function division(){
    var input1 = Number(document.getElementById("divinput1").value);
    var input2 = Number(document.getElementById("divinput2").value);
    value = (input1) / (input2);
    document.getElementById("divsum").innerHTML = value;
}

function tax(){
    var input1 = Number(document.getElementById("taxinput1").value);
    value = input1 + (input1 * .07);
    document.getElementById("tax").innerHTML = value;
}

const home = document.createElement ('a'); 
home.setAttribute ('href',"index.html"); 
home.innerHTML = "home";

const introduction = document.createElement ('a'); 
introduction.setAttribute ('href',"introduction.html"); 
introduction.innerHTML = "introduction";

document.getElementsByTagName ('nav') [0].appendChild (home);
document.getElementsByTagName ('nav') [0].appendChild (introduction);

