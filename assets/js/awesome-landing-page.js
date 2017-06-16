/*
 =========================================================
 Awesome Landing Page - v1.2.2
 =========================================================

 Product Page: https://www.creative-tim.com/product/awesome-landing-page
 Copyright 2017 Creative Tim (http://www.creative-tim.com)
 Licensed under MIT (https://github.com/creativetimofficial/awesome-landing-page/blob/master/LICENSE.md)

 =========================================================

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
var big_image;$().ready(function(){$(".selector").click(function(){SelectColor(this)});$("body").hasClass("landing-page1")});$(window).on("scroll",function(){responsive=$(window).width();768<=responsive&&parallax()});
function SelectColor(a){oldColor=$(".filter-gradient").attr("data-color");newColor=$(a).attr("data-color");oldButton=$('a[id^="Demo"]').attr("data-button");newButton=$(a).attr("data-button");$(".filter-gradient").removeClass(oldColor).addClass(newColor).attr("data-color",newColor);$('a[id^="Demo"]').removeClass("btn-"+oldButton).addClass("btn-"+newButton).attr("data-button",newButton);$(".carousel-indicators").removeClass("carousel-indicators-"+oldColor).addClass("carousel-indicators-"+newColor);
$(".card").removeClass("card-"+oldColor).addClass("card-"+newColor);$(".selector").removeClass("active");$(a).addClass("active")}$(".switch").each(function(){var a=$(this).parent("li");$(this).click(function(){if(a.siblings().hasClass("active")){a.addClass("active");a.siblings().removeClass("active");var b=$(this).attr("data-slide"),c=$("body").attr("class").split(" ").pop();$("body").removeClass(c);$("body").addClass("landing-page"+b)}})});
var parallax=debounce(function(){no_of_elements=0;$(".parallax").each(function(){var a=$(this);if(isElementInViewport(a)){var b=a.offset().top,c=$(window).scrollTop();a.find(".parallax-background-image").css("margin-top",(c-b)/3+"px")}})},6);function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;c||a.apply(e,f)},b);c&&!d&&a.apply(e,f)}}
function isElementInViewport(a){a=$(a);var b=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")?"body":"html",b=$(b).scrollTop(),c=b+$(window).height(),d=Math.round(a.offset().top);a=d+a.height();return d<c&&a>b};