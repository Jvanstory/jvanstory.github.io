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
            "text": "Education"
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

$(function() {
    $( "#accordion" ).accordion();
  });

jQuery("#fitText").fitText();

$("#alink").rxHtmlButton({
      builtinTheme:"rx03"
    });

$(document).ready(function() {
    $('a[data-email]').emailLink();
});