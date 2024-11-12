function printNames(){
console.log("Edeni");
//Callback
setTimeout (function(){console.log("Eden")}, 3000)
console.log("Edenii");
}

printNames();