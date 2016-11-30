/* Defining a simple interface, it's properties and
   their types 
*/
interface Food{
    name: string;
    calories: number;
}
/* 
we then tell our function to expect an object that fulfills the Food interface
This way we'll know the properties we need will always be available
*/

// the function expects an object that fulfills the Food interface
function speak(food:Food){
    console.log("My "+ food.name + " has "+ food.calories +  "calories." );
}

var ice_cream = {
    name: "ice cream",
    calories: 200
}
// speak(ice_cream)