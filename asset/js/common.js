
'use strict';//

//헤더 



const main= document.querySelector('main');
const header = document.querySelector('header');
const headerLogo = document.querySelectorAll('.header_area .logo');
const headMenuList = document.querySelector('.header_area .menu_list');
const headMenuMob = document.querySelector('.header_area .menu_list_m');
const headerMenuBtn = document.querySelectorAll('.header_area .menu_item');
const headMenuArea = document.querySelector('header .menu_area');
const headProduct = document.querySelector('.menu_area .product_menu');
const headPdimg = document.querySelectorAll('.menu_area .product_menu .img_group .img_wrap');
const headPdBtn = document.querySelectorAll('.menu_area .product_menu .nav_group .item');

const headLiving = document.querySelector('.menu_area .living_menu');
const headLivimg = document.querySelectorAll('.menu_area .living_menu .img_wrap img');
const headLivBtn = document.querySelectorAll('.menu_area .living_menu .nav_list li');

const hdBtnIndex = headPdBtn.length;//6
const hdLivIndex = headLivBtn.length;//6

const linkBtn = document.querySelectorAll('.header_area .menu_item a');
const linkMain = document.querySelector('.header_area .logoAni_wrap');

let indexPg = 'index.html';
let productPg = 'product.html';
let livingPg = 'living.html';
let designPg = 'designer.html';
let aboutPg = 'about.html';

headReset()
function headReset(){
    main.classList.remove('on');

    headMenuArea.style.height = '0';
    headProduct.style.display = 'none';
    headProduct.style.opacity =0;
    headLiving.style.display = 'none';
    headLiving.style.opacity =0;

    for(let r = 0 ; r <hdBtnIndex; r++){
        headPdBtn[r].style.opacity = 1;
        headPdimg[0].children[r].style.opacity =0;
        headPdimg[1].children[r].style.opacity =0;
    }
    for(let r = 0 ; r <hdLivIndex; r++){
        headLivBtn[r].style.opacity = 1;
        headLivimg[r].style.opacity = 0;
    }

}

