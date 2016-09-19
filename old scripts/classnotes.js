//NOTES  

var person ={
    firstName : " Melissa ",
    lastName: "Anderson",
    email: "boxers1977@hotmail.com",
    phone: "606.205.5282",
    birthday: "07.22.1977"
};

function printDetails (p) {
    console.log(p.email);
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.birthday);
}

// added
var firstName = "Auri";
var lastName = "Rahimzadeh";
var email = "auri@auri.net";
var phone = "317.490.4321";

var person = {
    firstName : "Auri",
    lastName : "Rahimzadeh",
    email : "auri@auri.net",
    phone : "317.490.4321",
    fullname : function() {
        return firstName + " " + lastName;
    }
};

function printDetails (p) {
    console.log(p.email);
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.fullname());
} 
printDetails(person);

console.log(person.fullname());