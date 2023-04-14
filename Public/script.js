addEventListener("scroll", (event) => {});

if(500<document.documentElement.clientWidth){
onscroll = (event) => {   if(window.scrollY != 0)
  {document.getElementById('Logos').style.width= "15%";
  document.getElementById('complogo').style.margin= "0";}else{
  document.getElementById('Logos').style.width= "25%";
  document.getElementById('complogo').style.margin= "1em 0em 1em 0em";
  }
};
}


  if(500>document.documentElement.clientWidth){
    console.log("resizing window");

  // Get HTML content
  document.getElementById('navbar').outerHTML = `
  <div id="navbar" class="navbar">
  <a href="/" id="Logos" style="width: 50%;justify-items: center;"><img  src="./Public/logo-clear.png" id="complogo" style="margin:.5em 0em .5em 0em;" class="logo" alt="cano electric"></a>
  </div>
  <nav role="navigation" style="
  top: 2em;
  left:1.6em;
  position:fixed;
  z-index: 2;">
  <div id="menuToggle">
    <!--
    A fake / hidden checkbox is used as click reciever,
    so you can use the :checked selector on it.
    -->
    <input type="checkbox" />
    
    <!--
    Some spans to act as a hamburger.
    
    They are acting like a real hamburger,
    not that McDonalds stuff.
    -->
    <span></span>
    <span></span>
    <span></span>
    
    <!--
    Too bad the menu has to be inside of the button
    but hey, it's pure CSS magic.
    -->
    <ul id="menu">
      <a href="https://construction-calculator.herokuapp.com/"><li>Construction Calculator</li></a>
      <a href="https://construction-calculator.herokuapp.com/even-spaced"><li>Find Even Spacing</li></a>
    </ul>
  </div>
</nav>

  `;}


