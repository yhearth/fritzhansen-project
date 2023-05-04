window.onload = function(){
    reset();
    // headReset()
    // headerBgc();
    productIntroBg();
    // footer()
}

function reset(){
    pdIntroImg.style.transform = `scale(1.3)`;
    pdIntroTxt.style.opacity = 0;
    pdIntroTit.style.transform ='translateY(100%)'

    //detail page
    pdDtailPage.classList.add('disable');
    detailPage.classList.add('disable');
    wishPage.classList.add('disable');

    pdDtailR.style.right = '-100%';
    if(matchMedia("screen and (max-width: 767px)").matches){
        pdDtailR.style.top = '100%';
        likePopup.style.opacity = 0;
    }
    savePopup.style.display ='none'
    savePopup.style.opacity = 0;
    wishTxtWrap.style.opacity = 0;

    wishPgGp.style.opacity =0;
    wishPgGp.style.transform = 'translateY(10%)';
}

const pdPage = document.querySelector('.product_page')
const pdIntro = document.querySelector('.product_page .sc_intro')
const pdIntroBg = document.querySelector('.product_page .sc_intro  .img_wrap')
const pdIntroImg = document.querySelector('.product_page .sc_intro .img_wrap img')
const pdIntroTxt = document.querySelector('.product_page .sc_intro .txt_wrap')
const pdIntroTit = document.querySelector('.product_page .sc_intro .txt_wrap .title')

//intro ani
function productIntroBg(){
    setTimeout(() => {
        pdIntro.style.opacity = 1;
        pdIntro.style.transition = '1s ease'
        setTimeout(()=>{
            pdIntroImg.style.transform = `scale(1)`;
            pdIntroImg.style.transition='1s ease';
        },500)
        setTimeout(()=>{
            pdIntroTxt.style.opacity = 1;
            pdIntroTxt.style.transition='.5s ease';
            pdIntroTit.style.transform ='translateY(0)'
            pdIntroTit.style.transition='.5s  ease';
        },700)
    },500);
}

const pdFillTool= document.querySelectorAll('.product_page .fillter_tool li')
const pdFillIdx = document.querySelector('.product_page .fillter_tool .counter span')
const pdFillList= document.querySelector('.product_page .fillter_list')
const pdClearBtn = document.querySelector('.product_page .fillter_list .clear')
const pdListSei= document.querySelector('.product_page .fillter_list .list_serise')
const pdCheckLi= document.querySelectorAll('.product_page .fillter_list .list_serise input')
const pdListDesign= document.querySelector('.product_page .fillter_list .list_designer')
const pdCheckLiD = document.querySelectorAll('.product_page .fillter_list .list_designer input')
const pdRangeInput= document.querySelector('input[type="range"]');
const pdItem = document.querySelectorAll('.product_page .pd_list .list_item')
const pdItemImg = document.querySelectorAll('.product_page .pd_list .list_item .img_box')
const pdItemFig= document.querySelectorAll('.product_page .pd_list li figcaption')
const pdFooter = document.querySelector('footer')

