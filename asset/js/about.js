'use strict';//
window.onload = function(){ 
    reset();
    headReset()
    headerBgc();
    aboutIntroBg()
    sloganslide(); 
    footer()

};
const aboutIntroImg = document.querySelector('.about_area .sc_intro .intro_group .img_wrap');
const aboutIntroTxt = document.querySelector('.about_area .sc_intro .intro_group .txt_wrap');
const aboutIntroTit = document.querySelector('.about_area .sc_intro .intro_group .txt_wrap .title span');
window.onresize = function(){
    document.location.reload();
    window.scrollTo(0, 0);
  };

function reset(){
    aboutIntroImg.style.opacity = 0;
    aboutIntroImg.style.width = '0';
    aboutIntroTxt.style.opacity = 0;
    aboutIntroTit.style.transform = 'translateY(100%)';

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

//intro
function aboutIntroBg(){
    setTimeout(()=>{
        aboutIntroImg.style.opacity = 1;
        aboutIntroImg.style.width = '100%';
        aboutIntroImg.style.transition = '1s ease';
    },100)
    setTimeout(()=>{
        aboutIntroTxt.style.opacity = 1;
        aboutIntroTxt.style.transition = '1s ease'
        setTimeout(()=>{
            aboutIntroTit.style.transform = 'translateY(0%)';
            aboutIntroTit.style.transition = '.5s ease'
        },500)
    },500)

}
//scroll history
const aboutHisSpot = document.querySelectorAll('.about_area .sc_history>div');

window.addEventListener('scroll',()=>{
    for(let h=0;h<aboutHisSpot.length; h++){

        let winHeight = window.innerHeight;
        let scrollNow = document.documentElement.scrollTop;
        let trigeSpot = aboutHisSpot[h].offsetTop;
        let triger = trigeSpot - winHeight;
        let triPer = 0;

        triPer = (scrollNow - triger) / winHeight * 10  
       // console.log(triPer);
        if( 15 <= triPer){
            aboutHisSpot[h].style.opacity = 1;
            aboutHisSpot[h].style.transform = 'translateY(0)';
            aboutHisSpot[h].style.transition = '1s ease'
        }
    }

})

//mv 
const aboutMv = document.querySelector('.about_area .sc_mv .mv');
const aboutMvBtn = document.querySelectorAll('.about_area .sc_mv .state_btn>button');

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
  
window.onresize = function(){
document.location.reload();
};

makeClone();

function makeClone(){
    //복사본
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

aboutFhNext.addEventListener('click',function(){
    moveSlide(currIndex + 1);
})
aboutFhPrev.addEventListener('click',function(){
    moveSlide(currIndex - 1);
})
function moveSlide(num){
    aboutFhWrap.style.left = - num * (slideWidth + slideMargin ) + 'vw';
    currIndex = num;//바뀐 순번을 적용하기
    console.log(currIndex , slideIndex); 
    
    if(currIndex == slideIndex || currIndex == -slideIndex){

        setTimeout(()=>{
            aboutFhWrap.classList.remove('ani');
            aboutFhWrap.style.left = 0;
            currIndex = 0;
        },500)
        setTimeout(()=>{
            aboutFhWrap.classList.add('ani');
        },505)
    }




}





