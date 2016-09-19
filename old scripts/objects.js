//

var person ={
    firstName : " Melissa ",
    lastName : "Anderson",
    email: "boxers1977@hotmail.com",
    phone: "606.205.5282",
    birthday: "07.22.1977",
    fullName  :function() {
        return firstName + " " + lastName;
    }
};

function printDetails (p) {
    console.log(p.email);
    console.log(p.firstName);
    console.log(p.lastName);
    console.log(p.phone);
    console.log(p.birthday);
          }
printDetails(person);
console.log(person.fullName());


//teachers
