window._Enter={appUrl:"http://app.hotsitestore.com.br",siteUrl:"http://www.hotsitestore.com.br",init:function(){_Enter.accountForm();_Enter.loginForm();_Enter.tokenForm()},loginForm:function(){$(".form-login").validate({rules:{email:{email:!0}},submitHandler:function(a){var b=$(a);if(!b.valid())return!1;var c=b.find('[type="submit"]').attr("disabled","disabled");$.ajax({url:_Enter.appUrl+"/api-v1/user/send-token/",type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify({email:b.find('[name="email"]').val()})}).done(function(a){b.slideUp();
$(".form-token").slideDown();Cookies.set("hs-session",a["x-hs-session-token"],{path:"/"})}).fail(_Enter.ajaxErrorMsg).always(function(a){c.removeAttr("disabled")});return!1},errorPlacement:function(a,b){}})},tokenForm:function(){$(".form-token").validate({rules:{email:{email:!0}},submitHandler:function(a){a=$(a);if(!a.valid())return!1;var b=a.find('[type="submit"]').attr("disabled","disabled");$.ajax({url:_Enter.appUrl+"/api-v1/user/auth-user/",type:"POST",contentType:"application/json",headers:{"x-hs-session-token":Cookies.get("hs-session")},
dataType:"json",data:JSON.stringify({token:a.find('[name="token"]').val()})}).done(function(a){a.userAuthenticated?(Cookies.set("hs-account",a.account,{path:"/"}),location.href=_Enter.siteUrl+"/admin/"):_Enter.ajaxErrorMsg({responseJSON:{error:"Token inv\u00e1lido. Verifique o c\u00f3digo digitado e tente novamente."}})}).fail(_Enter.ajaxErrorMsg).always(function(a){b.removeAttr("disabled")});return!1},errorPlacement:function(a,b){}})},accountForm:function(){var a=/http.?\:\/\//ig,b=/[^a-z0-9]+/ig;
$("input[name=mainDomain]").keyup(function(){$(this).val($(this).val().replace(a,"").split("/").shift().toLowerCase())});$("input[name=vtexStore]").keyup(function(){$(this).val($(this).val().replace(b,"").toLowerCase())});$(".form-account").validate({rules:{email:{email:!0}},submitHandler:function(a){a=$(a);if(!a.valid())return!1;var b=a.serializeArray(),c={},d;for(d in b)c[b[d].name]=b[d].value;var e=a.find('[type="submit"]').attr("disabled","disabled");$.ajax({url:_Enter.appUrl+"/api-v1/user/",
type:"POST",contentType:"application/json",dataType:"json",data:JSON.stringify(c)}).done(function(a){Cookies.set("hs-account",a.account,{path:"/"});location.href=_Enter.siteUrl+"/admin/new_hotsites.html"}).fail(_Enter.ajaxErrorMsg).fail(function(){e.removeAttr("disabled")});return!1},errorPlacement:function(a,b){}})},ajaxErrorMsg:function(a){a.responseJSON?$(".message-wrapper").html('<div class="alert alert-danger"> <span><b> Erro - </b> '+a.responseJSON.error+"</span> </div>"):$(".message-wrapper").html('<div class="alert alert-danger"> <span><b> Erro - </b> N\u00e3o foi poss\u00edvel enviar os dados!</span> </div>')}};
$(_Enter.init);