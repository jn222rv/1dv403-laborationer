"use strict";

var makePerson = function(persArr){


    for(var i = 0; i < persArr.length; i++)
    {
        if(persArr[i].hasOwnProperty("age"))
        {
            if(typeof persArr[i].age != "number")
            {
                persArr[i].age = 0;
            }
        }
        else if(persArr[i].hasOwnProperty("born"))
        {
            if(typeof persArr[i].born != "string")
            {
                persArr[i].born = "2004-11-23";
            }
        }
        if(typeof persArr[i].name != "string")
        {
            persArr[i].name = "John Doe";
        }
    }
    
    var number = 0;
    var namesArr = [];
    
    var newObj = {
        minAge: 0,
        maxAge: 0,
        averageAge: 0,
        names: ""
    };
    
    var compareFun = function compareNumbers(a,b) {
        return a.age - b.age;
    }
    
    var test = function testFun(element, index, array) {
        number += array[index].age;
    }
    
    var nameTest = function nameFun(element, index, array) {
        namesArr.push(array[index].name);
    } 
    
    var compareName = function othercompareFun(a,b) {
        return a.localeCompare(b);
    }
    
    
    persArr.forEach(test);
    persArr.forEach(nameTest);
    
    persArr.sort(compareFun);
    
    namesArr.sort(compareName);
    
    newObj.minAge = persArr[0].age;
    newObj.maxAge = persArr[(persArr.length)-1].age
    newObj.averageAge = Math.round(number/persArr.length);
    newObj.names = namesArr.join(', ');
    
    console.log(newObj);
    
    return newObj;
}

