function getShape() {
    let sides = document.getElementById("sides").value;
    let roundedNumber = Math.round(sides);
    validateEntry(roundedNumber);
//Creates an array of the names
    let polygonNames = ["Not A Polygon", "henagon", "digon", "triangle", "tetragon", "pentagon", "hexagon", "heptagon", "octagon", "nonagon", "decagon"];
    let polygonName = polygonNames[roundedNumber];
    alert(polygonName);
}

function validateEntry(sides){
    if (sides < 0 || sides > 10 || isNaN(sides)) {
        alert("Please enter a number between 0 and 10");
        return false;
    }
    return true;
}