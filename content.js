	$('.logo img').attr('src',chrome.runtime.getURL("Assets/ElearnLogo.png"))
	$('.logo img').width(323)
	$('.event,.event-item span .icon')
	$('#site-footer').hide()
	$('#site-footer').after(`<footer class="dutfooter">
		<div class="right">
		<p>
		<i class="fa fa-copyright"></i>
		سامانه آموزش الکترونیکی دانشگاه تهران. 
		</p>
		</div>
		<div class="left">
		<p>
		پوسته ModernUT و  کار های دیگر را
		<a href="https://twitter.com/danmirafzal"><i class="fa fa-twitter"></i>توییتر</i></a>
		دنبال کنید.
		</p>
		</div>
		</footer>`)
	$('.form-in-iframe').attr('style','border-radius:4px !important')
	$('#login-form .btn').attr("value",'ورود به حساب کاربری')
	$('.form-in-iframe .logo').attr('src',chrome.runtime.getURL("Assets/AuthLogo.png"))