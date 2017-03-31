///////////////////////////////////////task_3
function recursion() {
    var n=prompt("Input number");

    function sum (n) {
        if (n < 10) {
            return n;
        }
        else {
            return parseInt(n % 10 + sum(n / 10));
        }
    }
     alert("Summa = " + sum(n));
}

recursion();

////////////////////////////////////////task_2
function equation() {
    var a = prompt("Input a");
    var b = prompt("Input b");
    var c = prompt("Input c");

    var d = Math.pow(b, 2) - (4 * a * c);
    if (d > 0){
        var x1 = ((-1) * b + Math.sqrt(d)) / (2 * a);
        var x2 = ((-1) * b - Math.sqrt(d)) / (2 * a);
        alert("x1 = " + x1 + " x2 = " + x2);
    }
    else if (a == 0 && b == 0) {
        alert("Error. Wrong data");
    }
    else if (d === 0){
        x1 = ((-1) * b) / (2 * a);
        alert("x1, x2 = " + x1);
    }
    else{
        alert("Error. D less than zero");
    }

}

equation();


////////////////////////////////////////////task_1

function fname () {
    do {
        name = prompt('Input name: ');
        if (name === null) return 0;
    } while (!isNaN(name) || name === '');
}

function fsurname () {
    do {
        surname = prompt('Input surname: ');
        if (surname === null) return 0;
    } while (!isNaN(surname) || surname === '');
}

function fpatronymic () {
    do {
        patronymic = prompt('Input patronymic: ');
        if (patronymic === null) return 0;
    } while (!isNaN(patronymic) || patronymic === '');
}

function fage () {
    do {
        age = prompt("Input age: ");
        if (age === null) return 0;
    } while (isNaN(age) || age <= 0 || age > 150);
}

function fgender () {
    if (confirm('Are you female?')) {
        gender = 'Female'
    } else {
        gender = 'Male'
    }
}

function funiversity () {
    do {
        university = prompt('Input university: ');
        if (university === null) return 0;
    } while (!isNaN(university) || university === '');
}

function fcourse () {
    do {
        course = prompt("Input course: ");
        if (course === null) return 0;
    } while (isNaN(course) || course <= 0 || course > 6);
}

function farrears () {
    if (confirm('Have you got an arrears?')) {
        arrears = 'Yes'
    } else {
        arrears = 'No'
    }
}

function outputUser () {
    alert("Full name: " + surname + " " + name + " " + patronymic + "\n"
        + "age: " + age + "\n"
        + "university: " + university + "\n"
        + "course: " + course + "\n"
        + "gender: " + gender + "\n"
        + "arrears: " + arrears + "\n");
}

function inputUser () {
    if (fname() === 0) return;
    if (fsurname() === 0) return;
    if (fpatronymic() === 0) return;
    if (fage() === 0) return;
    fgender();
    if (funiversity() === 0) return;
    if (fcourse() === 0) return;
    farrears();
}

inputUser ();
outputUser();