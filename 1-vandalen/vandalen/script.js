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
            
            var date = new Date();
            var year = +persArr[i].born.slice(0,4);
            var month = +persArr[i].born.slice(5,7);
            var day = +persArr[i].born.slice(8);
            
            if(date.getMonth()+1<month)
            {
                year += 1;
            }
            else if(date.getMonth()+1===month)
            {
                if(date.getDate()>day)
                {
                    year+=1;
                }
            }
            
            persArr[i].age = date.getFullYear()-year;
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
    
    var compareNum = function compareNumbers(a,b) {
        return a.age - b.age;
    }
    
    var compareName = function compareNames(a,b) {
        return a.localeCompare(b, 'sv');
    }
    
    var totalNum = function numberFun(element, index, array) {
        number += array[index].age;
    }
    
    var nameArr = function nameFun(element, index, array) {
        namesArr.push(array[index].name);
    } 
    
    
    persArr.forEach(totalNum);
    persArr.forEach(nameArr);
    
    persArr.sort(compareNum);
    namesArr.sort(compareName);
    
    newObj.minAge = persArr[0].age;
    newObj.maxAge = persArr[(persArr.length)-1].age;
    newObj.averageAge = Math.round(number/persArr.length);
    newObj.names = namesArr.join(', ');
    
    return newObj;
}




var data = [{name: "John Häggerud", age: 52}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}, {name:"Jonathan Nilsson", born: "1993-08-28"}];

var result = makePerson(data);

console.log(result);