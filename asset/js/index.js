'use strict';
//main
const visualSc = document.querySelector('.main_area .sc_visual')
const visualTxt= document.querySelector('.main_area .visual_title')
const visualTit= document.querySelector('.main_area .visual_title .title')
const visualSub= document.querySelector('.main_area .visual_title .sub')
const visualWrap = document.querySelector('.main_area .sc_visual .slide_wrapper')
const visualImg = document.querySelectorAll('.main_area .sc_visual .slide_item')
const visControl = document.querySelector('.main_area .sc_visual .control')
const statelBtn = document.querySelector('.main_area .sc_visual .state_btn')
const numBtn = document.querySelector('.main_area .sc_visual .state_number .num')
const lineBar = document.querySelector('.main_area .sc_visual .state_number .bar')
const prevBtn= document.querySelector('.main_area .sc_visual .prev')
const nextBtn = document.querySelector('.main_area .sc_visual .next')
let visualImgAll =  visualImg.length;
let visualArray = [];
let visualNow = 0;
let numArr = ['1','2','3','4','5'];
let numNow = 0;
//main intro
const trigerMain = document.querySelectorAll('.main_area .sc_intro>div');
const mainIntroBtn = document.querySelectorAll('.main_area .sc_intro .state_btn>button');
const mainIntroMv = document.querySelector('.main_area .sc_intro .mv');
//main cate
const mainCateBtn = document.querySelectorAll('.main_area .sc_cate .control>button');
const mainCatePrev = document.querySelector('.main_area .sc_cate .btn_prev');
const mainCateNext = document.querySelector('.main_area .sc_cate .btn_next');
const mainCateSLide = document.querySelector('.main_area .sc_cate .slide_wrap');
const mainCateLi= document.querySelectorAll('.main_area .sc_cate .slide_wrap li');
let currIndex = 0;
let slideIndex = mainCateLi.length;
let slideWidth = 16.5
let slideMargin = 1
if(matchMedia("screen and (max-width: 767px)").matches){
    slideWidth = 60
    slideMargin = 4
}
else if(matchMedia("screen and (max-width: 1023px)").matches){
    slideWidth = 26.5
    slideMargin = 3
}
function reset(){
    visualSc.style.opacity = 0;
    visControl.style.opacity =0;
    if(matchMedia("screen and (max-width: 767px)").matches){
        for(const triger of trigerMain ){
            triger.style.opacity = 1;
            triger.style.transform = 'translateY(0)'
        }
      }
}
function handleResize() {
    if (window.innerWidth < 768) {
        slideWidth = 60
        slideMargin = 4
        wrapWidthSize()
    }else if(window.innerWidth < 1024){
        slideWidth = 26.5
        slideMargin = 3
        wrapWidthSize()
    }
}
function  mainVisualSlide(){
    //reset
    for(let i = 0; i < visualImg.length; i++){
        visualArray.push(visualImg[i]);
        visualImg[i].style.opacity = 0;
    }
    visualImg[visualNow].style.opacity = 1;
    numBtn.textContent ='';
    numBtn.innerHTML += `${numArr[numNow]}`;
    //load ani
    setTimeout(()=>{//main
        visualSc.style.opacity = 1;
        visualSc.style.transition = '1s ease';
    },200)
    setTimeout(()=>{//control
        visControl.style.opacity =1;
        visControl.style.transition = '.5s ease'
    },1000)
     setTimeout(()=>{//visual img
        visualWrap.style.height = '70%';
        visualWrap.style.transition='1s ease';
        visualTit.style.top = '0';
        visualTit.style.transition = '1s ease';
     },1000)

    //img slide ani
    setTimeout(()=>{
         let timer = undefined; 
         if (timer == undefined) {
             timer = setInterval(visualSlide,4000);       
         }
         function visualSlide(){
     
             let visualNext = (visualNow + 1) % visualImgAll ;
             let numNext = (numNow + 1) % visualImgAll ;
             //remove
             visualArray[visualNow].style.opacity = 0;
             visualArray[visualNow].style.transform = `scale(1.05)`;
             visualArray[visualNow].style.transition = '1s ease';
            numBtn.textContent ='';
            //add   
              visualArray[visualNext].style.opacity = 1;
              visualArray[visualNext].style.transform = `scale(1)`;
              visualArray[visualNext].style.transition = '1s ease';
              numBtn.innerHTML += `${numArr[numNext]}`;

              visualNow = visualNext;
              numNow = numNext;
     
         }
         nextBtn.addEventListener('click',()=>{
            timeroff()
            setTimeout(() => {
                let visualNext = (visualNow + 1) % visualImgAll ;
                let numNext = (numNow + 1) % visualImgAll ;

                visualArray[visualNow].style.opacity = 0;
                visualArray[visualNow].style.transform = `scale(1.05)`;
                visualArray[visualNow].style.transition = '1s ease'; 
                 numBtn.textContent ='';   

                 visualArray[visualNext].style.opacity = 1;
                 visualArray[visualNext].style.transform = `scale(1)`;
                 visualArray[visualNext].style.transition = '1s ease';
   
                 numBtn.innerHTML += `${numArr[numNext]}`;
   
                 visualNow = visualNext;
                 numNow = numNext;
                 
            });
            timeron()
         })
         prevBtn.addEventListener('click',()=>{
            timeroff()
            setTimeout(() => {
                let visualPrev = (visualNow + (visualImgAll - 1) ) % visualImgAll ;
                let numPrev = (numNow + (visualImgAll - 1) ) % visualImgAll;

                console.log(visualPrev)

                visualArray[visualNow].style.opacity = 0;
                visualArray[visualNow].style.transform = `scale(1.05)`;
                visualArray[visualNow].style.transition = '1s ease'; 
                numBtn.textContent ='';   
                 
                 visualArray[visualPrev].style.opacity = 1;
                 visualArray[visualPrev].style.transform = `scale(1)`;
                 visualArray[visualPrev].style.transition = '1s ease';
   
                 numBtn.innerHTML += `${numArr[numPrev]}`;
   
                 visualNow = visualPrev;
                 numNow = numPrev;
                 
            });
            timeron()
         })
         function timeron(){
             if (!timer) { 
                 timer = setInterval(visualSlide,4000);
               }      
         }
         function timeroff(){
             if (timer) {
                 clearInterval(timer);
                 timer = undefined;				
               }
         }
         statelBtn.addEventListener('click',()=>{
             let btnArr = [];
             btnArr = statelBtn.children;
              console.log(btnArr[0]);
     
             if(btnArr[0].classList.contains('on')){
                 btnArr[0].classList.remove('on');
                 btnArr[1].classList.add('on');
                 timeroff();      
             }else if(btnArr[1].classList.contains('on')){
                 btnArr[1].classList.remove('on');
                 btnArr[0].classList.add('on');
                 timeron();
             }
         })
    })
}
function onMainScrollAni(){
    for(let i = 0; i <trigerMain.length; i++){
       
        let scrollNow = document.documentElement.scrollTop;
        let winHeight = window.innerHeight;
        let trigerBottom = trigerMain[i].offsetTop;
        let trigerTop = trigerBottom - winHeight;
        let bgProPer = 0;
        bgProPer = (scrollNow - trigerTop) / winHeight * 10;
            if( 15 <= bgProPer){

                mainIntroMv.muted = false;
                for(let v =0; v <trigerMain.length; v++){
                    setTimeout(()=>{
                        trigerMain[v].classList.add('scrollAni');
                    },v*500);   
                }
            }
    }
}
function onMvBtnclick(){
    for(let i = 0;i < mainIntroBtn.length; i++)
    {
        mainIntroBtn[i].addEventListener('click',()=>{
            if(mainIntroBtn[i].classList.contains('stop')){
                mainIntroBtn[0].classList.remove('on');
                mainIntroBtn[1].classList.add('on');
                mainIntroMv.pause();
            }else{
                mainIntroBtn[0].classList.add('on'); 
                mainIntroBtn[1].classList.remove('on'); 
                mainIntroMv.play();
            }
    
        })
    
    }
}
function wrapWidthSize(){
    let wrapWidth = (slideWidth + slideMargin ) * slideIndex  + - slideMargin  + 'vw';
    mainCateSLide.style.width = wrapWidth;
}
function onMainCateClick(){
    mainCateNext.addEventListener('click',()=>{
        mainCateNext.classList.add('on');
        mainCatePrev.classList.remove('on');
    
        mainCateSLide.style.left = '-19.5vw';
        mainCateSLide.style.transition = '.5s ease'
        if(matchMedia("screen and (max-width: 767px)").matches){
            if( currIndex > 4){
                console.log('ss');
                currIndex = 4;
            }
            moveSlide(currIndex + 1);
        }else if(matchMedia("screen and (max-width: 1023px)").matches){
            if( currIndex > 2){
                currIndex = 2;
            }
            moveSlide(currIndex + 1);
        }
       
    })
    mainCatePrev.addEventListener('click',()=>{
        mainCatePrev.classList.add('on');
        mainCateNext.classList.remove('on');
    
        mainCateSLide.style.left = '0';
        mainCateSLide.style.transition = '.5s ease'
        if(matchMedia("screen and (max-width: 1023px)").matches){
            if(currIndex > 0){
                moveSlide(currIndex - 1);
            }
        }
    })
}
function moveSlide(num){
    mainCateSLide.style.left = - num * (slideWidth + slideMargin ) + 'vw';
    currIndex = num;
    console.log(currIndex , slideIndex); 
}


function addEvent() {
    mainVisualSlide();
    window.addEventListener("scroll",onMainScrollAni);
    onMvBtnclick();
    wrapWidthSize()
    onMainCateClick();
    window.onload = function(){sloganslide();}
}
function init() {
    reset()
    window.addEventListener('resize', handleResize);
    addEvent();
}
init();






