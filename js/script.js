var typed = new Typed(".type",{
    strings: ["MERN Stack Developer","Front End Developer","React Js Developer"],
    typeSpeed:120,
    backSpeed:75,
    showCursor: true,
    cursorChar: '',
    loop:true

})

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    // console.log(document.body.scrollTop)
    console.log(document.documentElement.scrollTop)
    if (document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }