
//Clarify the variable
const planet="";
// Call the function and send the value to it then printout the returned value
console.log(planetHasWater('Ploto'));
// the created function to return the needed value
function planetHasWater(planet){
    if (planet === 'Earth' || planet === 'Mars'){
        return true;
    }
    else {
       return false;
    }
}


