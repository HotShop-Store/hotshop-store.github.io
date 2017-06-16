/*
 =========================================================
 Material Bootstrap Wizard - v1.0.2
 =========================================================

 Product Page: https://www.creative-tim.com/product/material-bootstrap-wizard
 Copyright 2017 Creative Tim (http://www.creative-tim.com)
 Licensed under MIT (https://github.com/creativetimofficial/material-bootstrap-wizard/blob/master/LICENSE.md)

 =========================================================

 The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/
var searchVisible=0,transparent=!0,mobile_device=!1;
$(document).ready(function(){$.material.init();$(".wizard-card").bootstrapWizard({tabClass:"nav nav-pills",nextSelector:".btn-next",previousSelector:".btn-previous",onInit:function(a,b,c){b.find("li");a=b.closest(".wizard-card");$first_li=b.find("li:first-child a").html();$moving_div=$('<div class="moving-tab">'+$first_li+"</div>");$(".wizard-card .wizard-navigation").append($moving_div);refreshAnimation(a,c);$(".moving-tab").css("transition","transform 0s")},onTabShow:function(a,b,c){a=c+1;var d=
b.closest(".wizard-card");button_text=b.find("li:nth-child("+a+") a").html();setTimeout(function(){$(".moving-tab").text(button_text)},150);refreshAnimation(d,c)}})});
function refreshAnimation(a,b){$total=a.find(".nav li").length;$li_width=100/$total;total_steps=a.find(".nav li").length;move_distance=a.width()/total_steps;index_temp=b;vertical_level=0;if(mobile_device=600>$(document).width()&&3<$total)move_distance=a.width()/2,index_temp=b%2,$li_width=50;a.find(".nav li").css("width",$li_width+"%");step_width=move_distance;move_distance*=index_temp;$current=b+1;if(1==$current||1==mobile_device&&0==b%2)move_distance-=8;else if($current==total_steps||1==mobile_device&&
1==b%2)move_distance+=8;mobile_device&&(vertical_level=parseInt(b/2),vertical_level*=38);a.find(".moving-tab").css("width",step_width);$(".moving-tab").css({transform:"translate3d("+move_distance+"px, "+vertical_level+"px, 0)",transition:"all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)"})}function debounce(a,b,c){var d;return function(){var e=this,f=arguments;clearTimeout(d);d=setTimeout(function(){d=null;c||a.apply(e,f)},b);c&&!d&&a.apply(e,f)}};