let pdItemIdx  = pdItem.length;
const dNone = 'd-none';
const checkArr = []
const checkDArr = []
//fillter btn
for(let f = 0; f < pdFillTool.length; f++){

    pdFillTool[f].addEventListener('click',()=>{

        let toolSvg = pdFillTool[f].children;

        if( pdFillTool[f].classList.contains('off')){
            pdFillTool[f].classList.remove('off');
            pdFillTool[f].classList.add('on');
            toolSvg[1].style.transform = 'rotate(270deg)';
            toolSvg[1].style.transition = '.5s ease';
            pdFillList.classList.add('on');//

            if(pdFillTool[f].classList.contains('seires')){
                pdListSei.style.display = 'flex';
                pdListDesign.style.display = 'none';
        
                pdFillTool[2].classList.remove('on');
                pdFillTool[2].classList.add('off');
        
              
                let rSvg = pdFillTool[2].children;
                 rSvg[1].style.transform = 'rotate(90deg)';
                 rSvg[1].style.transition = '.5s ease';
                
            }else if(pdFillTool[f].classList.contains('designer')){
                pdListSei.style.display = 'none';
                pdListDesign.style.display = 'flex';
        
                pdFillTool[1].classList.remove('on');
                pdFillTool[1].classList.add('off');
        
                let xSvg = pdFillTool[1].children;
                xSvg[1].style.transform = 'rotate(90deg)';
                xSvg[1].style.transition = '.5s ease';
        
            }

        }else if(pdFillTool[f].classList.contains('on')){
            pdFillTool[f].classList.remove('on');
            pdFillTool[f].classList.add('off');
            toolSvg[1].style.transform = 'rotate(90deg)';
            toolSvg[1].style.transition = '.5s ease';

            pdFillList.classList.remove('on');
            pdListSei.style.display = 'none';
            pdListDesign.style.display = 'none';




        }

    })
}
//list grid
pdRangeInput.addEventListener('change',function(){
    document.documentElement.style.setProperty('--minRangeValue',`${this.value}vw`)
     console.log(this.value);
})
//fillter check
for(let c = 0; c < pdCheckLi.length; c++){


    pdFillIdx.innerText = pdItemIdx;

    pdCheckLi[c].addEventListener('click',function(){
  
        if(!pdCheckLi[c].classList.contains('checked')){
            pdCheckLi[c].classList.add('checked');

            let chxLabel = pdCheckLi[c].nextElementSibling;
            let chxName =  chxLabel.getAttribute('for');

            //체크박스
            checkArr.push(chxName);

            //리스트
            for(let i = 0; i < pdItemFig.length; i++){
                let itemLi = pdItemFig[i].parentElement.parentElement;
                let itemSpan = pdItemFig[i].children; 
                let itemTit = itemSpan[0].className;
                let itemSub = itemSpan[1].textContent;

                console.log(itemTit);

                itemLi.classList.add(dNone);
                itemLi.classList.remove('active');

                checkArr.filter(function(n){
                    if(n === itemTit){
                        itemLi.classList.remove(dNone);
                        itemLi.classList.add('active');
                        return n == itemTit; 
                    }
                }); 

            }
            
            //상품 갯수 
            let viewitemIdx = document.querySelectorAll('.pd_list .active')
            pdItemIdx = viewitemIdx.length
            pdFillIdx.innerText = pdItemIdx

            console.log(checkArr);
            

        }else if(pdCheckLi[c].classList.contains('checked')){
            pdCheckLi[c].classList.remove('checked');

            let chxLabel = pdCheckLi[c].nextElementSibling;
            let chxName =  chxLabel.getAttribute('for');

            
            //체크박스 
            for(let x = 0; x < checkArr.length; x++){
                if(checkArr[x] == chxName ){
                    checkArr.splice(x,1);
                    x--;   
                } 
            }
            console.log(checkArr);

            //리스트
            for(let i = 0; i < pdItemFig.length; i++){
                let itemLi = pdItemFig[i].parentElement.parentElement;
                let itemSpan = pdItemFig[i].children; 
                let itemTit = itemSpan[0].className;
                let itemSub = itemSpan[1].textContent;

                itemLi.classList.add(dNone);
                itemLi.classList.remove('active');

                checkArr.filter(function(n){
                    if(n === itemTit ){
                        itemLi.classList.remove(dNone);
                        itemLi.classList.add('active');
                        return n == itemTit ;
                    }

                }); 

                if(checkArr.length == 0){
                    console.log('빵');
                    itemLi.classList.remove(dNone);
                    itemLi.classList.add('active');
                }

            }

            //상품 갯수 
            let viewitemIdx = document.querySelectorAll('.pd_list .active')
            pdItemIdx = viewitemIdx.length
            pdFillIdx.innerText = pdItemIdx


        }

    })

}
for(let d = 0; d < pdCheckLiD.length; d++){

    pdFillIdx.innerText = pdItemIdx;

    pdCheckLiD[d].addEventListener('click',function(){
  

        if(!pdCheckLiD[d].classList.contains('checked')){
            pdCheckLiD[d].classList.add('checked');

            let chxLabel = pdCheckLiD[d].nextElementSibling;
            let chxName =  chxLabel.getAttribute('for')

            //체크박스
            checkDArr.push(chxName);

            //리스트
            for(let i = 0; i < pdItemFig.length; i++){
                let itemLi = pdItemFig[i].parentElement.parentElement;
                let itemSpan = pdItemFig[i].children; 
                let itemSub = itemSpan[1].className;

                itemLi.classList.add(dNone);
                itemLi.classList.remove('active');

                checkDArr.filter(function(n){
                    if(n === itemSub){
                        itemLi.classList.remove(dNone);
                        itemLi.classList.add('active');
                        return n == itemSub;
                    }
                }); 
            }

            //상품 갯수 
            let viewitemIdx = document.querySelectorAll('.pd_list .active')
            pdItemIdx = viewitemIdx.length
            pdFillIdx.innerText = pdItemIdx

            console.log(checkDArr);
            

        }else if(pdCheckLiD[d].classList.contains('checked')){
            pdCheckLiD[d].classList.remove('checked');

            let chxLabel = pdCheckLiD[d].nextElementSibling;
            let chxName =  chxLabel.getAttribute('for');

            
            //체크박스 
            for(let x = 0; x < checkDArr.length; x++){
                if(checkDArr[x] == chxName ){
                    checkDArr.splice(x,1);
                    x--;   
                } 
            }
            console.log(checkDArr);

            //리스트
            for(let i = 0; i < pdItemFig.length; i++){
                let itemLi = pdItemFig[i].parentElement.parentElement;
                let itemSpan = pdItemFig[i].children; 
                let itemSub = itemSpan[1].className;

                itemLi.classList.add(dNone);
                itemLi.classList.remove('active')

                checkDArr.filter(function(n){
                    if(n === itemSub ){
                        itemLi.classList.remove(dNone);
                        itemLi.classList.add('active')
                        return n == itemSub ;
                    }
                });
                
                if(checkArr.length == 0){
                    itemLi.classList.remove(dNone);
                    itemLi.classList.add('active')
                }
            }
            
            //상품 갯수 
            let viewitemIdx = document.querySelectorAll('.pd_list .active')
            pdItemIdx = viewitemIdx.length
            pdFillIdx.innerText = pdItemIdx

        }

    })

}
//clear btn
pdClearBtn.addEventListener('click',()=>{

    console.log('클리어')
    //체크박스 - 체크된 클래스 삭제 - 시리즈
    for(let c = 0; c < pdCheckLi.length; c++){
        pdCheckLi[c].classList.remove('checked');
        pdCheckLi[c].checked = false;    
    }
    //체크박스 - 체크된 클래스 삭제 - 디자이너
    for(let c = 0; c < pdCheckLiD.length; c++){
        pdCheckLiD[c].classList.remove('checked');
        pdCheckLiD[c].checked = false;    
    }
    //체크 리스트 리셋 -시리즈
    for(let a = 0; a < checkArr.length; a++){
        checkArr.splice(a);
    }
     //체크 리스트 리셋 - 디자이너
    for(let a = 0; a < checkDArr.length; a++){
        checkDArr.splice(a);
    }
    //리스트
    for(let i = 0; i < pdItemFig.length; i++){
        let itemLi = pdItemFig[i].parentElement.parentElement;//모든 li
        let itemSpan = pdItemFig[i].children; 
        let itemTit = itemSpan[0].className;
        let itemSub = itemSpan[1].className;;
        //리스트 초기화
        itemLi.classList.add(dNone);
        itemLi.classList.remove('active');
        if(checkArr.length == 0){
            // console.log('빵');
            itemLi.classList.remove(dNone);
            itemLi.classList.add('active');
        }
    }
    //상품 갯수 
    let viewitemIdx = document.querySelectorAll('.pd_list .active')
    pdItemIdx = viewitemIdx.length
    pdFillIdx.innerText = pdItemIdx

    console.log(checkArr);

})
//item click / page open
for(let i = 0;i < pdItem.length; i++){
    pdItem[i].addEventListener('click',()=>{
        setTimeout(()=>{//pd body 사라지기
            pdPage.style.opacity = 0;
            pdPage.style.transition ='1s ease'
            setTimeout(()=>{
                pdPage.classList.add('disable');
            },1000)
        })
        setTimeout(()=>{//footer 사라지기
            pdFooter.style.opacity = 0;
            pdFooter.style.transition ='1s ease'
            setTimeout(()=>{
                pdFooter.classList.add('disable');
            },1000)
        })

        //디테일 페이지 열기
        pdDtailPage.classList.remove('disable');
        detailPage.classList.remove('disable');
        setTimeout(()=>{
            pdDtailPage.style.opacity = '1'
            pdDtailPage.style.transition = '.5s ease';
            detailPage.style.opacity = '1'
            detailPage.style.transition = '.8s ease';

            pdDtailR.style.right = '0%';
            pdDtailR.style.transition ='1s ease'
            window.scrollTo(0, 0);

            if(matchMedia("screen and (max-width: 767px)").matches){
                pdDtailR.style.top = '65%';
                likePopup.style.opacity = 1;
                likePopup.style.transition = '.5s .8s ease'
            }

        },1000)

    })
}  

