let progress = 0;

let loading = setInterval(()=>{


progress += 2;


document.getElementById("progress").style.width =
progress + "%";



if(progress >= 100){


clearInterval(loading);


document.getElementById("status").innerHTML =
"ACCESS GRANTED";



setTimeout(()=>{


document.getElementById("loading").style.display="none";


document.getElementById("main").style.display="block";


startCountdown();


},1000);


}


},50);






const eventDate = new Date("2026-07-25 14:00:00").getTime();



function startCountdown(){


setInterval(()=>{


const now = new Date().getTime();

const distance = eventDate - now;



const days = Math.floor(distance/(1000*60*60*24));

const hours = Math.floor(
(distance%(1000*60*60*24))/(1000*60*60)
);


const minutes = Math.floor(
(distance%(1000*60*60))/(1000*60)
);


const seconds = Math.floor(
(distance%(1000*60))/1000
);



daysEl.innerHTML = String(days).padStart(2,"0");
hoursEl.innerHTML = String(hours).padStart(2,"0");
minutesEl.innerHTML = String(minutes).padStart(2,"0");
secondsEl.innerHTML = String(seconds).padStart(2,"0");



},1000);

}



const daysEl=document.getElementById("days");
const hoursEl=document.getElementById("hours");
const minutesEl=document.getElementById("minutes");
const secondsEl=document.getElementById("seconds");