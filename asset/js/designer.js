window.onload = function(){ 
    reset();
    headReset()
    designIntro()
    headerBgc();
    footer()

};
const designIntroImg = document.querySelector('.designers_area .sc_intro .img_wrap img');
const designIntroTxt = document.querySelector('.designers_area .sc_intro .title');

window.onresize = function(){
    // document.location.reload();
    window.scrollTo(0, 0);
  };
  
function reset(){
    designIntroImg.style.opacity = 0;
    designIntroImg.style.transform = `scale(1.2)`;
    designIntroTxt.style.transform = 'translateY(100%)'

    for(let i = 0 ;i< cursorImg.length; i++){
        cursorImg[i].style.transform=`scale(0)`;
        cursorImg[i].style.opacity =0;
    }
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

const cursor = document.querySelector('.cursor')
const cursorImg = document.querySelectorAll('.cursor img')
const scDesigner = document.querySelector('.sc_designer')
const designerLi = document.querySelectorAll('.sc_designer li')
const designerTit = document.querySelectorAll('.sc_designer li .tit')

window.addEventListener('mousemove',(e)=>{//mouseover <mousemove
    let mouseX = e.clientX + 50 + 'px';
    let mouseY = e.clientY - 150 + 'px';

    cursor.style.left = mouseX
    cursor.style.top = mouseY
})
scDesigner.addEventListener('mouseenter',()=>{
    for(let i = 0 ;i< cursorImg.length; i++){
        cursorImg[i].style.transform=`scale(1)`;
        cursorImg[i].style.opacity =1;
    }
})
scDesigner.addEventListener('mouseleave',()=>{
    for(let i = 0 ;i< cursorImg.length; i++){
        cursorImg[i].style.transform=`scale(0)`;
        cursorImg[i].style.opacity =0;
    }
})

for(let i = 0 ;i<designerLi.length; i++){
    designerLi[i].addEventListener('mouseenter',()=>{
        //cusor img change
        for(let c = 0 ;c <cursorImg.length; c++){
            for(let c = 0 ;c <cursorImg.length; c++){
                cursorImg[c].style.opacity = 0;
                cursorImg[c].style.transform = `scale(1.2)`
            }//초기화
            cursorImg[i].style.opacity = 1;
            cursorImg[i].style.transform = `scale(1)`
            cursorImg[i].style.transition = '.5s ease';
        }

        //텍스트 효과
        for(let c = 0 ;c <designerTit.length; c++){
            for(let c = 0 ;c <designerTit.length; c++){
                designerTit[c].style.letterSpacing = '0px';
                designerTit[c].style.color = '#777';
            }//초기화
            designerTit[i].style.letterSpacing = '.3vw';
            designerTit[i].style.color = '#000';
            designerTit[i].style.transition ='.5s ease'

        }
    })
}