/////////////////detail page
const pdDtailPage = document.querySelector('.product_detail')

const shellImgBox = document.querySelector('.detail_left .shell img')
const shellSideImg = document.querySelector('.detail_left .shell_side img')
const shellLeftImg = document.querySelector('.detail_left .shell_left img')
const shellRightImg = document.querySelector('.detail_left .shell_right img')
const baseImgBox = document.querySelector('.detail_left .base img')
const baseSideImg = document.querySelector('.detail_left .base_side img')
const baseLeftImg = document.querySelector('.detail_left .base_left img')
const baseRightImg = document.querySelector('.detail_left .base_right img')

const pdDtailR = document.querySelector('.detail_right')

const editTxtBox = document.querySelectorAll('.product_detail .detail_right .edit_group .txt_wrap')
const shellBox= document.querySelectorAll('.product_detail .detail_right .edit_shell .img_box')
const baseBox= document.querySelectorAll('.product_detail .detail_right .edit_base .img_box')
const likeBtn= document.querySelector('.product_detail .btn_wrap .like')
const wishIdxSpan = document.querySelector('.product_detail .btn_wrap .wish_index span')
const likePopup = document.querySelector('.product_detail .btn_wrap .like_wrap')
const savePopup = document.querySelector('.product_detail .btn_wrap .save_wrap')
const saveName = document.querySelector('.product_detail .btn_wrap .save_wrap input')
const saveBtn = document.querySelector('.product_detail .btn_wrap .save_wrap .save')
const cancleBtn = document.querySelector('.product_detail .btn_wrap .save_wrap .cancle')
const wishBtn = document.querySelector('.product_detail .btn_wrap  .like_wrap .list')
const detailPage = document.querySelector('.product_detail .sc_detail')
const wishPage = document.querySelector('.product_detail .sc_wish')
const wishBgWrap = document.querySelector('.product_detail .sc_wish .wish_bg')
const wishBgImg = document.querySelectorAll('.product_detail .sc_wish .wish_bg img')
const wishTxtWrap = document.querySelector('.product_detail .sc_wish .txt_group')
const wishPgtxt = document.querySelector('.product_detail .sc_wish .txt_group .txt_wrap')
const wishPgGp = document.querySelector('.product_detail .sc_wish .wish_group')
const backBtn = document.querySelector('.product_detail .cancle')

