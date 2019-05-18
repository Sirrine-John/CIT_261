let firstName = "Tim";
let lastName = "Thayne";
let iNumber = "123456789";

function logToConsole(fName, lName, iNum){
    console.log(fName);
    console.log(lName);
    console.log(iNum);
}

logToConsole(firstName,lastName,iNumber);

//CLASS CREATION
class Student{
    constructor(firstName,lastName,iNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.iNumber = iNumber;
    }
    log = function(){
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.iNumber);
    }
}

//CLASS IMPLEMENTATION
let student1 = new Student(firstName,lastName,iNumber);
let student2 = new Student("John","Sirrine","987654321");
let student3 = student2;
student3.firstName = "LJ";

function logToConsoleClass(student){
    console.log(student.firstName);
    console.log(student.lastName);
    console.log(student.iNumber);
}

logToConsoleClass(student1);
student1.log();
student2.log();

let students = [];
students.push(student1);
students.push(student2);
students.push(student3);

console.table(students);

let studentTable = document.querySelector("#students");

function create_header(){
    trHeadStudent = document.createElement("tr");
    thHeadFirstName = document.createElement("th");
    thHeadLastName = document.createElement("th");
    thHeadiNumber = document.createElement("th");

    thHeadFirstName.innerText = "First Name";
    thHeadLastName.innerText = "Last Name";
    thHeadiNumber.innerText = "iNumber";
    
    trHeadStudent.appendChild(thHeadFirstName);
    trHeadStudent.appendChild(thHeadLastName);
    trHeadStudent.appendChild(thHeadiNumber);

    studentTable.appendChild(trHeadStudent);
}

create_header();


students.forEach(
    student => {
        trStudent = document.createElement("tr");
        tdFirstName = document.createElement("td");
        tdLastName = document.createElement("td");
        tdiNumber = document.createElement("td");

        tdFirstName.innerText = student.firstName;
        tdLastName.innerText = student.lastName;
        tdiNumber.innerText = student.iNumber;

        trStudent.appendChild(tdFirstName);
        trStudent.appendChild(tdLastName);
        trStudent.appendChild(tdiNumber);

        studentTable.appendChild(trStudent);
    }
);
