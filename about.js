let now = new Date();

let h6 = document.querySelector("h6");

let date = now.getDate();
let hour = now.getHours();
let minutes = now.getMinutes();
let year = now.getFullYear();


let days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"]
let day = days[now.getDay()];


let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let month = months[now.getMonth()];

h6.innerHTML = `${day} ${month} ${date}, ${hour}:${minutes} ${year}`;