let shellIdx = 0;
let baseIdx = 0;
let wishIdx = 0;
let id = 0;
let delateBtn;
for(let i = 0; i < editTxtBox.length; i++){
    editTxtBox[i].addEventListener('click',()=>{
        
        let editSvg = editTxtBox[i].querySelector('span');
        let editImgWrap = editTxtBox[i].nextElementSibling;
        let editBox = editTxtBox[i].parentElement;
        console.log(editBox)

        if(!editTxtBox[i].classList.contains('active')){
            editTxtBox[i].classList.add('active');

            editSvg.style.transform = 'rotate(360deg)';
            editSvg.style.transition = '.5s ease'
            editImgWrap.classList.add('on');

            if(editBox.classList.contains('edit_shell')){
                console.log('shell option')
                shellOptionClick();

            }else if(editBox.classList.contains('edit_base')){
                console.log('base option')
                baseOptionClick();
            }

        }
        else if(editTxtBox[i].classList.contains('active')){
            editTxtBox[i].classList.remove('active');

            editSvg.style.transform = 'rotate(180deg)';
            editSvg.style.transition = '.5s ease'
            editImgWrap.classList.remove('on');
        }


    })

}

const shellImgSrc = [
    './asset/img/shell_option_30.png',
    './asset/img/shell_option_20.png',
    './asset/img/shell_option_40.png',
    './asset/img/shell_option_70.png',
    './asset/img/shell_option_50.png',
    './asset/img/shell_option_80.png',
    './asset/img/shell_option_10.png',
    './asset/img/shell_option_60.png',
    './asset/img/shell_option_90.png',
]
const shellSideSrc = [
    './asset/img/pd_detail/shell_side_30.png',
    './asset/img/pd_detail/shell_side_20.png',
    './asset/img/pd_detail/shell_side_40.png',
    './asset/img/pd_detail/shell_side_70.png',
    './asset/img/pd_detail/shell_side_50.png',
    './asset/img/pd_detail/shell_side_80.png',
    './asset/img/pd_detail/shell_side_10.png',
    './asset/img/pd_detail/shell_side_60.png',
    './asset/img/pd_detail/shell_side_90.png',
]
const shellLeftSrc = [
    './asset/img/pd_detail/shell_left_30.png',
    './asset/img/pd_detail/shell_left_20.png',
    './asset/img/pd_detail/shell_left_40.png',
    './asset/img/pd_detail/shell_left_70.png',
    './asset/img/pd_detail/shell_left_50.png',
    './asset/img/pd_detail/shell_left_80.png',
    './asset/img/pd_detail/shell_left_10.png',
    './asset/img/pd_detail/shell_left_60.png',
    './asset/img/pd_detail/shell_left_90.png',
]
const shellRightSrc = [
    './asset/img/pd_detail/shell_right_30.png',
    './asset/img/pd_detail/shell_right_20.png',
    './asset/img/pd_detail/shell_right_40.png',
    './asset/img/pd_detail/shell_right_70.png',
    './asset/img/pd_detail/shell_right_50.png',
    './asset/img/pd_detail/shell_right_80.png',
    './asset/img/pd_detail/shell_right_10.png',
    './asset/img/pd_detail/shell_right_60.png',
    './asset/img/pd_detail/shell_right_90.png',
]
//
const baseImgSrc = [
    './asset/img/base_option_chrom.png',
    './asset/img/base_option_390.png',
    './asset/img/base_option_170.png',
    './asset/img/base_option_180.png',
    './asset/img/base_option_190.png',
    './asset/img/base_option_150.png',
    './asset/img/base_option_100.png',
]
const baseSideSrc = [
    './asset/img/pd_detail/base_side_chrome.png',
    './asset/img/pd_detail/base_side_390.png',
    './asset/img/pd_detail/base_side_170.png',
    './asset/img/pd_detail/base_side_180.png',
    './asset/img/pd_detail/base_side_190.png',
    './asset/img/pd_detail/base_side_150.png',
    './asset/img/pd_detail/base_side_100.png',

]
const baseLeftSrc = [
    './asset/img/pd_detail/base_left_chrome.png',
    './asset/img/pd_detail/base_left_390.png',
    './asset/img/pd_detail/base_left_170.png',
    './asset/img/pd_detail/base_left_180.png',
    './asset/img/pd_detail/base_left_190.png',
    './asset/img/pd_detail/base_left_150.png',
    './asset/img/pd_detail/base_left_100.png',

]
const baseRightSrc = [
    './asset/img/pd_detail/base_right_chrome.png',
    './asset/img/pd_detail/base_right_390.png',
    './asset/img/pd_detail/base_right_170.png',
    './asset/img/pd_detail/base_right_180.png',
    './asset/img/pd_detail/base_right_190.png',
    './asset/img/pd_detail/base_right_150.png',
    './asset/img/pd_detail/base_right_100.png',
]

