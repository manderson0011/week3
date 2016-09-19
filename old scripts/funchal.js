

function getAge(){
// age ="38";  // right is return 41;
return 38;
}
var age =getAge();
console.log(age);


//2
function add(a,b){
    return a+b;
}
console.log(add(2,2));


//3
function reverse(string){
    var result = "";
    for(var i=string.length-1; i >= 0; i--){
        result += string [i];
    }
    return result;
}
    console.log(reverse("Backwords"));
