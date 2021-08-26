import $ from 'jquery';
const welcomeBtn = $('.js-welcomeBtn');
const downloadBtn =$('.js-downloadBtn');

function pressBtn(btn, className){
  if(btn.length>1){
    for(let i in btn){
    console.log(btn[i]);}
  }else{
    btn.on('mousedown', function(){
      btn.toggleClass(className);
    });
    btn.on('mouseup', function(){
      btn.toggleClass(className);
    });
  }
    
  
  
}
pressBtn(welcomeBtn, 'welcome-section__btn_pressed');
pressBtn(downloadBtn, 'download-card__btn_pressed');

