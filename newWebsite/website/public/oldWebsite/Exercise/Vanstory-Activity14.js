$(document).ready(function() {
    $("#nav_list li").click(function() {
        //gets the name of the person from the <a>
        var name = $(this).children("a").attr("title");
        //finds the json file
        $.get("json_files/" + name + ".json", function(words, status) {
            words = words['speakers'][0];
            $("h1").html(words.title);
            $("h2").html(words.month);
            $("h3").html(words.speaker);
            $("img").attr("src", words.image);
            $("p").html(words.text);
        });
    });    
});