let shellName;
let baseName;

//shell check
function shellOptionClick(){

    for(let s = 0; s<shellBox.length; s++){
        shellBox[s].addEventListener('click',()=>{
            shellIdx = s;
            let shellCus = shellBox[s].querySelector('span');
            shellName = shellCus.textContent;//커스텀 이름 변수

            for(let x = 0; x<shellBox.length; x++){
                let shellImg = shellBox[x].querySelector('img');
                shellImg.style.border=0;
                shellImg.style.boxShadow = '#000 0px 0px 0px ';
                shellImg.style.padding=0;
            }//초기화
            let shellImg = shellBox[s].querySelector('img');
            shellImg.style.border='1px solid #ccc';
            shellImg.style.boxShadow = '#00000070 1px 6px 10px';
            shellImg.style.padding='2px';
            shellImg.style.transition = '.5s ease';
            
            shellImgBox.setAttribute('src',shellImgSrc[s]);//정면 이미지 바꾸기
            shellSideImg.setAttribute('src',shellSideSrc[s]);//side 이미지 바꾸기
            shellLeftImg.setAttribute('src',shellLeftSrc[s]);//left 이미지 바꾸기
            shellRightImg.setAttribute('src',shellRightSrc[s]);//right 이미지 바꾸기
            
        })
    }
    console.log('shell : '+ shellIdx);

}
//base check
function baseOptionClick(){

    for(let s = 0; s< baseBox.length; s++){
        baseBox[s].addEventListener('click',()=>{
            baseIdx = s;
            let baseCus = baseBox[s].querySelector('span');
            baseName = baseCus.textContent;

            for(let x = 0; x<baseBox.length; x++){
                let shellImg = baseBox[x].querySelector('img');
                shellImg.style.border='0';
                shellImg.style.boxShadow = '#000 0px 0px 0px ';
                shellImg.style.padding='0';
            }//초기화
            let shellImg = baseBox[s].querySelector('img');
            shellImg.style.border='1px solid #ccc';
            shellImg.style.boxShadow = '#00000070 1px 6px 10px';
            shellImg.style.padding='2px';
            shellImg.style.transition = '.5s ease';

            baseImgBox.setAttribute('src',baseImgSrc[s]);
            baseSideImg.setAttribute('src',baseSideSrc[s]);
            baseLeftImg.setAttribute('src',baseLeftSrc[s]);
            baseRightImg.setAttribute('src',baseRightSrc[s]);
        })

    }
    console.log('base : '+ baseIdx);

}
//like btn click
likeBtn.addEventListener('click',()=>{
    saveName.value = '';//
    savePopup.style.display = 'block'
    setTimeout(()=>{
        savePopup.style.opacity = '1';
        savePopup.style.bottom = '1vw'
        savePopup.style.transition = '.5s ease'
        if(matchMedia("screen and (max-width: 767px)").matches){
            savePopup.style.bottom = '0'
        }
        
    },100)
})
//cancle click
cancleBtn. addEventListener('click',()=>{ 
    savePopNone();
})
//save btn click
saveBtn.addEventListener('click',()=>{ 
    console.log('세이브 버튼 누름');

    //위시 갯수
    wishIdx++;
    wishIdxSpan.style.display = 'block'
    wishIdxSpan.innerText = wishIdx;
    if( saveName.value === ''){
        saveNameNot()
       }

   savePopNone();//세이브 팝업 없애기
   wishListAdd();//위시리스트 아이템 추가
})
//popup remove
function savePopNone(){
    savePopup.style.opacity = '0';
    savePopup.style.bottom = '0'
    savePopup.style.transition = '.5s ease'
    setTimeout(()=>{
        savePopup.style.display = 'none'
    },500)
}
//not name
function saveNameNot(){
    console.log('이름 없음');
    let pdName = document.querySelector('.detail_right .title')
    saveName.value = pdName.textContent;
    console.log();
}

