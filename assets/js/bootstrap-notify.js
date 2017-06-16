(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):"object"===typeof exports?c(require("jquery")):c(jQuery)})(function(c){function m(a){var b=!1;c('[data-notify="container"]').each(function(f,d){var e=c(d),h=e.find('[data-notify="title"]').text().trim(),k=e.find('[data-notify="message"]').html().trim(),h=h===c("<div>"+a.settings.content.title+"</div>").html().trim(),k=k===c("<div>"+a.settings.content.message+"</div>").html().trim(),e=e.hasClass("alert-"+a.settings.type);h&&k&&
e&&(b=!0);return!b});return b}function l(a,b,f){f=c.extend(!0,{},{content:{message:"object"===typeof b?b.message:b,title:b.title?b.title:"",icon:b.icon?b.icon:"",url:b.url?b.url:"#",target:b.target?b.target:"-"}},f);this.settings=c.extend(!0,{},g,f);this._defaults=g;"-"===this.settings.content.target&&(this.settings.content.target=this.settings.url_target);this.animations={start:"webkitAnimationStart oanimationstart MSAnimationStart animationstart",end:"webkitAnimationEnd oanimationend MSAnimationEnd animationend"};
"number"===typeof this.settings.offset&&(this.settings.offset={x:this.settings.offset,y:this.settings.offset});(this.settings.allow_duplicates||!this.settings.allow_duplicates&&!m(this))&&this.init()}var g={element:"body",position:null,type:"info",allow_dismiss:!0,allow_duplicates:!0,newest_on_top:!1,showProgressbar:!1,placement:{from:"top",align:"right"},offset:20,spacing:10,z_index:1031,delay:5E3,timer:1E3,url_target:"_blank",mouse_over:null,animate:{enter:"animated fadeInDown",exit:"animated fadeOutUp"},
onShow:null,onShown:null,onClose:null,onClosed:null,icon_type:"class",template:'<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><i data-notify="icon" class="material-icons"></i><span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'};
String.format=function(){for(var a=arguments[0],b=1;b<arguments.length;b++)a=a.replace(RegExp("\\{"+(b-1)+"\\}","gm"),arguments[b]);return a};c.extend(l.prototype,{init:function(){var a=this;this.buildNotify();this.settings.content.icon&&this.setIcon();"#"!=this.settings.content.url&&this.styleURL();this.styleDismiss();this.placement();this.bind();this.notify={$ele:this.$ele,update:function(b,c){var d={};"string"===typeof b?d[b]=c:d=b;for(var e in d)switch(e){case "type":this.$ele.removeClass("alert-"+
a.settings.type);this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass("progress-bar-"+a.settings.type);a.settings.type=d[e];this.$ele.addClass("alert-"+d[e]).find('[data-notify="progressbar"] > .progress-bar').addClass("progress-bar-"+d[e]);break;case "icon":var f=this.$ele.find('[data-notify="icon"]');"class"===a.settings.icon_type.toLowerCase()?f.html(d[e]):(f.is("img")||f.find("img"),f.attr("src",d[e]));break;case "progress":this.$ele.data("notify-delay",a.settings.delay-d[e]/
100*a.settings.delay);this.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",d[e]).css("width",d[e]+"%");break;case "url":this.$ele.find('[data-notify="url"]').attr("href",d[e]);break;case "target":this.$ele.find('[data-notify="url"]').attr("target",d[e]);break;default:this.$ele.find('[data-notify="'+e+'"]').html(d[e])}d=this.$ele.outerHeight()+parseInt(a.settings.spacing)+parseInt(a.settings.offset.y);a.reposition(d)},close:function(){a.close()}}},buildNotify:function(){var a=this.settings.content;
this.$ele=c(String.format(this.settings.template,this.settings.type,a.title,a.message,a.url,a.target));this.$ele.attr("data-notify-position",this.settings.placement.from+"-"+this.settings.placement.align);this.settings.allow_dismiss||this.$ele.find('[data-notify="dismiss"]').css("display","none");(0>=this.settings.delay&&!this.settings.showProgressbar||!this.settings.showProgressbar)&&this.$ele.find('[data-notify="progressbar"]').remove()},setIcon:function(){this.$ele.addClass("alert-with-icon");
"class"===this.settings.icon_type.toLowerCase()?this.$ele.find('[data-notify="icon"]').html(this.settings.content.icon):this.$ele.find('[data-notify="icon"]').is("img")?this.$ele.find('[data-notify="icon"]').attr("src",this.settings.content.icon):this.$ele.find('[data-notify="icon"]').append('<img src="'+this.settings.content.icon+'" alt="Notify Icon" />')},styleDismiss:function(){this.$ele.find('[data-notify="dismiss"]').css({position:"absolute",right:"10px",top:"50%",marginTop:"-13px",zIndex:this.settings.z_index+
2})},styleURL:function(){this.$ele.find('[data-notify="url"]').css({backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)",height:"100%",left:0,position:"absolute",top:0,width:"100%",zIndex:this.settings.z_index+1})},placement:function(){var a=this,b=this.settings.offset.y,f={display:"inline-block",margin:"0px auto",position:this.settings.position?this.settings.position:"body"===this.settings.element?"fixed":"absolute",transition:"all .5s ease-in-out",
zIndex:this.settings.z_index},d=!1,e=this.settings;c('[data-notify-position="'+this.settings.placement.from+"-"+this.settings.placement.align+'"]:not([data-closing="true"])').each(function(){b=Math.max(b,parseInt(c(this).css(e.placement.from))+parseInt(c(this).outerHeight())+parseInt(e.spacing))});!0===this.settings.newest_on_top&&(b=this.settings.offset.y);f[this.settings.placement.from]=b+"px";switch(this.settings.placement.align){case "left":case "right":f[this.settings.placement.align]=this.settings.offset.x+
"px";break;case "center":f.left=0,f.right=0}this.$ele.css(f).addClass(this.settings.animate.enter);c.each(["webkit-","moz-","o-","ms-",""],function(b,c){a.$ele[0].style[c+"AnimationIterationCount"]=1});c(this.settings.element).append(this.$ele);!0===this.settings.newest_on_top&&(b=parseInt(b)+parseInt(this.settings.spacing)+this.$ele.outerHeight(),this.reposition(b));c.isFunction(a.settings.onShow)&&a.settings.onShow.call(this.$ele);this.$ele.one(this.animations.start,function(){d=!0}).one(this.animations.end,
function(){c.isFunction(a.settings.onShown)&&a.settings.onShown.call(this)});setTimeout(function(){d||c.isFunction(a.settings.onShown)&&a.settings.onShown.call(this)},600)},bind:function(){var a=this;this.$ele.find('[data-notify="dismiss"]').on("click",function(){a.close()});this.$ele.mouseover(function(){c(this).data("data-hover","true")}).mouseout(function(){c(this).data("data-hover","false")});this.$ele.data("data-hover","false");if(0<this.settings.delay){a.$ele.data("notify-delay",a.settings.delay);
var b=setInterval(function(){var c=parseInt(a.$ele.data("notify-delay"))-a.settings.timer;if("false"===a.$ele.data("data-hover")&&"pause"===a.settings.mouse_over||"pause"!=a.settings.mouse_over){var d=(a.settings.delay-c)/a.settings.delay*100;a.$ele.data("notify-delay",c);a.$ele.find('[data-notify="progressbar"] > div').attr("aria-valuenow",d).css("width",d+"%")}c<=-a.settings.timer&&(clearInterval(b),a.close())},a.settings.timer)}},close:function(){var a=this,b=parseInt(this.$ele.css(this.settings.placement.from)),
f=!1;this.$ele.data("closing","true").addClass(this.settings.animate.exit);a.reposition(b);c.isFunction(a.settings.onClose)&&a.settings.onClose.call(this.$ele);this.$ele.one(this.animations.start,function(){f=!0}).one(this.animations.end,function(){c(this).remove();c.isFunction(a.settings.onClosed)&&a.settings.onClosed.call(this)});setTimeout(function(){if(!f&&(a.$ele.remove(),a.settings.onClosed))a.settings.onClosed(a.$ele)},600)},reposition:function(a){var b=this,f='[data-notify-position="'+this.settings.placement.from+
"-"+this.settings.placement.align+'"]:not([data-closing="true"])',d=this.$ele.nextAll(f);!0===this.settings.newest_on_top&&(d=this.$ele.prevAll(f));d.each(function(){c(this).css(b.settings.placement.from,a);a=parseInt(a)+parseInt(b.settings.spacing)+c(this).outerHeight()})}});c.notify=function(a,b){return(new l(this,a,b)).notify};c.notifyDefaults=function(a){return g=c.extend(!0,{},g,a)};c.notifyClose=function(a){"undefined"===typeof a||"all"===a?c("[data-notify]").find('[data-notify="dismiss"]').trigger("click"):
c('[data-notify-position="'+a+'"]').find('[data-notify="dismiss"]').trigger("click")}});