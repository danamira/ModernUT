require('jquery')
//Scripts below will be executed by the browser when user visits one of the urls included in manifest.json->content_scripts->matches.
// Replacing the logo placed in header of http://elearn.ut.ac.ir with the one provided by the extension. The scripts are ordered in a way that brings the smoothest transition.
$('.logo img').hide()
$('.logo').html('<a href="/"><img class="logo" id="mutlogo" src="'+chrome.runtime.getURL("Assets/ElearnLogo.png")+'"></a>')
$('.logo img').height('72px')
$('.logo img').width('auto')
$('#site-footer').hide()
$('#site-footer').after(`<footer class="dutfooter">
<div class="right">
<p>
<i class="fa fa-copyright"></i>
سامانه آموزش الکترونیکی دانشگاه تهران. 
</p>
</div>
<div class="left">
</div>
</footer>`)
$('.form-in-iframe').attr('style','border-radius:4px !important')
$('#login-form .btn').attr("value",'ورود به حساب کاربری')
$('.form-in-iframe .logo').attr('src',chrome.runtime.getURL("Assets/AuthLogo.png"))
$('.box.py-3.mdl-align .search-block .container h2').html('جستجو سریع میان درس ها')
$('.box.py-3.mdl-align #shortsearchbox').attr('placeholder','نام درس را وارد کنید...')
$('.coursesearchbox input[type=submit]').remove()
$('.coursesearchbox').append('<button type="submit"><i class="fa fa-search"></i></button>')
$('.enlight-frontpage .box.py-3.mdl-align').append('<div class="dut_links"><a href="/my">برو به میزکار</a></div>')
chrome.storage.sync.get(['hideSlider'], function(result) {
    if(!result.hideSlider) {
        $('.homepage-carousel').attr('style','display:block !important')
    }
  });
$('#meetingsummary .aconrecording td:last-child a').html('<i class="fa fa-play"></i>')

//

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