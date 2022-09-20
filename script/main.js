/*const arrStudentNames = [
    "York van Belkum", 
    "Jonas de Bruin", 
    "Djarno Eijkenboom", 
    "Jesse Gerritsen", 
    "Maarten van de Goor",
    "Julian van den Heuvel",
    "Tymon Kąkol",
    "Fernando Kok",
    "Jesse de Kok",
    "Vincent Kok",
    "Kyan Mensen",
    "Remco Michels",
    "Stan Nooijen",
    "Kiefer Perquin",
    "Lusi Ryborz",
    "Kevin Pladdet",
    "Stef Schalks",
    "Sam Singels",
    "Pim Slegers",
    "Tom Smulders"
];*/

var mydata = JSON.parse(data);
console.log(mydata[0].name);
console.log(mydata[0].age);
console.log(mydata[1].name);
console.log(mydata[1].age);

mydata.sort();
var arrayCount = mydata.length;

for(var i = 0; i < arrayCount; i++)
{
    document.getElementById("bodyContent").innerHTML += "<br/>" + i + "&nbsp;<b>" + mydata[i].name +  "</b>";
}

document.getElementById("bodyContent").innerHTML += "<hr/><b>There are : " + arrayCount + " students in this class!!</b>";

