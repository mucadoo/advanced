
// Scroller

$(document).ready(function() {
	$('a.panel').click(function () {
		$('a.panel').removeClass('selected');
		$(this).addClass('selected');
		current = $(this);
		$('#wrapper').scrollTo($(this).attr('href'), 1200);		
		return false;
	});
	$(window).resize(function () {
		if (!($('#wrapper').hasClass("left_aligned")))
		resizePanel();
	});
});
function resizePanel() {  
	 //get the browser width and height  
     width = $(window).width();  
     height = $(window).height();  
     //get the mask width: width * total of items  
     mask_width = width * $('.item').length;  
     //set the dimension   
     $('#wrapper, .item').css({width: width, height: height});  
     $('#mask').css({width: mask_width, height: height});  
     //if the item is displayed incorrectly, set it to the corrent pos  
     $('#wrapper').scrollTo($('a.selected').attr('href'), 0);  
}  



// Navigation Highlighting

jQuery(function( $ ){
	$('#menu li:first a').addClass('active');
	$('a.panel').click(function(){
		$('#menu').find('a').removeClass('active');
		var fragment = this.getAttribute('href');
		$('#menu a[href=' + fragment + ']').parentsUntil('#menu').children('li > a').toggleClass('active');
	});
});



// Tabs

$(document).ready(function() {
	//When page loads...
	$(".tab_content1").hide(); //Hide all content
	$("ul.tabs1 li:first").addClass("current").show(); //Activate first tab
	$(".tab_content1:first").show(); //Show first tab content
	//On Click Event
	$("ul.tabs1 li").click(function() {
		$("ul.tabs1 li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".tab_content1").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});

$(document).ready(function() {
	//When page loads...
	$(".tab_content2").hide(); //Hide all content
	$("ul.tabs2 li:first").addClass("current").show(); //Activate first tab
	$(".tab_content2:first").show(); //Show first tab content
	//On Click Event
	$("ul.tabs2 li").click(function() {
		$("ul.tabs2  li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".tab_content2").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});

$(document).ready(function() {
	//When page loads...
	$(".tab_content3").hide(); //Hide all content
	$("ul.tabs3 li:first").addClass("current").show(); //Activate first tab
	$(".tab_content3:first").show(); //Show first tab content
	//On Click Event
	$("ul.tabs3 li").click(function() {
		$("ul.tabs3 li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".tab_content3").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});

$(document).ready(function() {
	//When page loads...
	$(".tab_content4").hide(); //Hide all content
	$("ul.tabs4 li:first").addClass("current").show(); //Activate first tab
	$(".tab_content4:first").show(); //Show first tab content
	//On Click Event
	$("ul.tabs4 li").click(function() {
		$("ul.tabs4 li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".tab_content4").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});

$(document).ready(function() {
	//When page loads...
	$(".tab_content5").hide(); //Hide all content
	$("ul.tabs5 li:first").addClass("current").show(); //Activate first tab
	$(".tab_content5:first").show(); //Show first tab content
	//On Click Event
	$("ul.tabs5 li").click(function() {
		$("ul.tabs5 li").removeClass("current"); //Remove any "active" class
		$(this).addClass("current"); //Add "active" class to selected tab
		$(".tab_content5").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active ID content
		return false;
	});
});


$(document).ready(function(){
	$(".trigger").click(function(){
		$(".panel_trigger").toggle("fast");
		$(this).toggleClass("active");
		return false;
	});
});
