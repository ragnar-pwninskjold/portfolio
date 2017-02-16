 $(document).ready(function() {
 	if($(window).width() <= 767) {
	$("ul.navbar-right").removeClass("normal-nav");
}
else {
	$("ul.navbar-right").addClass("normal-nav");
}
$('a[href*="#"]').each(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
&& location.hostname == this.hostname
&& this.hash.replace(/#/,'') ) {
var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
if ($target) {
var targetOffset = $target.offset().top;
$(this).click(function() {
$("#nav li a").removeClass("active");
$(this).addClass('active');
$('html, body').animate({scrollTop: targetOffset}, 1000);
return false;
});
}
}
});

$(window).on('resize', function() {
if($(window).width() <= 767) {
	$("ul.navbar-right").removeClass("normal-nav");
}
else {
	$("ul.navbar-right").addClass("normal-nav");
}
});


// if ($(window).width() <) {
// 	console.log("burgered");
// }

});