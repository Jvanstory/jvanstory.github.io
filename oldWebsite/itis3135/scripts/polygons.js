function getShape() {
    let sides = document.getElementById("sides").value;
    let roundedNumber = Math.round(sides);

    if (validateEntry(roundedNumber) == false) {
        document.getElementById("polygon").innerHTML = "Please enter a number 0 to 10";
    }
//Creates an array of the names
    let polygonNames = ["Not A Polygon", "henagon", "digon", "triangle", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    let polygonName = polygonNames[roundedNumber];
    document.getElementById("polygon").innerHTML = polygonName;
}

function validateEntry(sides){
    if (sides < 0 || sides > 10 || isNaN(sides)) {
        
        return false;
    }
    return true;
}