// wish item add
function wishListAdd (){
    wishPgtxt.style.display = 'none'
    console.log('리스트 추가 됨');

    let customName = saveName.value;
    let target;
    console.log(customName);

    if(shellName == undefined){
     let shellCus = shellBox[7].querySelector('span');
     shellName = shellCus.textContent;//커스텀 이름 변수
    }

    if(baseName == undefined){
        let baseCus = baseBox[0].querySelector('span');
        baseName = baseCus.textContent;
    }

    wishPgGp.innerHTML += 
    `
        <div class="wish_wrap"> 
        <div class="wish_box">
            <div class="pd_box">
                <div class="custom_box shell"><img src="${shellImgSrc[shellIdx]}" alt="" ></div>
                <div class="custom_box base"><img src="${baseImgSrc[baseIdx]}" alt=""></div>
            </div>
            <div class="edit_box">
                <div class="name">${customName}</div>
                <div class="custom">
                    <div class="shell">
                        <span>Shell</span>
                        <strong>${shellName}</strong>
                    </div>
                    <div class="base">
                        <span>Base</span>
                        <strong>${baseName}</strong>
                    </div>
                </div>
            </div>
            <div class="buy">BUY</div>
        </div>
        <div class="delate_box"></div>
    </div>
    `;
    listDelate(); 
}
//wish item remove
function  listDelate(){
    delateBtn = document.querySelectorAll('.delate_box');

    for(let d = 0; d < delateBtn.length; d++){
        delateBtn[d].addEventListener('click',(e)=>{

            let removeItem = e.target.parentElement;
            removeItem.remove();

            wishIdx--;
            wishIdxSpan.innerText = wishIdx;

            if(wishIdx == 0){
                wishPgtxt.style.display = 'block'// 
                wishIdxSpan.style.display = 'none'
                console.log('없음')
            }
    
        })

    
    }

}

