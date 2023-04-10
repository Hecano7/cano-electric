addEventListener("scroll", (event) => {});

onscroll = (event) => {   if(window.scrollY != 0)
  {document.getElementById('Logos').style.width= "15%";
  document.getElementById('complogo').style.margin= "0";}else{
  document.getElementById('Logos').style.width= "25%";
  document.getElementById('complogo').style.margin= "1em 0em 1em 0em";
  }
};




  if(500>screen.width){
    let greeting = document.querySelector('.navbar');

// Get HTML content
  greeting.outerHTML = `
  <div class="navbar">
  <a href="/" id="Logos" style="width: 50%;"><img  src="./Public/logo-clear.png" id="complogo" style="margin:.5em 0em .5em 0em;" class="logo" alt="cano electric"></a>
  </div>
  `;}

