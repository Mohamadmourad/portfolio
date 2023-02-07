
hamburger.addEventListener("click",function fun(){
    navBar.style.display="flex";
});

exit.addEventListener("click",function fun1(){
    navBar.style.display="none";
});

insta.addEventListener("click",function fun1(){
    window.location.href="https://www.instagram.com/mourad511_/";
});

github.addEventListener("click",function fun1(){
    window.location.href="https://github.com/Mohamadmourad";
});

chess.addEventListener("click",function fun1(){
    window.location.href="https://lichess.org/@/mourad511";
});

card.addEventListener("click",function fun1(){
    window.location.href="https://mourad511.netlify.app/";
});

music.addEventListener("click",function fun1(){
    window.location.href="";
});

project1.addEventListener("click",function fun1(){
    window.location.href="https://mouradchesstraining1.netlify.app";
});

project2.addEventListener("click",function fun1(){
    window.location.href="https://mouradflix.netlify.app";
});

project3.addEventListener("click",function fun1(){
    window.location.href="https://mouradlogin.netlify.app";
});

about.addEventListener("click",function fun1(){
    window.location.href="#section3";
});

contact.addEventListener("click",function fun1(){
    window.location.href="#footer";
});
let degrees = 0;
myPhoto.addEventListener("click",function fun1(){
    degrees += 360;
  myPhoto.style.transform = `rotate(${degrees}deg)`;
  myPhoto.style.transition = "3s";
});