//logo click
linkMain.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = indexPg;
})
//scroll - header/logo ani
headerBgc();
function headerBgc(){

    window.addEventListener('scroll',()=> { 

        let scrollNow = document.documentElement.scrollTop;//스크롤 바 bottom
        let winHeight = window.innerHeight;//현재 화면 높이값
        let trigerBottom = header.offsetTop;//요소의 bottom
        let trigerTop = trigerBottom - winHeight; //요소의 top 
        let bgProPer = 0;

        bgProPer = (scrollNow - trigerTop) / winHeight * 10;
         // console.log(bgProPer);
        if( 10 < bgProPer){
            header.classList.add('on');
            for(let l = 0 ; l<headerLogo.length;l++){
                headerLogo[l].classList.add('ani')
            }
        }else if(10 == bgProPer){
            header.classList.remove('on');
            for(let l = 0 ; l<headerLogo.length;l++){
                headerLogo[l].classList.remove('ani')
            }
        }
    })

}
//header btn mouseover
for(let m = 0 ; m <headerMenuBtn.length; m++){

    headerMenuBtn[m].addEventListener('mouseover',()=>{
         header.classList.add('on');//header bg
         if(matchMedia("screen and (max-width: 767px)").matches){ 
            main.classList.add('on');//main bgc
         }
         if( headerMenuBtn[m].classList.contains('designer')){
            headReset()
            if(matchMedia("screen and (max-width: 767px)").matches){ 
                main.classList.add('on');
            }
         }else if(headerMenuBtn[m].classList.contains('about')){
            headReset()
            if(matchMedia("screen and (max-width: 767px)").matches){ 
                main.classList.add('on');
            }
         }


    })
}
//header btn click
for(let p = 0; p <linkBtn.length; p++){
    linkBtn[p].addEventListener('click',function(e){
        e.preventDefault();
        console.log('페이지 이동 클릭');
        
        if(linkBtn[p].classList.contains('link_product')){
            setTimeout(()=>{
                main.classList.add('on');
                headMenuArea.style.height = '25vw';
                headMenuArea.style.transition = '.5s ease'
                if(matchMedia("screen and (max-width: 1023px)").matches){ 
                    headMenuArea.style.height = '27.5vw';
                }
             })
             setTimeout(()=>{
                headProduct.style.display = 'flex';
                headLiving.style.display = 'none';
                setTimeout(()=>{
                    headProduct.style.opacity = 1;
                    headProduct.style.transition = '.5s ease'
                },500)
             })
             headPdSelect();

             if(matchMedia("screen and (max-width: 767px)").matches){ 
                window.location.href = productPg;
            }
        }else if(linkBtn[p].classList.contains('link_living')){
            setTimeout(()=>{
                main.classList.add('on');
                headMenuArea.style.height = '25vw';
                headMenuArea.style.transition = '.5s ease'
                if(matchMedia("screen and (max-width: 1023px)").matches){ 
                    headMenuArea.style.height = '27.5vw';
                }
             })
             setTimeout(()=>{
                headLiving.style.display = 'flex';
                headProduct.style.display = 'none';
                setTimeout(()=>{
                    headLiving.style.opacity = 1
                    headLiving.style.transition = '.5s ease'
                },500)
             })

             headLivSelect();
             if(matchMedia("screen and (max-width: 767px)").matches){ 
                window.location.href = livingPg;
            }
        }
        else if(linkBtn[p].classList.contains('link_designer')){ 
            window.location.href = designPg;
        }
        else if(linkBtn[p].classList.contains('link_about')){
            window.location.href = aboutPg;
        }


    })

}
//product btn 
function headPdSelect(){

   for(let i=0;i <hdBtnIndex; i++){
        
        // 초기화
        headPdimg[0].children[0].style.opacity =1;
        headPdimg[1].children[0].style.opacity =1;

        headPdBtn[i].addEventListener('mouseover',()=>{ 

            //txt
            for(let n =0;n <hdBtnIndex ; n++){
                headPdBtn[n].style.opacity = '40%';
                headPdBtn[n].style.transition = '.5s ease'
                headPdBtn[i].style.opacity = 1;
                headPdBtn[i].style.transition = '.5s ease'
            }
            //img
            for(let m =0; m <headPdimg.length; m++){
               let hdPdImgItemAll = [];
               hdPdImgItemAll = headPdimg[m].children;
               for(let r =0; r <hdBtnIndex; r++){
                   hdPdImgItemAll[r].style.opacity = 0;
               }  
               //초기화 
               let hdPdImgItemSel = headPdimg[m].children[i];
               hdPdImgItemSel.style.opacity = 1;
               hdPdImgItemSel.style.transition = '.5s ease';
               //선택한 영역만
            } 
        })
        headPdBtn[i].addEventListener('mouseout',()=>{ 
            for(let r = 0 ; r <hdBtnIndex; r++){
                headPdBtn[r].style.opacity = 1;
                headPdimg[0].children[r].style.opacity =0;
                headPdimg[1].children[r].style.opacity =0;
            }   
            headPdimg[0].children[0].style.opacity =1;
            headPdimg[1].children[0].style.opacity =1;            
        })
        headPdBtn[i].addEventListener('click',()=>{
            window.location.href = productPg;
        })
        

   }

}
//living btn 
function headLivSelect(){

    for(let i = 0; i< hdLivIndex; i++){

        //나갔다 다시 들어올때 초기화
        headLivimg[0].style.opacity = 1;
        //
        headLivBtn[i].addEventListener('mouseover',()=>{

            //txt
            for(let r = 0; r< hdLivIndex; r++){
                headLivBtn[r].style.opacity = '40%';
                headLivBtn[r].style.transition = '.5s ease'
                headLivBtn[i].style.opacity = 1;
                headLivBtn[i].style.transition = '.5s ease'
            }
            //img
            for(let s = 0; s< hdLivIndex; s++){
                headLivimg[s].style.opacity = 0;
                headLivimg[i].style.opacity = 1;
                headLivimg[i].style.transition ='.5s ease'
            }
        })
        headLivBtn[i].addEventListener('mouseout',()=>{ 
            for(let r = 0 ; r <hdLivIndex; r++){
                headLivBtn[r].style.opacity = 1;
                headLivimg[r].style.opacity = 0;
            }
            headLivimg[0].style.opacity = 1;
        })
        headLivBtn[i].addEventListener('click',()=>{
            window.location.href = livingPg;

        })

    }

}
//header mouseout
header.addEventListener('mouseleave',()=>{//mouse < mouseleave
    headReset()
    //초기화 
})

