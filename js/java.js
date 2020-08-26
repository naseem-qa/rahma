/* 'use strict ;' */

function naseem() {

    var ans = prompt('How R U ?');

while ( ans !== 'good' && ans !== 'bad' ){
    ans = prompt ('try, good, bad ');
}
}
naseem();
// document.write('<h3>' + naseem() + '</h3>');

function myFunction1(){
    var time = prompt('Type number:');
    if (time >10){
        for (var i = 0; i <5; i++) {
         var text ='Type number:' + time + "<br>";
         return text;
        }
    } else{
       nn = prompt (' less than 10 ');
        return  nn ;
    }
}
myFunction1();
document.write('<h3>' +  myFunction1() + '</h3>');
