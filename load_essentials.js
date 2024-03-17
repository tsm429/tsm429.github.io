document.getElementById("header").innerHTML = 
    "<h1>Your Website</h1>" + 
    "<nav>" +
        "<a href='index.html'>Home</a>" +
        "<a href='projects.html'>Projects</a>" +
        "<a href=''>Contact</a>" +
    "</nav>";

document.getElementById("footer").innerHTML = 
    "<p>&copy; " + new Date().getFullYear() + " Yoann Bordin</p>"

// document.addEventListener("DOMContentLoaded", function(){
//     document.getElementById("currentYear").textContent = new Date().getFullYear();
// });
