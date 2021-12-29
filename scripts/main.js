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

  //intro//
  function intro0() {
    let intro = '<h3>Hi there!</h3>I am still a beginner programmer. But I am a curious learner, and will continue to be. I am so excited to work as a programmer as it is so much fun and I just fell in love with coding. Press the 2 subtitles to know more about me!'

    document.getElementById("intro").innerHTML = intro;
  }

function intro1() {
    let intro = 'Coding and programming are super interesting and full of excitement! <br><br> I finshed the <a target="_blank" href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x">CS50x</a> programme on October 2021, the Certificate in Mobile Application Developer Training on December 2021, and working hard on <a target="_blank" href="https://www.edx.org/professional-certificate/harvardx-computer-science-for-web-programming">CS50’s Web Programming with Python and JavaScript</a> course recently. <br><br> I am working on an Auction web application that allows users to post auction items, place bids on items, comment on those items, and add items to a "watchlist". '+ "This is the sixth web app I've designed."

    document.getElementById("intro").innerHTML = intro;
}

function intro2() {
    let intro = "<p>In fact, I do love my career in social work. I loved my team, the projects I was doing, and the clients I worked with. I enjoy helping people by recognizing their strengths and needs as to deal with their life's challenges. They may facing similar problems, but ways to overcome could be totally different. Just like programming. There could have thousand ways to solve the same problem.</p>"+
    "<p>The Working Holiday experience in Japan changed my life. By fully immersed myself into another country, culture and way of life, I realized that social work is not the only way to help others. By starting my programming journey, I love the infinite possibilities made by programming immediately. It is not only about 0s and 1s, but also the thinking skill which breaking down large, complex problems into simple pieces. Similar to Social Work.</p>"+
    "<p>I still consider myself a social worker as many social work values and skills align with mine. Those experience and soft skills would be integrated in my programming journey. I will continue helping others, but in a different way.</p>"

    document.getElementById("intro").innerHTML = intro;
}

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
