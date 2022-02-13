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



