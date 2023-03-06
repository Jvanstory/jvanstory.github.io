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
            "url": "template.html",
            "text": "Template Page",
            "alt": "Template Link"
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
        }
    };

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

function greeting(){
    var fullName = document.getElementById("fullName").value;
    console.log(fullName);
    var mood = document.getElementById("mood").value;
    console.log(mood);
    alert("The Jittery Vultures welcomes you, " + fullName + "! We're glad you are doing " + mood);
}

date =  new Date();
time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("date").innerHTML = "Today is " + time + " on " + month + "/" + day + "/" + year;

function addition(){
    var input1 = Number(document.getElementById("addinput1").value);
    var input2 = Number(document.getElementById("addinput2").value);
    value = (input1) + (input2);
    alert(value);
}

function subtraction(){
    var input1 = Number(document.getElementById("subinput1").value);
    var input2 = Number(document.getElementById("subinput2").value);
    value = (input1) - (input2);
    alert(value);
}

function multiplication(){
    var input1 = Number(document.getElementById("multinput1").value);
    var input2 = Number(document.getElementById("multinput2").value);
    value = (input1) * (input2);
    alert(value);
}

function division(){
    var input1 = Number(document.getElementById("divinput1").value);
    var input2 = Number(document.getElementById("divinput2").value);
    value = (input1) / (input2);
    alert(value);
}

function tax(){
    var input1 = Number(document.getElementById("taxinput1").value);
    value = input1 + (input1 * .07);
    alert(value);
}

const home = document.createElement ('a'); 
home.setAttribute ('href',"index.html"); 
home.innerHTML = "home";

const introduction = document.createElement ('a'); 
introduction.setAttribute ('href',"introduction.html"); 
introduction.innerHTML = "introduction";

document.getElementsByTagName ('nav') [0].appendChild (home);
document.getElementsByTagName ('nav') [0].appendChild (introduction);




