window.onload = function(){ 
    reset()
    livingIntro()
    sloganslide(); 
};
const ivIntro = document.querySelector('.living_area .sc_intro');
const ivIntroImg = document.querySelector('.living_area .sc_intro .img_wrap img');
const ivIntroTit = document.querySelector('.living_area .sc_intro .title');

function reset(){
    ivIntroImg.style.transform = `scale(1.5)`;
    ivIntroTit.style.transform = 'translateY(100%)';
    for(let i = 0; i < livingItem.length; i++){
        livingItem[i].style.opacity = 0;
        livingItem[i].style.visibility = 'hidden'
        livingItem[i].style.transform = 'translateY(20%)'

        if(matchMedia("screen and (max-width: 1023px)").matches){//
            livingItem[i].style.opacity = 1;
            livingItem[i].style.visibility = 'visible'
            livingItem[i].style.transform = 'translateY(0)'
        }
    }
}
//intro
function livingIntro(){
    setTimeout(()=>{
        ivIntro.style.opacity =1;
        ivIntro.style.transition = '1s ease'
        ivIntroImg.style.transform = `scale(1)`;
        ivIntroImg.style.transition='1s ease';
    },100)
    setTimeout(()=>{
        ivIntroTit.style.transform = 'translateY(0%)';
        ivIntroTit.style.transition = '.5s ease'
    },1000)


}


//scroll
const trigerLiving = document.querySelectorAll('.living_area .lv_list');
const livingItem = document.querySelectorAll('.living_area .lv_list li');

window.addEventListener('scroll',()=> { 
    
    for(let i = 0; i <trigerLiving.length; i++){
       
        let scrollNow = document.documentElement.scrollTop;
        let winHeight = window.innerHeight;
        let trigerBottom = trigerLiving[i].offsetTop;
        let trigerTop = trigerBottom - winHeight;
        let bgProPer = 0;

        bgProPer = (scrollNow - trigerTop) / winHeight * 10;
        
        let trigerItems =  trigerLiving[i].querySelectorAll('li')

            if( 15 <= bgProPer){
                for(let v =0; v <trigerItems.length; v++){
                    setTimeout(()=>{
                        trigerItems[v].style.opacity = 1;
                        trigerItems[v].style.visibility = 'visible'
                        trigerItems[v].style.transform = 'translateY(0%)'
                        trigerItems[v].style.transition = '.8s ease'
                    },v*300);   


                }
            }
    }
})

