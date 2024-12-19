const person = Array();
const salaries = Array();
var x = 0;

function addSalary() {
    person[x] = document.getElementById("name").value;
    salaries[x] = document.getElementById("salary").value;
    if (person[x] == "" || salaries[x] == ""){
        alert("Please enter a valid response");
        return false;
    } else {
     x++;
    document.getElementById("name").value = "";
    document.getElementById("salary").value = "";
    }
    document.getElementById("name").focus();
    document.getElementById("name").select();
}

function displayResults(){
    const highestSalary = Math.max(...salaries);
    var total = 0;
    for (var i =0; i < salaries.length; i++){
        total += Number(salaries[i]);
    }
    const averageSalary = total / (salaries.length);
    document.getElementById("results").innerHTML = "<h2>Salary Results</h2><p>Average Salary: " + averageSalary + "</p><p>Highest Salary: " + highestSalary + "</p>";
    document.getElementById("name").focus();
    document.getElementById("name").select();
}

function displaySalary(){
    var a = "<hr/>", b = "<hr/>";
        for (var i=0; i<person.length; i++) {
            a += "<tr><td>" + person[i] + "</td><br/>";
            b += "<td>" + salaries[i] + "</td></tr><br/>";
        }
    document.getElementById("person_Table").innerHTML = a;
    document.getElementById("salary_Table").innerHTML = b;
    document.getElementById("name").focus();
    document.getElementById("name").select();
}
