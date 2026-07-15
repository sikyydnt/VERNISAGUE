let progress = 0;


const loading = setInterval(()=>{


progress++;


document.getElementById("progress").style.width =
progress+"%";



if(progress >= 100){


clearInterval(loading);



document.getElementById("status").innerHTML =
"ACCESS GRANTED";



setTimeout(()=>{


document.getElementById("loading").style.display="none";


document.getElementById("main").style.display="block";


startCountdown();



},1200);



}



},35);







const eventDate =
new Date("2026-07-25 14:00:00").getTime();



function startCountdown(){


setInterval(()=>{


let now = new Date().getTime();


let distance = eventDate-now;



if(distance <= 0){

document.getElementById("countdown").innerHTML =
"<h2>VERNISAGUE IS LIVE</h2>";

return;

}




let days =
Math.floor(distance/(1000*60*60*24));


let hours =
Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);



let minutes =
Math.floor(
(distance%(1000*60*60))/(1000*60)
);



let seconds =
Math.floor(
(distance%(1000*60))/1000
);



document.getElementById("days").innerHTML =
String(days).padStart(2,"0");


document.getElementById("hours").innerHTML =
String(hours).padStart(2,"0");


document.getElementById("minutes").innerHTML =
String(minutes).padStart(2,"0");


document.getElementById("seconds").innerHTML =
String(seconds).padStart(2,"0");



},1000);


}