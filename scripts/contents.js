//Back to top button//
topbtn = document.getElementById("topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    topbtn.style.display = "block";
  } else {
    topbtn.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}

//Footer//

let _footer="<p style='font-weight: 400' class='mid'> &copy; Coco Woo &nbsp; &#8226; &nbsp; Hong Kong &nbsp;</p>";


  document.getElementById("_footer").innerHTML = _footer;


//navbar content//
let nav = '<nav class="navbar navbar-expand-lg navbar-dark workheadnav">'+
    '<a class="navbar-brand" href="../index.html">Coco Woo</a>'+
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">'+
        '<span class="navbar-toggler-icon"></span></button>'+
      '<div class="collapse navbar-collapse" id="navbarNavAltMarkup">'+
        '<ul class="navbar-nav ml-auto mid">'+
          '<li class="nav-item"><a class="nav-link un" href="../index.html">WORK </a></li>'+
          '<li class="nav-item"><a class="nav-link un" href="../info.html">INFO</a></li>'+
          '<li class="nav-item"><a href="https://www.linkedin.com/in/cocowoo" target="_blank" class="nav-link"><i class="fa fa-linkedin"></i></a></li>'+
        '</ul></div></nav>';

document.getElementById("nav").innerHTML = nav;

