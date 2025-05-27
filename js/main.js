let flag=false;
// hover Navbar
var navparbutton=Array.from(document.querySelectorAll(".containner .main-nav > li > a"));
var removhover=document.getElementsByClassName("activetnavbar");
// for( x of removhover){
//     x.classList.remove("activetnavbar");
// }
for(var i=0;i<navparbutton.length;i++){

    navparbutton[i].addEventListener('click',function (){
        for( x of removhover){
            x.classList.remove("activetnavbar");
        }
        this.classList.add("activetnavbar");
        console.log(this)
    }
)
}


// cv
var closecv=document.getElementById("closs");
var tapcv=document.getElementById("cvph"); 
var openbuttoncv=document.getElementById("cvbutton");

openbuttoncv.addEventListener('click',openTap)
function openTap(){
    tapcv.style.display = 'inline';
}

closecv.addEventListener('click',closTap)
function closTap(){
    tapcv.style.display = 'none';
}
// certification
var closeCeertification=document.getElementById("closss");
var tapcertification=document.getElementById("crph"); 
var openbuttoncertification=document.getElementById("vrbutton");

openbuttoncertification.addEventListener('click',openTapn)
function openTapn(){
    tapcertification.style.display = 'inline';
}
closeCeertification.addEventListener('click',closTap1)
function closTap1(){
    tapcertification.style.display = 'none';
}


// // scroling in Skill Selection
let spanss=Array.from(document.querySelectorAll('.skills .containner .half-two .square span'));
let Sectionnss=document.getElementById('skills');
window.onscroll = function () {
if (window.scrollY >= Sectionnss.offsetTop)
{
    for(var a=0;a<spanss.length;a++){
        spanss[a].style.width=spanss[a].dataset.width;
        }
}





















// scroling in Other Selection
let textscroll=Array.from(document.querySelectorAll('.Outherr .containner .bag .number'));
let tex=document.querySelector('.Outherr .containner .bag .number');
let Sectionns=document.getElementById('Outherr');

if (window.scrollY >= Sectionns.offsetTop&&!flag)
{
    textscroll.forEach((num) => startCount(num));

flag=true;
       
}


// Scrolling Up
let up = document.getElementById("uppage");
    if(window.scrollY>400){
     up.style.display='flex'
    }
    else{
        up.style.display='none'
    }
up.addEventListener('click',function(){
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    
    })
})

}

function startCount(e){
    let count =setInterval(function(){
        +e.textContent++;
        if (+e.textContent === +e.dataset.quality) {
          clearInterval(count);
        }
       
    },2000/e.dataset.quality)
}
