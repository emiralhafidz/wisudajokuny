//Navigasi Hamburger
const hamburger = document.querySelector('.hamburger');
const navigasi = function(){
    navBar = document.querySelector('.navigasi');
    navBar.classList.toggle('active');
}
hamburger.addEventListener('click', navigasi);


// ketika pengguna scroll ke bawah, munculkan navbar
// ketika pengguna scroll ke atas, navbar di hilangkan
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navBar").style.top = "0";
  } else {
    document.querySelector(".navBar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
}

//Event tempat
const tempat = document.querySelector('.event > .kontainer > .kol-2');
const klik = function(){
  tempat.style.backgroundColor = "blue";
}
tempat.addEventListener('click',klik)


// Count down Timer
// Set a valid end date
var countDownDate = new Date("March 09, 2023 23:37:25").getTime();

// Update the count down every 1 second 
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate Remaining Time
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id
  document.querySelector(".hari").innerHTML = days + "H";
  document.querySelector(".jam").innerHTML = hours + "H";
  document.querySelector(".menit").innerHTML = minutes + "M";
  document.querySelector(".detik").innerHTML = seconds + "S";

  // If the countdown is finished, write some text
  if (distance < 0) {

    clearInterval(x);
    document.querySelector(".hari").innerHTML = "00";
    document.querySelector(".jam").innerHTML = "00";
    document.querySelector(".menit").innerHTML ="00";
    document.querySelector(".detik").innerHTML ="00";
  }
}, 1000);



