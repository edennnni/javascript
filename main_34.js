function printNames(){
console.log("Edeni");
//Callback
setTimeout (function(){console.log("Eden")}, 3000)
console.log("Edenii");
}

printNames();
function search(){
var input, ul, li, x, i, txtValue, filter;
input = document.getElementById('searchInput');
filter = input.value.toUpperCase();
ul = document.getElementById('ListEl');
for(i=0; i<li.length; i++){
x = li [i];
txtValue = x.textContent;
if(txtValue.toUpperCase().indexOf(filter)>-1){
li[i].style.display = 'block';
}
else{
    li[i].style.display = 'none';
}










}