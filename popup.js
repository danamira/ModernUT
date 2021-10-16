$(document).ready(function() {
    chrome.storage.sync.get(['hideSlider'], function(result) {
        if(result.hideSlider) {
            $('#hide_slider').removeClass('off')
            $('#hide_slider').addClass('on')
        }
      });
    $('.switch').click(function() {
        if($(this).hasClass('on')) {
            $(this).removeClass("on")
            $(this).addClass("off")  
            chrome.storage.sync.set({hideSlider: 0}, function() {
                console.log('HideSlider switched to ' + 0);
              });              
        }
        else {   
            $(this).removeClass("off")
            $(this).addClass("on")    
            chrome.storage.sync.set({hideSlider: 1}, function() {
                console.log('HideSlider switched to ' + 1);
              });      
        }
    })
})