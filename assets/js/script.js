// Humburger Starts Here
function Show() {
  document.getElementById("show").style.display = "block";
  document.getElementById("hum").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.getElementById("btn").style.position = "fixed";
  document.getElementById("logo").style.display = "none";
  document.getElementById("clock").style.display = "none";
  document.getElementById("day").style.display = "none";
  document.getElementById("date").style.display = "none";
}

function Close() {
  document.getElementById("show").style.display = "none";
  document.getElementById("hum").style.display = "block";
  document.getElementById("btn").style.position = "relative";
  document.getElementById("logo").style.display = "block";
  document.getElementById("clock").style.display = "initial";
  document.getElementById("day").style.display = "block";
  document.getElementById("date").style.display = "initial";
}
// Humburger Close Here

// Create Function For Clock
function showTime() {
  // Variable
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var session = "AM";

  // AM OR PM
  if (h >= 12) {
    session = "PM";
  }

  // After 12 Not 13, It is 01
  if (h > 12) {
    h = h - 12;
  }

  // With show in 0
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  // Calculate
  var time = h + " : " + m + " : " + s + " " + session;

  // Print
  document.getElementsByTagName("p")[0].innerText = time;
  document.getElementsByTagName("p")[2].innerHTML = d.getDate();

  // Time Duration
  setTimeout(showTime, 1000);
}
// Clock Close Here

// For Printng Story
function print() {
  window.print();
}
// Ends Printing Story

// Start Day Here
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementsByTagName("p")[1].innerHTML = day;
// Close Day Here

// Banner Slider Starts Here
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Banner Slider Ends Here

// For search bar
function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
// Close search

// Subscribe EmailJS
function sendMail() {
  var params = {
    email_id1: document.getElementById("emailjs").value,
  };
  emailjs
    .send("service_5bfiwcg", "template_5f2i4tr", params)
    .then(function (res) {
      alert("Success!!!" + res.status);
    });
}
