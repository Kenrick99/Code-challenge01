/*Challenge 1: Student Grade Generator (Toy Problem)
Write that prompts the user to input student marks. The input should be between 0 and 100. Then output the correct grade: 

A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

 */

//creating program to generate student grade
/*
as follows:
A > 79
 B - 60 to 79
C -  59 to 49
D - 40 to 49
E - less 40
*/
//declare function

const prompt = require('prompt-sync')();

let studentGrade = (prompt("Please enter the grade"));
//use conditional statement 

if (studentGrade>79 && studentGrade<=100 ) {
    console.log("A");
    
} else if (studentGrade>=60 && studentGrade<79) {
    console.log("B");
    
}
else if (studentGrade>=49 && studentGrade<=59){
    console.log("C");
}
else if (studentGrade>=40 && studentGrade<49){
    console.log("D");

}
else if (studentGrade>0 && studentGrade<49){
    console.log("E");
}
else console.log("Invalid Grade");