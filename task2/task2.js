/**
 * Created by vikyf on 3/31/2017.
 */


//////////////Task1
function findMin3() {
    var min3 = [];
    min3 = prompt("Input value of the array with a space: ", "");
    min3 = min3.split(' ');
    if(min3.length < 3){
        alert("Array must be more than 2 value")
    }
    else{
        min3.sort();
        alert("3 minimum value of the array = " + min3[2]);
    }
}

findMin3();


/////////////Task2
function uniqueBy(arr, fn) {
    var unique = {};
    var distinct = [];
    arr.forEach(function (x) {
        //var key = prompt("Select filter value: ");
        key = fn(x);
        if (!unique[key]) {
            distinct.push(key);
            unique[key] = true;
        }
    });
    return distinct;
}

var array =
    [
        {"name" : "Ivan", "age" : 18, "gender": "male"},
        {"name" : "Viktoria"},
        {"name" : "Ivan", "age" : 18},
        {"name" : "Viktoria", "age" : 20},
        {"name" : "Viktor", "age" : 17, "university" : "BSUIR"},
        {"name" : "Viktor", "university" : "BSUIR"}
    ];

    uniqueBy(array, function(x){
                    return x.age;
        });



