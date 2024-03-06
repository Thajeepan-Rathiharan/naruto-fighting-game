setTimeout(function(){ $('.text01').css('opacity',1).animate({'opacity':0},1000)
}, 6000);


$('.img01').click(function(){ 
  $('.wrapAct01').css({'display':'block'});
  setTimeout(function(){
    $('.img01A').css({'opacity':0,'display':'block'}).animate({'opacity':1,'left':'20%'},700); 
  },500);

  setTimeout(function(){
    $('.wrapAct01, .img01A').css('display','none');
  }, 3000);
  setTimeout(function(){
    $('.img02').addClass('anim02');
    $('.img02').addClass('def02');
    $('.wrap').css('opacity',0.9);
    $('.rock01').addClass('down01');
    $('.rock02').addClass('down02');
    $('.rock03').addClass('down03');
    $('.rock04').addClass('down04');
    $('.rock05').addClass('down05');
    $('.rock').css('display','block');
  }, 3200);
  setTimeout(function(){
    $('.img02').removeClass('anim02');
    $('.wrap').css('opacity',1);
  }, 6200);
  setTimeout(function(){
    $('.wrapAct01').css({'display':'block'});
  }, 6000);
  setTimeout(function(){    
    $('.img02').removeClass('def02');
    $('.rock01').removeClass('down01');
    $('.rock02').removeClass('down02');
    $('.rock03').removeClass('down03');
    $('.rock04').removeClass('down04');
    $('.rock05').removeClass('down05');
    $('.rock').css('display','none');
  }, 7700);
  setTimeout(function(){
    $('.img02B').css({'opacity':0,'display':'block'}).animate({'opacity':1,'left':'20%'},700); 
  },6200);
  setTimeout(function(){
    $('.img02B').css({'display':'none'});
    $('.wrapAct01').css({'display':'none'});
  },9700);
  setTimeout(function(){
  $('.health01').addClass('damage01');
  $('.health01').css({'width': '-=200%'});
  $('.wrapHealth01').addClass('border01');
  }, 9000);
  if ($('.health01').width() <= 10){    
    setTimeout(function(){
    $('.img02').css({'display':'none'});
    $('.img01').css({'right':'15%', 'width':'180px', 'height':'400px'}).animate({'right':'35%','width':'360px','height':'800px'});
      },9000);
  }
});




$('.img02').click(function(){ 
  $('.wrapAct01').css({'display':'block'});
  setTimeout(function(){
$('.img02A').css({'opacity':0,'display':'block'}).animate({'opacity':1,'right':'20%'},700);
},500);
  setTimeout(function(){
    $('.wrapAct01, .img02A').css('display','none');
  }, 3000);
  setTimeout(function(){
    $('.img01').addClass('anim01');
    $('.img01').addClass('def01');
    $('.sword').css('display','block');
    $('.sword01').addClass('cut01');
    $('.sword02').addClass('cut02');
    $('.sword03').addClass('cut03');
    $('.sword04').addClass('cut04');
    $('.sword05').addClass('cut05');
  }, 3200);
    setTimeout(function(){
    $('.img01').removeClass('anim01');
  }, 6200);
  setTimeout(function(){
    $('.wrapAct01').css({'display':'block'});
  }, 6000);
  setTimeout(function(){    
    $('.img01').removeClass('def01');
    $('.sword01').removeClass('cut01');
    $('.sword02').removeClass('cut02');
    $('.sword03').removeClass('cut03');
    $('.sword04').removeClass('cut04');
    $('.sword05').removeClass('cut05');
    $('.sword').css('display','none');
  }, 7700);
  setTimeout(function(){
    $('.img01B').css({'opacity':0,'display':'block'}).animate({'opacity':1,'right':'20%'},700); 
  },6200);
  setTimeout(function(){
    $('.img01B').css({'display':'none'});
    $('.wrapAct01').css({'display':'none'});
  },9700);
    setTimeout(function(){
  $('.health02').addClass('damage01');
  $('.health02').css({'width': '-=200%'});
  $('.wrapHealth02').addClass('border01');
  }, 9000);
  if ($('.health02').width() <= 10){    
    setTimeout(function(){
    $('.img01').css({'display':'none'});
    $('.img02').css({'right':'15%', 'width':'180px', 'height':'400px'}).animate({'right':'35%','width':'360px','height':'800px'});
      },9000);
  }
});


