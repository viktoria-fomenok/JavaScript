/**
 * Created by vikyf on 4/3/2017.
 */

var UseLocalStorage = (function module() {
    var user = [ { key : "value1"},
        { key : "value2"},
        { key : "value3"},
        { key : "value4"},
        { key : "value5"},
        { key : "value6"}
    ];

    function add() {
        localStorage.clear();
        for(var i = 0; i < user.length; i++) {
            var obj = JSON.stringify(user[i]);
            localStorage.setItem(user[i].key, obj);
        }
        console.log(localStorage);
    }

    function set() {
        add();
        localStorage.setItem("value2", "key");
        console.log(localStorage);
    }

    function get() {
        add();
        var returnValue = JSON.parse(localStorage.getItem("value1"));
        console.log(returnValue);
    }

    function addItem() {
        add();
        localStorage.setItem("value7", "key");
        console.log(localStorage);
    }

    function clear() {
        add();
        localStorage.clear();
        console.log(localStorage);
    }

    function getAllVersion1() {
        add();
        var returnAllValue = JSON.parse(localStorage.getItem(user.key));
        console.log(returnAllValue);
    }

    function getAllVersion2() {
        localStorage.clear();
        var obj = JSON.stringify(user);
        localStorage.setItem(user.key, obj);
        var returnAllValue = JSON.parse(localStorage.getItem(user.key));
        console.log(returnAllValue);
    }

    function remove(){
        add();
        //newValue = prompt(localStorage + "Remove value: ");
        localStorage.removeItem("value2");
        console.log(localStorage);
    }

    return{
        add : add,
        set : set,
        get : get,
        addItem : addItem,
        clear : clear,
        getAllVersion1 : getAllVersion1,
        getAllVersion2 : getAllVersion2,
        remove : remove
    };
}) ();

UseLocalStorage.clear();

//Test
/*
 UseLocalStorage.add();
 UseLocalStorage.set();
 UseLocalStorage.get();
 UseLocalStorage.addItem();
 UseLocalStorage.clear();
 UseLocalStorage.getAllVersion1();
 UseLocalStorage.getAllVersion2();
 UseLocalStorage.remove();
*/









