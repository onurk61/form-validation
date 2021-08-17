//find the highest number of the given array
function highestArrayNum(arr){
    const array = arr.sort();
    console.log(array[arr.length -1]);
    return array[arr.length -1];
}
highestArrayNum([10,100,40040,434235,23]);

//Write a JavaScript function that reverse a number. For example, 1234 => 4321
function reverseNum(number){
console.log(number.toString().split('').reverse().join(''))
}
reverseNum(1134);

// Write a JavaScript function that checks whether a passed string is palindrome or not? A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
function palindrome(word){
    if(word.toLowerCase() === (word.toLowerCase().split('').reverse().join(''))){
        console.log('Palindrome : ' + word);
    }
    console.log('Not palindrome : ' + word);
}
palindrome('Onur');
palindrome('Radar');
palindrome('Mom');


//Write a JavaScript function that returns a passed string with letters in alphabetical order. 
function alphabetic(word){
    console.log(word.toLowerCase().split('').sort().join(''))
}
alphabetic('Onur Kanca');
alphabetic('webmaster')

//Write a JavaScript function that returns a passed string with letters in alphabetical order. For example, 'the quick brown fox' => 'The Quick Brown Fox'
function camelCase(word){
    const arr = word.split(' ');
    const newArr = [];
    console.log(arr)
    for(let i = 0 ; i < arr.length; i++){
        newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));
    }
    newArr.join('');
    console.log(newArr.join(' '))

}
camelCase('The quick brown fox jumps over the lazy dog.');

/* 
-The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.
-The String object's charAt() method returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.
-The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
-The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
-The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found
*/

//Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function longestWord(word){
    console.log('Longest word in the sentence is : ' + word.split(' ').sort((a,b) => b.length - a.length)[0]);
}
longestWord('Web Development Tutorial');

// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVovel(word){
    let vovels = 'aeiou';
    let count = 0;
    let wordLowerCase = word.toLowerCase();
    for(let i = 0 ; i < wordLowerCase.length; i++){
        if(vovels.indexOf(wordLowerCase[i]) !== -1){
            count++;
        }
    }
    console.log('Vovels Number : ' + count);
}
countVovel('The quick brown fox');


//function returns the type of given value
function typeOfGivenValue(val){
    console.log(typeof val)
}
typeOfGivenValue(1);
typeOfGivenValue('Onur');

//Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.
function findSecondLowestAndHighest(arr){
    let newArr = arr.sort((a,b)=> a-b);
    console.log(newArr)
    let asd = newArr[1];
    let dsa = newArr[newArr.length -2];
    console.log(asd, dsa);

}
findSecondLowestAndHighest([6,4,37,2,1,23,5]);
//girilen input object date mi diye kontrol et
function d (input){
    if( Object.prototype.toString.call(input) === "[object Date]")
    return true;
    return false;
};

console.log(d("October 13, 2014 11:13:00"));
console.log(d(new Date(86400000)));
console.log(d(new Date(99,5,24,11,33,30,0)));
console.log(d([1, 2, 4, 0]));

//get the current Date
function currentDate(sp){
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();

    if(dd<10) dd = '0' + dd;
    if(mm<10) mm= '0' +mm;
    return (mm+sp+dd+sp+yyyy);
}

console.log(currentDate('/'));
console.log(currentDate('-'));

//Write a JavaScript function to get the number of days in a month.

function getDaysInMonth(month,year){
    return new Date(year,month,0).getDate();
}

console.log(getDaysInMonth(1, 2012));
console.log(getDaysInMonth(2, 2012));
console.log(getDaysInMonth(9, 2012));
console.log(getDaysInMonth(12, 2012));

// Write a JavaScript function to get the month name from a particular date.
function monthOfGivenDate(dt){
    mlist= ["January","February","March","April","May","June","July","August","September","October","November","December"];
    return mlist[dt.getMonth()];
}
console.log(monthOfGivenDate(new Date("10/11/2009")));
console.log(monthOfGivenDate(new Date("11/13/2014")));

//date difference in days
function differenceDates(date1,date2){
    dt1 = new Date(date1);
    dt2= new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(),dt2.getMonth(),dt2.getDate())- Date.UTC(dt1.getFullYear(),dt1.getMonth(),dt1.getDate()))/(1000 * 60 * 60 * 24))
}
console.log(differenceDates('04/02/2014', '11/04/2014'));
console.log(differenceDates('12/02/2014', '11/04/2014'));
// Borrowed Book example
function borrowedBook(givenDate, limit){
    let asd = document.querySelector('h3').innerHTML;
    let dsa = document.querySelector('h4');
    let date2 = new Date (givenDate);
    date = new Date(asd);
    let dateDif = Math.floor((Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())- Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()))/(1000 * 60 * 60 * 24));
    if(dateDif <= 14) {
        return dsa.innerHTML = 'You still have time for returning the book !';
    } else {
        dsa.style.backgroundColor = 'red';
        dsa.style.color = 'white';
        dsa.style.padding = '10px';
        dsa.style.fontSize = '20px';
        return dsa.innerHTML = 'You exceed the borrowed limit. Please return your book back !'
    }
}
console.log(borrowedBook('11/25/2014'),14)
console.log(borrowedBook('11/1/2014'),20)
console.log(borrowedBook('12/6/2014'),4)




function ooo (date,limit){
    let deneme = [...document.getElementsByTagName('tr')];    
    let dnnnn = deneme.forEach(text => {
       let asd = new Date(text.children[1].innerHTML);
       let dt2 = new Date(date);
       let dateDiff = Math.floor(((Date.UTC(dt2.getFullYear(),dt2.getMonth(),dt2.getDate())) -(Date.UTC(asd.getFullYear(),asd.getMonth(),asd.getDate()))) / (1000*60*60*24));
       if(dateDiff <= limit){
           text.children[2].innerHTML = "Hala Süreniz Var";
       }else {
           text.children[2].innerHTML = "Süreyi Aştınız !";
       }
    });
}

ooo('10/12/2021',5);
ooo('11/30/2021',45);
ooo('9/21/2021',15);



function is_array(input){
   if(toString.call(input) === '[object Array]') return true;
   return false;
}

console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
console.log(is_array({name: 'onur'}));