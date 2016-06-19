

$(function(){
  
  $('section').each(function(){
    $(this).css({
      height:$(window).height()+'px'
    });
  });
  
  var startEff = ['grayscale', 'transparent', 'overlay'],
      hoverEff = ['boxRainGrow', 'popout', 'sliceDown', 'sliceDownLeft', 'fold', 'foldLeft', 'boxRandom', 'boxRain'],
      getRand = function(arr) {
        var max = arr.length - 1,
          rand = Math.floor(Math.random() * (max + 1));
        return arr[rand];
      };
 
  $('img.post').each(function(){
    $(this).adipoliNorm({
      startEffect : getRand(startEff),
      hoverEffect : getRand(hoverEff),
      overlayText : 'jQuery.adipolinorm.js'
    });
  }); 
  
});
