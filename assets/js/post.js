(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"isRTL",(function(){return a})),n.d(t,"isMobile",(function(){return o})),n.d(t,"isDarkMode",(function(){return r})),n.d(t,"formatDate",(function(){return i})),n.d(t,"getParameterByName",(function(){return s})),n.d(t,"adjustImageGallery",(function(){return c})),n.d(t,"managePostImages",(function(){return l})),n.d(t,"makeImagesZoomable",(function(){return d}));var a=function(){var e=document.querySelector("html");return["ar","he","fa"].includes(e.getAttribute("lang"))},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"768px";return window.matchMedia("(max-width: ".concat(e,")")).matches},r=function(){var e=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");return e&&e.matches},i=function(e){return e?new Date(e).toLocaleDateString(document.documentElement.lang,{year:"numeric",month:"long",day:"numeric"}):""},s=function(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var n=new RegExp("[?&]".concat(e,"(=([^&#]*)|&|#|$)")).exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null},c=function(){for(var e=document.querySelectorAll(".kg-gallery-image img"),t=0,n=e.length;t<n;t++){var a=e[t].closest(".kg-gallery-image"),o=e[t].attributes.width.value/e[t].attributes.height.value;a.style.flex="".concat(o," 1 0%")}},l=function(e){e(".js-post-content").find("img").each((function(){e(this).closest("figure").hasClass("kg-bookmark-card")||e(this).parent().is("a")||e(this).addClass("js-zoomable");var t=e(this).parent().find("figcaption");t?e(this).attr("alt",t.text()):e(this).attr("alt","")}))},d=function(e,t){t(".js-zoomable").on("opened",(function(){setTimeout((function(){var t=e(".medium-zoom-image--opened");t.length>1&&t.last().hide()}),10)}))}},18:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(4),i=n(5),s=n.n(i),c=n(3),l=n(2),d=n(1),u=null,m=null,f=window.pageYOffset,h=0,p=0,g=0,w=!1,b=function(){f=window.pageYOffset,v()},j=function(e){Object(d.isMobile)("1023px")?(o()("body").addClass("share-menu-displayed"),setTimeout((function(){u.removeAttr("data-aos")}),e)):o()("body").removeClass("share-menu-displayed")},y=function(){T(),j(100),setTimeout((function(){O(),v()}),200)},v=function(){w||requestAnimationFrame(k),w=!0},k=function(){var e=p-h,t=Math.ceil(f/e*100);t<=100&&x(t),w=!1},T=function(){h=window.innerHeight,p=o()(document).height()},O=function(){var e=m.parent().width(),t=e/2,n=Object(d.isMobile)()?2:3;m.parent().attr("viewBox","0 0 ".concat(e," ").concat(e)),m.attr("stroke-width",n),m.attr("r",t-(n-1)),m.attr("cx",t),m.attr("cy",t),g=2*t*Math.PI,m[0].style.strokeDasharray="".concat(g," ").concat(g),m[0].style.strokeDashoffset=g},x=function(e){if(e<=100){var t=g-e/100*g;m[0].style.strokeDashoffset=t}};o()(document).ready((function(){u=o()(".js-aos-wrapper");var e=o()(".js-scrolltop"),t=o()(".js-load-comments"),n=o()(".js-comments-iframe"),a=o()(".js-recommended-slider");if(s()(".js-post-content"),Object(d.adjustImageGallery)(),j(1e3),a.length>0){var i=new l.d(".js-recommended-slider",{type:"slider",rewind:!1,perView:3,swipeThreshold:!1,dragThreshold:!1,gap:0,direction:Object(d.isRTL)()?"rtl":"ltr",breakpoints:{1023:{type:"carousel",perView:2,swipeThreshold:80,dragThreshold:120},720:{type:"carousel",perView:2,swipeThreshold:80,dragThreshold:120},568:{type:"carousel",perView:1,swipeThreshold:80,dragThreshold:120}}});i.on("mount.after",(function(){Object(c.a)(".js-article-card-title",100),Object(c.a)(".js-article-card-title-no-image",250)})),i.on("length.change",(function(e){1===e&&(i.update({type:"slider"}),a.find(".js-controls").remove())})),i.mount({Controls:l.b,Swipe:l.c,Breakpoints:l.a,Length:function(e,t,n){return{mount:function(){n.emit("length.change",t.Sizes.length)}}}})}Object(c.a)(".js-article-card-title",100),Object(c.a)(".js-article-card-title-no-image",250),e.click((function(){o()("html, body").animate({scrollTop:0},500)})),t.click((function(){t.parent().hide(),n.fadeIn("slow")})),Object(d.managePostImages)(o.a),Object(d.makeImagesZoomable)(o.a,r.a),window.addEventListener("scroll",b,{passive:!0}),window.addEventListener("resize",y,{passive:!0})})),o()(window).on("load",(function(){m=o()(".js-progress"),T(),O(),k(),setTimeout((function(){m.parent().css("opacity",1)}),300)}))}},[[18,0,1]]]);