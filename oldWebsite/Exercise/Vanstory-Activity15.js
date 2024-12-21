$(document).ready(function(){
    $.get("facultyList.json", function(data) {
        $.each(data, function(){
            $.each(this, function (key, words) {
                $("#faculty").append("<img src='" + words.image + "'></img>" + 
                "<h2>" + words.full_name + "</h2>" + 
                "<h3>" + words.department + "</h3>" + 
                "<p>" + words.bio + "</p>");
            });
        });
    });
});
