//Web Application//
let webIndex =   [
    /*{
        pj:"Auction",
        tool:"HTML, CSS, SQLite, Python, Django, jQuery",
        img:"'images/web/coming.png'",
        link:"'#'"
    },*/
    {
        pj:"Encyclopedia",
        tool:"HTML, CSS, SQLite, Markdown, Python, Django, jQuery",
        img:"'images/web/wiki1.png'",
        link:"'web/Encyclopedia.html'",
    },
    {
        pj:"Expense Tracker",
        tool:"HTML, CSS, SQLite, Python, Flask, JavaScript",
        img:"'images/web/expensetracker1.png'",
        link:"'web/expensetracker.html'",
    },
       {
        pj:"Clone project - Google Search",
        tool:"HTML, CSS",
        img:"'images/web/clonecocgle.png'",
        link:"'web/clonegoogle.html'",
    }, 
    {
        pj:"Stock Trading",
        tool:"HTML, CSS, SQLite, Python, Flask",
        img:"'images/web/stock1.png'",
        link:"'web/stocktrading.html'",
    },

   ]
   

let webpj="";
 for(let i = 0; i < webIndex.length; i++){
 		let web = {
    	pj: webIndex[i].pj,
        tool: webIndex[i].tool,
        img: webIndex[i].img,
        link: webIndex[i].link,
    }
      webpj +=  "<div><a href=" + web.link +"><img src=" + web.img +"><br>" +
      "<p  class='title'>" + web.pj + "</p>" + web.tool + "</a></div>" 
      ;

 }
  document.getElementById("webpj").innerHTML = webpj;

 
//Mobile//
  let mbIndex =   [
    {
        pj:"Ecommerce Mobile App",
        tool:"iOS • Android | Ionic, Angular, Laravel(PHP)",
        img:"'images/app/tea.png'",
        link:"'app/tea.html'"
    },
   ]
   

let mbpj="";
 for(let i = 0; i < mbIndex.length; i++){
 		let mb = {
    	pj: mbIndex[i].pj,
        tool: mbIndex[i].tool,
        img: mbIndex[i].img,
        link: mbIndex[i].link,
    }
      mbpj += "<div><a href=" + mb.link +"><img src=" + mb.img +"><br>" +
      "<p  class='title'>" + mb.pj + "</p>" + mb.tool + "</a></div>" 
      ;
 }
  document.getElementById("mbpj").innerHTML = mbpj;


//Art//
  let artIndex =   [
    {
        pj:"New Year Postcard 2022",
        tool:"MediBang Paint",
        img:"'images/art/newyear2022/front.JPG'",
        link:"'art/newyear2022.html'",
    },
    {
        pj:"Christmas Card 2021",
        tool:"MediBang Paint",
        img:"'images/art/christmas2021/front.png'",
        link:"'art/xmas2021.html'",
    },
    {
        pj:"Logo, product design",
        tool:"AI, PS",
        img:"'images/art/tea/tealogom.png'",
        link:"'art/tea.html'"
    },
    {
        pj:"VR box design",
        tool:"AI, PS",
        img:"'images/art/vr/front1.jpg'",
        link:"'art/vrbox.html'",
    },
    {
        pj:"New Year Postcard 2021",
        tool:"MediBang Paint",
        img:"'images/art/newyear2021/front.PNG'",
        link:"'art/newyear2021.html'",
    },
    {
        pj:"Instagram icon",
        tool:"MediBang Paint",
        img:"'images/art/ig_zsj/icon.PNG'",
        link:"'art/ig_zsj.html'",
    },
    {
        pj:"Birthday Card 2020",
        tool:"MediBang Paint",
        img:"'images/art/kimetsu/front.png'",
        link:"'art/bd2020.html'",
    },
    {
        pj:"Instagram icon",
        tool:"MediBang Paint",
        img:"'images/art/ig_os/icon.PNG'",
        link:"'art/ig_os.html'",
    },
    {
        pj:"Christmas Card 2019",
        tool:"MediBang Paint",
        img:"'images/art/christmas2019/back.png'",
        link:"'art/xmas2019.html'",
    },
    {
        pj:"Life Story Book 2017",
        tool:"MediBang Paint",
        img:"'images/art/lsb/End.png'",
        link:"'art/lsb2017.html'",
    },
    {
        pj:"Tote bag design 2015",
        tool:"AI",
        img:"'images/art/sheep/sheepai.jpg'",
        link:"'art/totebag2015.html'",
    },
   ]
   

let artpj="";
 for(let i = 0; i < artIndex.length; i++){
 		let art = {
    	item: i+1,
    	pj: artIndex[i].pj,
        tool: artIndex[i].tool,
        img: artIndex[i].img,
        link: artIndex[i].link,
    }
    artpj += "<div><a href=" + art.link +"><img src=" + art.img +"><br>" +
      "<span><p  class='title'>" + art.pj + "</p>" + art.tool + "</span></a></div>" 
      ;
 }
  document.getElementById("artpj").innerHTML = artpj;