// wishlist click
wishBtn.addEventListener('click',()=>{
    console.log('위시 리스트 페이지 오픈');

    setTimeout(()=>{
        detailPage.style.opacity = 0;
        detailPage.style.transition = '.5s ease'
        pdDtailR.style.right = '-100%';
        pdDtailR.style.transition = '1s ease'
        setTimeout(()=>{
            detailPage.classList.add('disable');
        },500)
    })

    setTimeout(()=>{
        window.scrollTo(0,0);
        wishPage.classList.remove('disable');
        setTimeout(()=>{
            wishPage.style.opacity = 1;
            wishPage.style.transition = '.5s ease'
            wishBgAni()
        },500)
    })
})
//wish bg
function wishBgAni(){
    for(let i = 0; i <wishBgImg.length ; i++){
        setTimeout(()=>{//배경 ani
            wishBgImg[i].style.opacity = 1;
            wishBgImg[i].style.transition = '1s ease'
        },i*20)
    }
    let bgL = wishBgWrap.querySelector('.bg_left');
    let bgR = wishBgWrap.querySelector('.bg_right');
    setTimeout(() => {//배경 ani
        bgL.style.transform = 'translateX(-20vw)';
        bgL.style.transition = '1s ease'
        bgR.style.transform = 'translateX(20vw)';
        bgR.style.transition = '1s ease'

    },1000);

    setTimeout(()=>{//위시 텍스트 애니
        wishTxtWrap.style.opacity = 1;
        wishTxtWrap.style.transition = '1s ease'

        wishPgGp.style.opacity = 1;
        wishPgGp.style.transform = 'translateY(0%)';
        wishPgGp.style.transition = '.5s ease'
    },1300)
    
    if(matchMedia("screen and (max-width: 767px)").matches){

        setTimeout(()=>{//위시 텍스트 애니
            wishTxtWrap.style.opacity = 1;
            wishTxtWrap.style.transition = '1s ease'
    
            wishPgGp.style.opacity = 1;
            wishPgGp.style.transform = 'translateY(0%)';
            wishPgGp.style.transition = '.5s ease'
        },500)
    }
}

//x btn click
backBtn.addEventListener('click',()=>{

    if(!wishPage.classList.contains('disable')){

        setTimeout(()=>{//위시페이지 숨기기
            wishPage.style.opacity = 0;
            wishPage.style.transition = '.5s ease'
            setTimeout(() => {
                wishPage.classList.add('disable');
                
                wishTxtWrap.style.opacity = 0;
                wishPgGp.style.opacity =0;
                wishPgGp.style.transform = 'translateY(10%)';

                let bgL = wishBgWrap.querySelector('.bg_left');
                let bgR = wishBgWrap.querySelector('.bg_right');
                bgL.style.transform = 'translateX(0)';
                bgR.style.transform = 'translateX(0)';
                for(let i = 0; i <wishBgImg.length ; i++){
                    wishBgImg[i].style.opacity = 0;
                }
            },500);//초기화
        })
        setTimeout(()=>{//디테일 페이지 나오기
            window.scrollTo(0, 0);
            detailPage.classList.remove('disable');
            setTimeout(()=>{
                detailPage.style.opacity =1;
                detailPage.style.transition = '.5s ease'
                pdDtailR.style.right = '0%';
                pdDtailR.style.transition = '.8s ease'
            },500)
        })

    }else if(!detailPage.classList.contains('disable')){
        setTimeout(()=>{//디테일 페이지 숨기기
            detailPage.style.opacity =0;
            detailPage.style.transition = '.5s ease'
            pdDtailR.style.right = '-100%';
            pdDtailR.style.transition = '.8s ease'
            if(matchMedia("screen and (max-width: 767px)").matches){
                pdDtailR.style.top = '100%';
                pdDtailR.style.transition = '.5s .5s ease'
                likePopup.style.opacity = 0;
            }
            setTimeout(() => {
                detailPage.classList.add('disable');
                pdDtailPage.classList.add('disable')
            },500);
        })
        setTimeout(()=>{//상품 페이지 나오기
            window.scrollTo(0, 0);

            pdPage.classList.remove('disable');
            pdFooter.classList.remove('disable');
            setTimeout(()=>{
                pdPage.style.opacity = 1;
                pdPage.style.transition ='1s ease'
                pdFooter.style.opacity = 1;
                pdFooter.style.transition ='1s ease'
            },500)
        })

    }

})








