'use strict';
const designIntroImg = document.querySelector('.designers_area .sc_intro .img_wrap img');
const designIntroTxt = document.querySelector('.designers_area .sc_intro .title');
const cursor = document.querySelector('.cursor')
// const cursorImg = document.querySelectorAll('.cursor img')
const cursorImg = document.querySelector('.cursor img')
const scDesigner = document.querySelector('.sc_designer')
const designerLi = document.querySelectorAll('.sc_designer li')
const designerTit = document.querySelectorAll('.sc_designer li .tit')

function reset(){
    designIntroImg.style.opacity = 0;
    designIntroImg.style.transform = `scale(1.2)`;
    designIntroTxt.style.transform = 'translateY(100%)'

    cursorImg.style.transform=`scale(0)`;
    cursorImg.style.opacity =0;
}
function  designIntro(){

    setTimeout(()=>{
        designIntroImg.style.opacity = 1;
        designIntroImg.style.transform = `scale(1)`;
        designIntroImg.style.transition = '1s ease'
        setTimeout(()=>{
            designIntroTxt.style.transform = 'translateY(0%)'
            designIntroTxt.style.transition = '.5s ease'
        },300)
    },100)

}
function onMouseMove(e){
    let mouseX = e.clientX + 50 + 'px';
    let mouseY = e.clientY - 150 + 'px';

    cursor.style.left = mouseX
    cursor.style.top = mouseY
}
function onMouseEnter(on){
    let onCursor = on;
    cursorImg.setAttribute('src',`./asset/img/pd_cousor_${onCursor}.webp`);
    setTimeout(()=>{
        cursorImg.style.opacity =1;
        cursorImg.style.transform=`scale(1)`;
        cursorImg.style.transition = '.5s ease'
    })
    console.log(onCursor)

    //텍스트 효과
    for(let c = 0 ;c <designerTit.length; c++){
        for(let c = 0 ;c <designerTit.length; c++){
            designerTit[c].style.letterSpacing = '0px';
            designerTit[c].style.color = '#777';
        }//초기화
        designerTit[onCursor].style.letterSpacing = '.3vw';
        designerTit[onCursor].style.color = '#000';
        designerTit[onCursor].style.transition ='.5s ease'

    }
}
function onMouseLeave(){
    setTimeout(()=>{
        cursorImg.style.opacity =0;
        cursorImg.style.transform=`scale(0)`;
        cursorImg.style.transition = '.5s ease'
    })
}

function addEvent(){
    designIntro()
    window.addEventListener('mousemove',onMouseMove)
    for(let i = 0 ;i<designerLi.length; i++){
        designerLi[i].addEventListener('mouseenter',function(){onMouseEnter(i)})
        designerLi[i].addEventListener('mouseleave',onMouseLeave)
    }
}

function init() {
    reset();
    addEvent();
}
init();