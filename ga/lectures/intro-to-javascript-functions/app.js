// Exercise 1


//Clarify the variable
const planet="";
// Call the function and send the values, to printout the returned values
console.log(planetHasWater('Earth'));   // should print true
console.log(planetHasWater('Venus'));   // should print false
console.log(planetHasWater('Mars'));    // should print true
console.log(planetHasWater('Jupiter')); // should print false
// the created function to return the needed value
function planetHasWater(planet){
    if (planet === 'Earth' || planet === 'Mars'){
        //return the true value
        return true;
    }
    else {
        //return the false value
       return false;
    }
}

// Exercise 2

const width=0;
const height=0;
console.log(computeArea(5, 25));
function computeArea (width,height){
    const totalArea = width*height;
    const message =`The area of a rectangle with a width of ${width} and a height of ${height} is ${totalArea} square units.`;
    return message;
}


