const eventDate = new Date("2026-07-25 14:00:00").getTime();


setInterval(()=>{

const now = new Date().getTime();

const distance = eventDate - now;


if(distance <= 0){

document.getElementById("countdown").innerHTML = "AKCE ZAČÍNÁ";

return;

}



const days = Math.floor(distance / (1000 * 60 * 60 * 24));


const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);


const minutes = Math.floor(
(distance % (1000 * 60 * 60)) / (1000 * 60)
);


const seconds = Math.floor(
(distance % (1000 * 60)) / 1000
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