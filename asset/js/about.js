'use strict';
const aboutIntroImg = document.querySelector('.about_area .sc_intro .intro_group .img_wrap');
const aboutIntroTxt = document.querySelector('.about_area .sc_intro .intro_group .txt_wrap');
const aboutIntroTit = document.querySelector('.about_area .sc_intro .intro_group .txt_wrap .title span');
//history
const aboutHisSpot = document.querySelectorAll('.about_area .sc_history>div');
//mv 
const aboutMv = document.querySelector('.about_area .sc_mv .mv');
const aboutMvBtn = document.querySelectorAll('.about_area .sc_mv .state_btn>button');
//cate
const aboutFhWrap = document.querySelector('.about_area .sc_aboutFH .slide_list');
const aboutFhLi = document.querySelectorAll('.about_area .sc_aboutFH .slide_list li');
const aboutFhPrev= document.querySelector('.about_area .sc_aboutFH .control .btn_prev');
const aboutFhNext= document.querySelector('.about_area .sc_aboutFH .control .btn_next');
let currIndex = 0;
let slideIndex = aboutFhLi.length;
let slideWidth = 23
let slideMargin = 2
if(matchMedia("screen and (max-width: 767px)").matches){
    slideWidth = 50
    slideMargin = 4
}else if(matchMedia("screen and (max-width: 1023px)").matches){
    slideWidth = 35
    slideMargin = 3
}
function handleResize() {
    if (window.innerWidth < 768) {
        slideWidth = 50
        slideMargin = 4
        makeClone()
    }else if(window.innerWidth < 1024){
        slideWidth = 35
        slideMargin = 3
        makeClone()
    }
}
function reset(){
    aboutIntroImg.style.opacity = 0;
    aboutIntroImg.style.width = '0';
    aboutIntroTxt.style.opacity = 0;
    for(let r=0;r<aboutHisSpot.length; r++){
        aboutHisSpot[r].style.opacity = 0;
        aboutHisSpot[r].style.transform = 'translateY(15%)';
        if(matchMedia("screen and (max-width: 1023px)").matches){  
            aboutHisSpot[r].style.opacity = 1;
            aboutHisSpot[r].style.transform = 'translateY(0%)';
        }
    }
    aboutMvBtn[0].classList.add('on');
}
function aboutIntroBg(){
    setTimeout(()=>{
        aboutIntroImg.style.opacity = 1;
        aboutIntroImg.style.width = '100%';
        aboutIntroImg.style.transition = '1s ease';
    },100)
    setTimeout(()=>{
        aboutIntroTxt.style.opacity = 1;
        aboutIntroTxt.style.transition = '1s ease'
    },500)

}
function onAboutScroll(){
    for(let h=0;h<aboutHisSpot.length; h++){
        let winHeight = window.innerHeight;
        let scrollNow = document.documentElement.scrollTop;
        let trigeSpot = aboutHisSpot[h].offsetTop;
        let triger = trigeSpot - winHeight;
        let triPer = 0;

        triPer = (scrollNow - triger) / winHeight * 10  
        if( 15 <= triPer){
            aboutHisSpot[h].style.opacity = 1;
            aboutHisSpot[h].style.transform = 'translateY(0)';
            aboutHisSpot[h].style.transition = '1s ease'
        }
    }
}
function makeClone(){
   for(let i = 0; i < slideIndex; i++){
       let  cloneSlide = aboutFhLi[i].cloneNode(true);
       cloneSlide.classList.add('clone')
       aboutFhWrap.appendChild(cloneSlide);
   }
   for(let i = slideIndex -1; i >= 0; i--){
    let cloneSlide = aboutFhLi[i].cloneNode(true);
    cloneSlide.classList.add('clone')
    aboutFhWrap.prepend(cloneSlide)
   }
   updateWidth()
   setIntialPos();
   setTimeout(()=>{
      aboutFhWrap.classList.add('ani');
   },100) 
}
function updateWidth(){
    let currSlideLi = document.querySelectorAll('.slide_wrap li');
    let newSlideIndex = currSlideLi.length;

    let newWidth = ( slideWidth + slideMargin ) * newSlideIndex - slideMargin + 'vw';
    aboutFhWrap.style.width = newWidth;

}
function setIntialPos(){
    let resetPos = -(slideWidth + slideMargin ) * slideIndex;
    aboutFhWrap.style.transform = 'translateX('+ resetPos +'vw)';
}
function onAbSlideBtn(){
    aboutFhNext.addEventListener('click',function(){
        moveSlide(currIndex + 1);
    })
    aboutFhPrev.addEventListener('click',function(){
        moveSlide(currIndex - 1);
    })
}
function moveSlide(num){
    aboutFhWrap.style.left = - num * (slideWidth + slideMargin ) + 'vw';
    currIndex = num;
    console.log(currIndex , slideIndex); 
    
    if(currIndex == slideIndex || currIndex == -slideIndex){

        setTimeout(()=>{
            aboutFhWrap.classList.remove('ani');
            aboutFhWrap.style.left = 0;
            currIndex = 0;
        },500)
        setTimeout(()=>{
            aboutFhWrap.classList.add('ani');
        },600)
    }




}
function onAboutMvBtn(){
    for(let b =0;b < aboutMvBtn.length; b++){

        aboutMvBtn[b].addEventListener('click',()=>{
           if( aboutMvBtn[b].classList.contains('stop')){
               aboutMvBtn[0].classList.remove('on');
               aboutMvBtn[1].classList.add('on');
               aboutMv.pause();
           }else{
               aboutMvBtn[0].classList.add('on');
               aboutMvBtn[1].classList.remove('on');
               aboutMv.play();
           }
        })
   }
}


function addEvent() {
    aboutIntroBg();
    window.addEventListener('scroll',onAboutScroll);
    makeClone();
    onAbSlideBtn()  
    onAboutMvBtn()
    sloganslide(); 
}
function init() {
    reset();
    window.addEventListener('resize', handleResize);
    addEvent()  
}
init();




