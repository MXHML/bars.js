# Bars.js

Welcome to my first project intended to be distributed and used by others!
I know this idea has been done before, but I wanted to try for myself and see if I can be successfull!
If you have any way of improving my code, please create a pull request, I'm always open to improving my code, no matter what stage of development.

# Setup

As hard as I tried to keep bars.js in vanilla JS, I eventually figured using jQuery wouldn't hurt.

>To use jQuery, please visit their [site](https://jquery.com/)

>This project was made using jQuery 3.6.3. I will keep the README file updated with the version it is currently using.

>(NOTE, you do NOT necessarily have to use the same version of jQuery, so long as whatever version you use supports some basic jQuery functions.)

1) In your HTML code, create a <canvas> element with the ID "barsJs-canvas" 

```
<canvas id="barsJs-canvas"></canvas>
```

2) AFTER your link to jQuery, link bars.js.

```
<script src="jQueryfile.js"></script>
<script src="bars.js"></script>
```

3) Before bars.js is needed, please call the barsInit() function. This can be done on page load if you'd like.

###### jQuery
```
$(document).ready(function(){
  barsInit();
});
```

###### Vanilla JS
```
document.addEventListener("load",function(){
  barsInit();
})
```
