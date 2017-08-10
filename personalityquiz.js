function Tiffani(){
var points=0;
var choice1=document.querySelector('input[name="q1"]:checked').value;
if(choice1=="The Lion King"){
  points=points+20;
}
var choice2=document.querySelector('input[name="q2"]:checked').value;
if (choice2=="Lion"){
  points==points+20;
}

var choice3=document.querySelector('input[name="q3"]:checked').value;
if(choice3=="SQUAD MOM"){
  points==points+20;
}
var choice4=document.querySelector('input[name="q4"]:checked').value;
if (choice4=="Irritated"){
points==points+20;
}
var choice5=document.querySelector('input[name="q5"]:checked').value;
if (choice5=="confident"){
  points==points+20;
}
alert("You are "+points+"% Tiffani");

}
