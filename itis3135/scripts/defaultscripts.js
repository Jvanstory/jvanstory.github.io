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

// <script src="https://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
// <script>
//         $(function () {
//             $("#header").load("components/header.html");
//             $("#footer").load("components/footer.html");
//         });
//     </script>