//모바일
if(matchMedia("screen and (max-width: 767px)").matches){ 
    let headerOn = false;

    headMenuMob.addEventListener('click',()=>{
        if(headerOn == false){
            headerOn = true;
            headMenuMob.classList.add('on');
            headMenuList.style.display = 'block';
            setTimeout(()=>{
                headMenuList.style.opacity = 1;
                headMenuList.style.height='50vh';
                headMenuList.style.transition = '.5s ease';
                main.classList.add('on');
            },100)
        }else if(headerOn == true){
            headerOn = false;
            setTimeout(()=>{
                main.classList.remove('on');
                headMenuList.style.opacity = 0;
                headMenuList.style.height='0';
                headMenuList.style.transition = '.5s ease';
                setTimeout(()=>{
                    headMenuList.style.display = 'none';
                },500)
            })
            headMenuMob.classList.remove('on');
        }
    })
    main.addEventListener('click',()=>{
        headerOn = false
        setTimeout(()=>{
            main.classList.remove('on');
            headMenuList.style.opacity = 0;
            headMenuList.style.height='0';
            headMenuList.style.transition = '.5s ease';
            setTimeout(()=>{
                headMenuList.style.display = 'none';
            },500)
        })
        headMenuMob.classList.remove('on');
        
    })

    
}













//////////
const sloganWrap = document.querySelector('.sloganImg');
const slogan = document.querySelectorAll('.sloganImg  img');
let sloganAll = slogan.length;
let nowIndex = 0;
let myArray = [];
function sloganslide(){
    
    for(let i = 0; i < sloganAll; i++){
        myArray.push(slogan[i]);//이미지에 배열 넣기
        slogan[i].style.opacity = '0';
    }
    myArray[nowIndex].style.opacity = '1';
    //초기화

    let timer = undefined; 
    if (timer == undefined) {
        timer =  setInterval(showSlide,1000);
    }  

    function showSlide(){

        let nextIndex = (nowIndex + 1) % sloganAll;

        //now slide
        myArray[nowIndex].style.opacity = '0';
        //next slide
        myArray[nextIndex].style.opacity = '1';
        nowIndex = nextIndex;
    }
    function timeron(){
        if (!timer) { 
            timer =  setInterval(showSlide,1000);
          } 
    }
    function timeroff(){
        if (timer) {
            clearInterval(timer);
            timer = undefined;				
          }
    }

    for(const slidImg of slogan ){
        slidImg.addEventListener('mouseover',()=> {
            // console.log('그만');
            timeroff();
        })
        slidImg.addEventListener('mouseout',()=> {
            // console.log('실행');
            timeron();
        })

    }
    


}

//img zoom ani
const zoomAni = document.querySelectorAll('.zoomAni');

for( let z = 0; z <zoomAni.length; z++){
    let zoomItem = zoomAni[z].querySelector('img');

    zoomAni[z].addEventListener('mouseover',() => {
         zoomItem.style.transform = `scale(1.08)`;//scale ``사용
         zoomItem.style.transition ='.3s ease-out';
    })
    zoomAni[z].addEventListener('mouseout',() => {
        zoomItem.style.transform = `scale(1)`;
        zoomItem.style.transition ='.5s ease-out';
    })
}




//footer
const footerNav = document.querySelectorAll('.footer_area .nav_wrap');
const footerNavTit = document.querySelectorAll('.footer_area .nav_wrap .tit');

let idAni = false;
footer()
function footer(){
    for(let f = 0 ;f < footerNavTit.length; f++){

        let navUi = footerNavTit[f].nextElementSibling;
        let navSvg = footerNavTit[f].querySelector('svg')
        navUi.style.height = '0';
        navUi.style.opacity =0;

        footerNavTit[f].addEventListener('click',(e)=>{
            e.preventDefault();

            if(idAni == false){
                idAni = true;
                navUi.style.height = 'auto'
                navUi.style.opacity = 1;
                navUi.style.zIndex = '1';
                navUi.style.transition='.8s ease'
                navSvg.style.transform = 'rotate(-90deg)';
                navSvg.style.transition = '.3s ease'
                footerNavTit[f].classList.add('on')
            }else if(idAni == true){
                idAni = false
                navUi.style.height = '0'
                navUi.style.opacity = 0;
                navUi.style.zIndex = '0';
                navSvg.style.transform = 'rotate(90deg)';
                footerNavTit[f].classList.remove('on')
            }

        })
    }

}