$('.jin01').click(function(){
  $('.wrapAct01').css({'display':'block'}); 
    setTimeout(function(){   $('.img01E').css({'opacity':0,'display':'block'}).animate({'opacity':1,'left':'30%'},700); 
  },500);
      setTimeout(function(){   $('.img01C').css({'opacity':0,'display':'block'}).animate({'opacity':1,'left':'20%'},700);  $('.img01E').css({'display':'none'}); 
  },2500);
  
  setTimeout(function(){
    $('.wrapAct01, .img01C').css('display','none');
  }, 5000);
  setTimeout(function(){
    $('.img01D').css({'right':0, 'display':'block'}).animate({'right':'45%', 'display':'block'},1000);
    $('.wrap').css({'opacity':'0.7'});
  }, 5000);
  setTimeout(function(){
    $('.img02').css({'display':'none'});
  }, 7500);
  setTimeout(function(){
    $('.wrap').css({'opacity':1});
    $('.img01D').css({'display':'none'});
    $('.img01').css({'right':'15%', 'width':'180px', 'height':'400px'}).animate({'right':'35%','width':'360px','height':'800px'});
  }, 8500);
  setTimeout(function(){
    $('.health01').addClass('damage02');
    $('.health01').css('width','-=500%');
    $('.wrapHealth01').addClass('border01');
  }, 9000);
});

$('.jin02').click(function(){
  $('.wrapAct01').css({'display':'block'}); 
  setTimeout(function(){   $('.img02E').css({'opacity':0,'display':'block'}).animate({'opacity':1,'left':'30%'},700); 
  },500);
  setTimeout(function(){         $('.img02C').css({'opacity':0,'display':'block'}).animate({'opacity':1,'left':'20%'},700);  $('.img02E').css({'display':'block','opacity':1}).animate({'display':'none','opacity':0},500); 
  },3000);
    setTimeout(function(){
    $('.wrapAct01, .img02C').css('display','none');
  }, 6000);
    setTimeout(function(){
    $('.img02D').css({'left':0, 'display':'block'}).animate({'left':'45%', 'display':'block'},1000);
    $('.wrap').css({'opacity':'0.7'});
  }, 6000);
  setTimeout(function(){
    $('.img01').css({'display':'none'});
  }, 8500);
  setTimeout(function(){
    $('.wrap').css({'opacity':1});
    $('.img02D').css({'display':'none'});
    $('.img02').css({'left':'15%', 'width':'240px', 'height':'410px'}).animate({'left':'35%','width':'480px','height':'820px'});
  }, 11000);
  setTimeout(function(){
    $('.health02').addClass('damage02');
    $('.health02').css('width','-=500%');
    $('.wrapHealth02').addClass('border01');
  }, 10000);
});


$('.textB01').click(function(){    
  $('.cloud01').css({'display':'block', 'opacity':0}).animate({'opacity':1}, 100);
  setTimeout(function(){
  $('.naruto').css({'display':'block', 'opacity':0}).animate({'opacity':1}, 200);
  }, 300);
  setTimeout(function(){
  $('.cloud01').css({'display':'none', 'opacity':0});
  }, 500);
  setTimeout(function(){
  $('.naruto').css({'display':'none', 'opacity':0});
  }, 1000);
  setTimeout(function(){
  $('.naruto01, .naruto02, .naruto03').css({'display':'block'});
  }, 1000);
  setTimeout(function(){
  $('.naruto01').css('left','40%').animate({'left':'200%'},800);
  }, 1100);
  setTimeout(function(){
  $('.naruto02').css('left','30%').animate({'left':'200%'},800);
  }, 1300);
  setTimeout(function(){
  $('.naruto03').css('left','25%').animate({'left':'200%'},800);
  }, 1500);
  setTimeout(function(){
  $('.naruto01, .naruto02, .naruto03').css({'display':'none'});
  }, 2000);
  $('.health02').css('width', '-=75%');  
  if($('.health02').width() < 200){
    $('.wrapHealth02').addClass('border01');
     }
});

$('.textB02').click(function(){    
  $('.cloud02').css({'display':'block', 'opacity':0}).animate({'opacity':1}, 100);
  setTimeout(function(){
  $('.sakura').css({'display':'block', 'opacity':0}).animate({'opacity':1}, 200);
  }, 300);
  setTimeout(function(){
  $('.cloud02').css({'display':'none', 'opacity':0});
  }, 500);
  setTimeout(function(){
  $('.sakura').css({'display':'none', 'opacity':0});
  }, 1000); 
  setTimeout(function(){
  $('.star').css({'display':'block', 'opacity':0}).animate({'opacity':1}, 100);
  $('.star').css({'right':'35%', 'opacity':0}).animate({'right':'200%'}, 2000);
  $('.star').addClass('left01');
  }, 1000); 
  $('.health01').css('width', '-=75%');  
  if($('.health01').width() < 200){
    $('.wrapHealth01').addClass('border01');
     }
});
