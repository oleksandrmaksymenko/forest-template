$(document).ready(function(){forest.init()});var forest=function(){var o=$(".first-container"),t=o.innerHeight()-120;return{init:function(){this.scrollWindow(),this.smoothScroll()},scrollWindow:function(){var o=this;$(window).on("scroll",function(){var n=$(this).scrollTop(),r=n/40;o.parralax(r),n>t?$("header").addClass("sticky"):$("header").removeClass("sticky")})},parralax:function(o){$(".parralax").css({"background-position":"50% "+-o+"px"}),console.log(o)},smoothScroll:function(){$(".next").bind("click",function(o){o.preventDefault();var t=$(this);$("html, body").stop().animate({scrollTop:$(t.attr("href")).offset().top-80},500)})}}}();