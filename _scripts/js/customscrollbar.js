!function(e){"undefined"!=typeof module&&module.exports?module.exports=e:e(jQuery,window,document)}(function($){!function(e){var t="function"==typeof define&&define.amd,o="undefined"!=typeof module&&module.exports,a="https:"==document.location.protocol?"https:":"http:";t||(o?require("jquery-mousewheel")($):$.event.special.mousewheel||$("head").append(decodeURI("%3Cscript src="+a+"//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),e()}(function(){var e="mCustomScrollbar",t="mCS",o=".mCustomScrollbar",a={setTop:0,setLeft:0,axis:"y",scrollbarPosition:"inside",scrollInertia:950,autoDraggerLength:!0,alwaysShowScrollbar:0,snapOffset:0,mouseWheel:{enable:!0,scrollAmount:"auto",axis:"y",deltaFactor:"auto",disableOver:["select","option","keygen","datalist","textarea"]},scrollButtons:{scrollType:"stepless",scrollAmount:"auto"},keyboard:{enable:!0,scrollType:"stepless",scrollAmount:"auto"},contentTouchScroll:25,documentTouchScroll:!0,advanced:{autoScrollOnFocus:"input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",updateOnContentResize:!0,updateOnImageLoad:"auto",autoUpdateTimeout:60},theme:"light",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},n=0,i={},r=window.attachEvent&&!window.addEventListener?1:0,l=!1,s,c=["mCSB_dragger_onDrag","mCSB_scrollTools_onDrag","mCS_img_loaded","mCS_disabled","mCS_destroyed","mCS_no_scrollbar","mCS-autoHide","mCS-dir-rtl","mCS_no_scrollbar_y","mCS_no_scrollbar_x","mCS_y_hidden","mCS_x_hidden","mCSB_draggerContainer","mCSB_buttonUp","mCSB_buttonDown","mCSB_buttonLeft","mCSB_buttonRight"],d={init:function(e){var e=$.extend(!0,{},a,e),t=u.call(this);if(e.live){var r=e.liveSelector||this.selector||o,l=$(r);if("off"===e.live)return void m(r);i[r]=setTimeout(function(){l.mCustomScrollbar(e),"once"===e.live&&l.length&&m(r)},500)}else m(r);return e.setWidth=e.set_width?e.set_width:e.setWidth,e.setHeight=e.set_height?e.set_height:e.setHeight,e.axis=e.horizontalScroll?"x":h(e.axis),e.scrollInertia=e.scrollInertia>0&&e.scrollInertia<17?17:e.scrollInertia,"object"!=typeof e.mouseWheel&&1==e.mouseWheel&&(e.mouseWheel={enable:!0,scrollAmount:"auto",axis:"y",preventDefault:!1,deltaFactor:"auto",normalizeDelta:!1,invert:!1}),e.mouseWheel.scrollAmount=e.mouseWheelPixels?e.mouseWheelPixels:e.mouseWheel.scrollAmount,e.mouseWheel.normalizeDelta=e.advanced.normalizeMouseWheelDelta?e.advanced.normalizeMouseWheelDelta:e.mouseWheel.normalizeDelta,e.scrollButtons.scrollType=p(e.scrollButtons.scrollType),f(e),$(t).each(function(){var t=$(this);if(!t.data("mCS")){t.data("mCS",{idx:++n,opt:e,scrollRatio:{y:null,x:null},overflowed:null,contentReset:{y:null,x:null},bindEvents:!1,tweenRunning:!1,sequential:{},langDir:t.css("direction"),cbOffsets:null,trigger:null,poll:{size:{o:0,n:0},img:{o:0,n:0},change:{o:0,n:0}}});var o=t.data("mCS"),a=o.opt,i=t.data("mcs-axis"),r=t.data("mcs-scrollbar-position"),l=t.data("mcs-theme");i&&(a.axis=i),r&&(a.scrollbarPosition=r),l&&(a.theme=l,f(a)),g.call(this),o&&a.callbacks.onCreate&&"function"==typeof a.callbacks.onCreate&&a.callbacks.onCreate.call(this),$("#mCSB_"+o.idx+"_container img:not(."+c[2]+")").addClass(c[2]),d.update.call(null,t)}})},update:function(e,t){var o=e||u.call(this);return $(o).each(function(){var e=$(this);if(e.data("mCS")){var o=e.data("mCS"),a=o.opt,n=$("#mCSB_"+o.idx+"_container"),i=$("#mCSB_"+o.idx),r=[$("#mCSB_"+o.idx+"_dragger_vertical"),$("#mCSB_"+o.idx+"_dragger_horizontal")];if(!n.length)return;o.tweenRunning&&j(e),t&&o&&a.callbacks.onBeforeUpdate&&"function"==typeof a.callbacks.onBeforeUpdate&&a.callbacks.onBeforeUpdate.call(this),e.hasClass(c[3])&&e.removeClass(c[3]),e.hasClass(c[4])&&e.removeClass(c[4]),i.css("max-height","none"),i.height()!==e.height()&&i.css("max-height",e.height()),x.call(this),"y"===a.axis||a.advanced.autoExpandHorizontalScroll||n.css("width",v(n)),o.overflowed=b.call(this),k.call(this),a.autoDraggerLength&&_.call(this),w.call(this),B.call(this);var l=[Math.abs(n[0].offsetTop),Math.abs(n[0].offsetLeft)];"x"!==a.axis&&(o.overflowed[0]?r[0].height()>r[0].parent().height()?y.call(this):(N(e,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}),o.contentReset.y=null):(y.call(this),"y"===a.axis?T.call(this):"yx"===a.axis&&o.overflowed[1]&&N(e,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==a.axis&&(o.overflowed[1]?r[1].width()>r[1].parent().width()?y.call(this):(N(e,l[1].toString(),{dir:"x",dur:0,overwrite:"none"}),o.contentReset.x=null):(y.call(this),"x"===a.axis?T.call(this):"yx"===a.axis&&o.overflowed[0]&&N(e,l[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),t&&o&&(2===t&&a.callbacks.onImageLoad&&"function"==typeof a.callbacks.onImageLoad?a.callbacks.onImageLoad.call(this):3===t&&a.callbacks.onSelectorChange&&"function"==typeof a.callbacks.onSelectorChange?a.callbacks.onSelectorChange.call(this):a.callbacks.onUpdate&&"function"==typeof a.callbacks.onUpdate&&a.callbacks.onUpdate.call(this)),Y.call(this)}})},scrollTo:function(e,t){if(void 0!==e&&null!=e){var o=u.call(this);return $(o).each(function(){var o=$(this);if(o.data("mCS")){var a=o.data("mCS"),n=a.opt,i={trigger:"external",scrollInertia:n.scrollInertia,scrollEasing:"mcsEaseInOut",moveDragger:!1,timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},r=$.extend(!0,{},i,t),l=F.call(this,e),s=r.scrollInertia>0&&r.scrollInertia<17?17:r.scrollInertia;l[0]=q.call(this,l[0],"y"),l[1]=q.call(this,l[1],"x"),r.moveDragger&&(l[0]*=a.scrollRatio.y,l[1]*=a.scrollRatio.x),r.dur=oe()?0:s,setTimeout(function(){null!==l[0]&&void 0!==l[0]&&"x"!==n.axis&&a.overflowed[0]&&(r.dir="y",r.overwrite="all",N(o,l[0].toString(),r)),null!==l[1]&&void 0!==l[1]&&"y"!==n.axis&&a.overflowed[1]&&(r.dir="x",r.overwrite="none",N(o,l[1].toString(),r))},r.timeout)}})}},stop:function(){var e=u.call(this);return $(e).each(function(){var e=$(this);e.data("mCS")&&j(e)})},disable:function(e){var t=u.call(this);return $(t).each(function(){var t=$(this);if(t.data("mCS")){var o=t.data("mCS");Y.call(this,"remove"),T.call(this),e&&y.call(this),k.call(this,!0),t.addClass(c[3])}})},destroy:function(){var t=u.call(this);return $(t).each(function(){var o=$(this);if(o.data("mCS")){var a=o.data("mCS"),n=a.opt,i=$("#mCSB_"+a.idx),r=$("#mCSB_"+a.idx+"_container"),l=$(".mCSB_"+a.idx+"_scrollbar");n.live&&m(n.liveSelector||$(t).selector),Y.call(this,"remove"),T.call(this),y.call(this),o.removeData("mCS"),J(this,"mcs"),l.remove(),r.find("img."+c[2]).removeClass(c[2]),i.replaceWith(r.contents()),o.removeClass(e+" _mCS_"+a.idx+" "+c[6]+" "+c[7]+" "+c[5]+" "+c[3]).addClass(c[4])}})}},u=function(){return"object"!=typeof $(this)||$(this).length<1?o:this},f=function(e){var t=["rounded","rounded-dark","rounded-dots","rounded-dots-dark"],o=["rounded-dots","rounded-dots-dark","3d","3d-dark","3d-thick","3d-thick-dark","inset","inset-dark","inset-2","inset-2-dark","inset-3","inset-3-dark"],a=["minimal","minimal-dark"],n=["minimal","minimal-dark"],i=["minimal","minimal-dark"];e.autoDraggerLength=!($.inArray(e.theme,t)>-1)&&e.autoDraggerLength,e.autoExpandScrollbar=!($.inArray(e.theme,o)>-1)&&e.autoExpandScrollbar,e.scrollButtons.enable=!($.inArray(e.theme,a)>-1)&&e.scrollButtons.enable,e.autoHideScrollbar=$.inArray(e.theme,n)>-1||e.autoHideScrollbar,e.scrollbarPosition=$.inArray(e.theme,i)>-1?"outside":e.scrollbarPosition},m=function(e){i[e]&&(clearTimeout(i[e]),J(i,e))},h=function(e){return"yx"===e||"xy"===e||"auto"===e?"yx":"x"===e||"horizontal"===e?"x":"y"},p=function(e){return"stepped"===e||"pixels"===e||"step"===e||"click"===e?"stepped":"stepless"},g=function(){var t=$(this),o=t.data("mCS"),a=o.opt,n=a.autoExpandScrollbar?" "+c[1]+"_expand":"",i=["<div id='mCSB_"+o.idx+"_scrollbar_vertical' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+a.theme+" mCSB_scrollTools_vertical"+n+"'><div class='"+c[12]+"'><div id='mCSB_"+o.idx+"_dragger_vertical' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>","<div id='mCSB_"+o.idx+"_scrollbar_horizontal' class='mCSB_scrollTools mCSB_"+o.idx+"_scrollbar mCS-"+a.theme+" mCSB_scrollTools_horizontal"+n+"'><div class='"+c[12]+"'><div id='mCSB_"+o.idx+"_dragger_horizontal' class='mCSB_dragger' style='position:absolute;' oncontextmenu='return false;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>"],r="yx"===a.axis?"mCSB_vertical_horizontal":"x"===a.axis?"mCSB_horizontal":"mCSB_vertical",l="yx"===a.axis?i[0]+i[1]:"x"===a.axis?i[1]:i[0],s="yx"===a.axis?"<div id='mCSB_"+o.idx+"_container_wrapper' class='mCSB_container_wrapper' />":"",d=a.autoHideScrollbar?" "+c[6]:"",u="x"!==a.axis&&"rtl"===o.langDir?" "+c[7]:"";a.setWidth&&t.css("width",a.setWidth),a.setHeight&&t.css("height",a.setHeight),a.setLeft="y"!==a.axis&&"rtl"===o.langDir?"989999px":a.setLeft,t.addClass(e+" _mCS_"+o.idx+d+u).wrapInner("<div id='mCSB_"+o.idx+"' class='mCustomScrollBox mCS-"+a.theme+" "+r+"'><div id='mCSB_"+o.idx+"_container' class='mCSB_container' style='position:relative; top:"+a.setTop+"; left:"+a.setLeft+";' dir="+o.langDir+" /></div>");var f=$("#mCSB_"+o.idx),m=$("#mCSB_"+o.idx+"_container");"y"===a.axis||a.advanced.autoExpandHorizontalScroll||m.css("width",v(m)),"outside"===a.scrollbarPosition?("static"===t.css("position")&&t.css("position","relative"),t.css("overflow","visible"),f.addClass("mCSB_outside").after(l)):(f.addClass("mCSB_inside").append(l),m.wrap(s)),S.call(this);var h=[$("#mCSB_"+o.idx+"_dragger_vertical"),$("#mCSB_"+o.idx+"_dragger_horizontal")];h[0].css("min-height",h[0].height()),h[1].css("min-width",h[1].width())},v=function(e){var t=[e[0].scrollWidth,Math.max.apply(Math,e.children().map(function(){return $(this).outerWidth(!0)}).get())],o=e.parent().width();return t[0]>o?t[0]:t[1]>o?t[1]:"100%"},x=function(){var e=$(this),t=e.data("mCS"),o=t.opt,a=$("#mCSB_"+t.idx+"_container");if(o.advanced.autoExpandHorizontalScroll&&"y"!==o.axis){a.css({width:"auto","min-width":0,"overflow-x":"scroll"});var n=Math.ceil(a[0].scrollWidth);3===o.advanced.autoExpandHorizontalScroll||2!==o.advanced.autoExpandHorizontalScroll&&n>a.parent().width()?a.css({width:n,"min-width":"100%","overflow-x":"inherit"}):a.css({"overflow-x":"inherit",position:"absolute"}).wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(a[0].getBoundingClientRect().right+.4)-Math.floor(a[0].getBoundingClientRect().left),"min-width":"100%",position:"relative"}).unwrap()}},S=function(){var e=$(this),t=e.data("mCS"),o=t.opt,a=$(".mCSB_"+t.idx+"_scrollbar:first"),n=ee(o.scrollButtons.tabindex)?"tabindex='"+o.scrollButtons.tabindex+"'":"",i=["<a href='#' class='"+c[13]+"' oncontextmenu='return false;' "+n+" />","<a href='#' class='"+c[14]+"' oncontextmenu='return false;' "+n+" />","<a href='#' class='"+c[15]+"' oncontextmenu='return false;' "+n+" />","<a href='#' class='"+c[16]+"' oncontextmenu='return false;' "+n+" />"],r=["x"===o.axis?i[2]:i[0],"x"===o.axis?i[3]:i[1],i[2],i[3]];o.scrollButtons.enable&&a.prepend(r[0]).append(r[1]).next(".mCSB_scrollTools").prepend(r[2]).append(r[3])},_=function(){var e=$(this),t=e.data("mCS"),o=$("#mCSB_"+t.idx),a=$("#mCSB_"+t.idx+"_container"),n=[$("#mCSB_"+t.idx+"_dragger_vertical"),$("#mCSB_"+t.idx+"_dragger_horizontal")],i=[o.height()/a.outerHeight(!1),o.width()/a.outerWidth(!1)],l=[parseInt(n[0].css("min-height")),Math.round(i[0]*n[0].parent().height()),parseInt(n[1].css("min-width")),Math.round(i[1]*n[1].parent().width())],s=r&&l[1]<l[0]?l[0]:l[1],c=r&&l[3]<l[2]?l[2]:l[3];n[0].css({height:s,"max-height":n[0].parent().height()-10}).find(".mCSB_dragger_bar").css({"line-height":l[0]+"px"}),n[1].css({width:c,"max-width":n[1].parent().width()-10})},w=function(){var e=$(this),t=e.data("mCS"),o=$("#mCSB_"+t.idx),a=$("#mCSB_"+t.idx+"_container"),n=[$("#mCSB_"+t.idx+"_dragger_vertical"),$("#mCSB_"+t.idx+"_dragger_horizontal")],i=[a.outerHeight(!1)-o.height(),a.outerWidth(!1)-o.width()],r=[i[0]/(n[0].parent().height()-n[0].height()),i[1]/(n[1].parent().width()-n[1].width())];t.scrollRatio={y:r[0],x:r[1]}},C=function(e,t,o){var a=o?c[0]+"_expanded":"",n=e.closest(".mCSB_scrollTools");"active"===t?(e.toggleClass(c[0]+" "+a),n.toggleClass(c[1]),e[0]._draggable=e[0]._draggable?0:1):e[0]._draggable||("hide"===t?(e.removeClass(c[0]),n.removeClass(c[1])):(e.addClass(c[0]),n.addClass(c[1])))},b=function(){var e=$(this),t=e.data("mCS"),o=$("#mCSB_"+t.idx),a=$("#mCSB_"+t.idx+"_container"),n=null==t.overflowed?a.height():a.outerHeight(!1),i=null==t.overflowed?a.width():a.outerWidth(!1),r=a[0].scrollHeight,l=a[0].scrollWidth;return r>n&&(n=r),l>i&&(i=l),[n>o.height(),i>o.width()]},y=function(){var e=$(this),t=e.data("mCS"),o=t.opt,a=$("#mCSB_"+t.idx),n=$("#mCSB_"+t.idx+"_container"),i=[$("#mCSB_"+t.idx+"_dragger_vertical"),$("#mCSB_"+t.idx+"_dragger_horizontal")];if(j(e),("x"!==o.axis&&!t.overflowed[0]||"y"===o.axis&&t.overflowed[0])&&(i[0].add(n).css("top",0),N(e,"_resetY")),"y"!==o.axis&&!t.overflowed[1]||"x"===o.axis&&t.overflowed[1]){var r=dx=0;"rtl"===t.langDir&&(r=a.width()-n.outerWidth(!1),dx=Math.abs(r/t.scrollRatio.x)),n.css("left",r),i[1].css("left",dx),N(e,"_resetX")}},B=function(){function e(){n=setTimeout(function(){$.event.special.mousewheel?(clearTimeout(n),E.call(t[0])):e()},100)}var t=$(this),o=t.data("mCS"),a=o.opt;if(!o.bindEvents){if(O.call(this),a.contentTouchScroll&&I.call(this),D.call(this),a.mouseWheel.enable){var n;e()}A.call(this),z.call(this),a.advanced.autoScrollOnFocus&&L.call(this),a.scrollButtons.enable&&P.call(this),a.keyboard.enable&&H.call(this),o.bindEvents=!0}},T=function(){var e=$(this),t=e.data("mCS"),o=t.opt,a="mCS_"+t.idx,n=".mCSB_"+t.idx+"_scrollbar",i=$("#mCSB_"+t.idx+",#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,"+n+" ."+c[12]+",#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal,"+n+">a"),r=$("#mCSB_"+t.idx+"_container");o.advanced.releaseDraggableSelectors&&i.add($(o.advanced.releaseDraggableSelectors)),o.advanced.extraDraggableSelectors&&i.add($(o.advanced.extraDraggableSelectors)),t.bindEvents&&($(document).add($(!R()||top.document)).unbind("."+a),i.each(function(){$(this).unbind("."+a)}),clearTimeout(e[0]._focusTimeout),J(e[0],"_focusTimeout"),clearTimeout(t.sequential.step),J(t.sequential,"step"),clearTimeout(r[0].onCompleteTimeout),J(r[0],"onCompleteTimeout"),t.bindEvents=!1)},k=function(e){var t=$(this),o=t.data("mCS"),a=o.opt,n=$("#mCSB_"+o.idx+"_container_wrapper"),i=n.length?n:$("#mCSB_"+o.idx+"_container"),r=[$("#mCSB_"+o.idx+"_scrollbar_vertical"),$("#mCSB_"+o.idx+"_scrollbar_horizontal")],l=[r[0].find(".mCSB_dragger"),r[1].find(".mCSB_dragger")];"x"!==a.axis&&(o.overflowed[0]&&!e?(r[0].add(l[0]).add(r[0].children("a")).css("display","block"),i.removeClass(c[8]+" "+c[10])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&l[0].css("display","none"),i.removeClass(c[10])):(r[0].css("display","none"),i.addClass(c[10])),i.addClass(c[8]))),"y"!==a.axis&&(o.overflowed[1]&&!e?(r[1].add(l[1]).add(r[1].children("a")).css("display","block"),i.removeClass(c[9]+" "+c[11])):(a.alwaysShowScrollbar?(2!==a.alwaysShowScrollbar&&l[1].css("display","none"),i.removeClass(c[11])):(r[1].css("display","none"),i.addClass(c[11])),i.addClass(c[9]))),o.overflowed[0]||o.overflowed[1]?t.removeClass(c[5]):t.addClass(c[5])},M=function(e){var t=e.type,o=e.target.ownerDocument!==document?[$(frameElement).offset().top,$(frameElement).offset().left]:null,a=R()&&e.target.ownerDocument!==top.document?[$(e.view.frameElement).offset().top,$(e.view.frameElement).offset().left]:[0,0];switch(t){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return o?[e.originalEvent.pageY-o[0]+a[0],e.originalEvent.pageX-o[1]+a[1],!1]:[e.originalEvent.pageY,e.originalEvent.pageX,!1];break;case"touchstart":case"touchmove":case"touchend":var n=e.originalEvent.touches[0]||e.originalEvent.changedTouches[0],i=e.originalEvent.touches.length||e.originalEvent.changedTouches.length;return e.target.ownerDocument!==document?[n.screenY,n.screenX,i>1]:[n.pageY,n.pageX,i>1];break;default:return o?[e.pageY-o[0]+a[0],e.pageX-o[1]+a[1],!1]:[e.pageY,e.pageX,!1]}},O=function(){function e(e){var t=c.find("iframe");if(t.length){var o=e?"auto":"none";t.css("pointer-events",o)}}function t(e,t,i,r){if(c[0].idleTimer=n.scrollInertia<233?250:0,u.attr("id")===s[1])var l="x",d=(u[0].offsetLeft-t+r)*a.scrollRatio.x;else var l="y",d=(u[0].offsetTop-e+i)*a.scrollRatio.y;N(o,d.toString(),{dir:l,drag:!0})}var o=$(this),a=o.data("mCS"),n=a.opt,i="mCS_"+a.idx,s=["mCSB_"+a.idx+"_dragger_vertical","mCSB_"+a.idx+"_dragger_horizontal"],c=$("#mCSB_"+a.idx+"_container"),d=$("#"+s[0]+",#"+s[1]),u,f,m,h=n.advanced.releaseDraggableSelectors?d.add($(n.advanced.releaseDraggableSelectors)):d,p=n.advanced.extraDraggableSelectors?$(!R()||top.document).add($(n.advanced.extraDraggableSelectors)):$(!R()||top.document);d.bind("mousedown."+i+" touchstart."+i+" pointerdown."+i+" MSPointerDown."+i,function(t){if(t.stopImmediatePropagation(),t.preventDefault(),K(t)){l=!0,r&&(document.onselectstart=function(){return!1}),e(!1),j(o),u=$(this);var a=u.offset(),i=M(t)[0]-a.top,s=M(t)[1]-a.left,c=u.height()+a.top,d=u.width()+a.left;i<c&&i>0&&s<d&&s>0&&(f=i,m=s),C(u,"active",n.autoExpandScrollbar)}}).bind("touchmove."+i,function(e){e.stopImmediatePropagation(),e.preventDefault();var o=u.offset(),a=M(e)[0]-o.top,n=M(e)[1]-o.left;t(f,m,a,n)}),$(document).add(p).bind("mousemove."+i+" pointermove."+i+" MSPointerMove."+i,function(e){if(u){var o=u.offset(),a=M(e)[0]-o.top,n=M(e)[1]-o.left;if(f===a&&m===n)return;t(f,m,a,n)}}).add(h).bind("mouseup."+i+" touchend."+i+" pointerup."+i+" MSPointerUp."+i,function(t){u&&(C(u,"active",n.autoExpandScrollbar),u=null),l=!1,r&&(document.onselectstart=null),e(!0)})},I=function(){function e(e){if(!Z(e)||l||M(e)[2])return void(s=0);s=1,W=0,A=0,p=1,r.removeClass("mCS_touch_action");var t=m.offset();g=M(e)[0]-t.top,v=M(e)[1]-t.left,E=[M(e)[0],M(e)[1]]}function t(e){if(Z(e)&&!l&&!M(e)[2]&&(d.documentTouchScroll||e.preventDefault(),e.stopImmediatePropagation(),(!A||W)&&p)){b=Q();var t=f.offset(),o=M(e)[0]-t.top,a=M(e)[1]-t.left,n="mcsLinearOut";if(_.push(o),w.push(a),E[2]=Math.abs(M(e)[0]-E[0]),E[3]=Math.abs(M(e)[1]-E[1]),c.overflowed[0])var s=h[0].parent().height()-h[0].height(),u=g-o>0&&o-g>-s*c.scrollRatio.y&&(2*E[3]<E[2]||"yx"===d.axis);if(c.overflowed[1])var x=h[1].parent().width()-h[1].width(),S=v-a>0&&a-v>-x*c.scrollRatio.x&&(2*E[2]<E[3]||"yx"===d.axis);u||S?(P||e.preventDefault(),W=1):(A=1,r.addClass("mCS_touch_action")),P&&e.preventDefault(),k="yx"===d.axis?[g-o,v-a]:"x"===d.axis?[null,v-a]:[g-o,null],m[0].idleTimer=250,c.overflowed[0]&&i(k[0],O,n,"y","all",!0),c.overflowed[1]&&i(k[1],O,n,"x",D,!0)}}function o(e){if(!Z(e)||l||M(e)[2])return void(s=0);s=1,e.stopImmediatePropagation(),j(r),C=Q();var t=f.offset();x=M(e)[0]-t.top,S=M(e)[1]-t.left,_=[],w=[]}function a(e){if(Z(e)&&!l&&!M(e)[2]){p=0,e.stopImmediatePropagation(),W=0,A=0,y=Q();var t=f.offset(),o=M(e)[0]-t.top,a=M(e)[1]-t.left;if(!(y-b>30)){T=1e3/(y-C);var r="mcsEaseOut",s=T<2.5,u=s?[_[_.length-2],w[w.length-2]]:[0,0];B=s?[o-u[0],a-u[1]]:[o-x,a-S];var h=[Math.abs(B[0]),Math.abs(B[1])];T=s?[Math.abs(B[0]/4),Math.abs(B[1]/4)]:[T,T];var g=[Math.abs(m[0].offsetTop)-B[0]*n(h[0]/T[0],T[0]),Math.abs(m[0].offsetLeft)-B[1]*n(h[1]/T[1],T[1])];k="yx"===d.axis?[g[0],g[1]]:"x"===d.axis?[null,g[1]]:[g[0],null],I=[4*h[0]+d.scrollInertia,4*h[1]+d.scrollInertia];var v=parseInt(d.contentTouchScroll)||0;k[0]=h[0]>v?k[0]:0,k[1]=h[1]>v?k[1]:0,c.overflowed[0]&&i(k[0],I[0],r,"y",D,!1),c.overflowed[1]&&i(k[1],I[1],r,"x",D,!1)}}}function n(e,t){var o=[1.5*t,2*t,t/1.5,t/2];return e>90?t>4?o[0]:o[3]:e>60?t>3?o[3]:o[2]:e>30?t>8?o[1]:t>6?o[0]:t>4?t:o[2]:t>8?t:o[3]}function i(e,t,o,a,n,i){e&&N(r,e.toString(),{dur:t,scrollEasing:o,dir:a,overwrite:n,drag:i})}var r=$(this),c=r.data("mCS"),d=c.opt,u="mCS_"+c.idx,f=$("#mCSB_"+c.idx),m=$("#mCSB_"+c.idx+"_container"),h=[$("#mCSB_"+c.idx+"_dragger_vertical"),$("#mCSB_"+c.idx+"_dragger_horizontal")],p,g,v,x,S,_=[],w=[],C,b,y,B,T,k,O=0,I,D="yx"===d.axis?"none":"all",E=[],W,A,L=m.find("iframe"),z=["touchstart."+u+" pointerdown."+u+" MSPointerDown."+u,"touchmove."+u+" pointermove."+u+" MSPointerMove."+u,"touchend."+u+" pointerup."+u+" MSPointerUp."+u],P=void 0!==document.body.style.touchAction;m.bind(z[0],function(t){e(t)}).bind(z[1],function(e){t(e)}),f.bind(z[0],function(e){o(e)}).bind(z[2],function(e){a(e)}),L.length&&L.each(function(){$(this).load(function(){R(this)&&$(this.contentDocument||this.contentWindow.document).bind(z[0],function(t){e(t),o(t)}).bind(z[1],function(e){t(e)}).bind(z[2],function(e){a(e)})})})},D=function(){function e(){return window.getSelection?window.getSelection().toString():document.selection&&"Control"!=document.selection.type?document.selection.createRange().text:0}function t(e,t,a){i.type=a&&u?"stepped":"stepless",i.scrollAmount=10,U(o,e,t,"mcsLinearOut",a?60:null)}var o=$(this),a=o.data("mCS"),n=a.opt,i=a.sequential,r="mCS_"+a.idx,c=$("#mCSB_"+a.idx+"_container"),d=c.parent(),u;c.bind("mousedown."+r,function(e){s||u||(u=1,l=!0)}).add(document).bind("mousemove."+r,function(o){if(!s&&u&&e()){var r=c.offset(),l=M(o)[0]-r.top+c[0].offsetTop,f=M(o)[1]-r.left+c[0].offsetLeft;l>0&&l<d.height()&&f>0&&f<d.width()?i.step&&t("off",null,"stepped"):("x"!==n.axis&&a.overflowed[0]&&(l<0?t("on",38):l>d.height()&&t("on",40)),"y"!==n.axis&&a.overflowed[1]&&(f<0?t("on",37):f>d.width()&&t("on",39)))}}).bind("mouseup."+r+" dragend."+r,function(e){s||(u&&(u=0,t("off",null)),l=!1)})},E=function(){function e(e,n){if(j(t),!W(t,e.target)){var s="auto"!==a.mouseWheel.deltaFactor?parseInt(a.mouseWheel.deltaFactor):r&&e.deltaFactor<100?100:e.deltaFactor||100,c=a.scrollInertia;if("x"===a.axis||"x"===a.mouseWheel.axis)var d="x",u=[Math.round(s*o.scrollRatio.x),parseInt(a.mouseWheel.scrollAmount)],f="auto"!==a.mouseWheel.scrollAmount?u[1]:u[0]>=i.width()?.9*i.width():u[0],m=Math.abs($("#mCSB_"+o.idx+"_container")[0].offsetLeft),h=l[1][0].offsetLeft,p=l[1].parent().width()-l[1].width(),g=e.deltaX||e.deltaY||n;else var d="y",u=[Math.round(s*o.scrollRatio.y),parseInt(a.mouseWheel.scrollAmount)],f="auto"!==a.mouseWheel.scrollAmount?u[1]:u[0]>=i.height()?.9*i.height():u[0],m=Math.abs($("#mCSB_"+o.idx+"_container")[0].offsetTop),h=l[0][0].offsetTop,p=l[0].parent().height()-l[0].height(),g=e.deltaY||n;"y"===d&&!o.overflowed[0]||"x"===d&&!o.overflowed[1]||((a.mouseWheel.invert||e.webkitDirectionInvertedFromDevice)&&(g=-g),a.mouseWheel.normalizeDelta&&(g=g<0?-1:1),(g>0&&0!==h||g<0&&h!==p||a.mouseWheel.preventDefault)&&(e.stopImmediatePropagation(),e.preventDefault()),e.deltaFactor<2&&!a.mouseWheel.normalizeDelta&&(f=e.deltaFactor,c=17),N(t,(m-g*f).toString(),{dir:d,dur:c}))}}if($(this).data("mCS")){var t=$(this),o=t.data("mCS"),a=o.opt,n="mCS_"+o.idx,i=$("#mCSB_"+o.idx),l=[$("#mCSB_"+o.idx+"_dragger_vertical"),$("#mCSB_"+o.idx+"_dragger_horizontal")],s=$("#mCSB_"+o.idx+"_container").find("iframe");s.length&&s.each(function(){$(this).load(function(){R(this)&&$(this.contentDocument||this.contentWindow.document).bind("mousewheel."+n,function(t,o){e(t,o)})})}),i.bind("mousewheel."+n,function(t,o){e(t,o)})}},R=function(e){var t=null;if(e){try{var o=e.contentDocument||e.contentWindow.document;t=o.body.innerHTML}catch(e){}return null!==t}try{var o=top.document;t=o.body.innerHTML}catch(e){}return null!==t},W=function(e,t){var o=t.nodeName.toLowerCase(),a=e.data("mCS").opt.mouseWheel.disableOver,n=["select","textarea"];return $.inArray(o,a)>-1&&!($.inArray(o,n)>-1&&!$(t).is(":focus"))},A=function(){var e=$(this),t=e.data("mCS"),o="mCS_"+t.idx,a=$("#mCSB_"+t.idx+"_container"),n=a.parent(),i=$(".mCSB_"+t.idx+"_scrollbar ."+c[12]),r;i.bind("mousedown."+o+" touchstart."+o+" pointerdown."+o+" MSPointerDown."+o,function(e){l=!0,$(e.target).hasClass("mCSB_dragger")||(r=1)}).bind("touchend."+o+" pointerup."+o+" MSPointerUp."+o,function(e){l=!1}).bind("click."+o,function(o){if(r&&(r=0,$(o.target).hasClass(c[12])||$(o.target).hasClass("mCSB_draggerRail"))){j(e);var i=$(this),l=i.find(".mCSB_dragger");if(i.parent(".mCSB_scrollTools_horizontal").length>0){if(!t.overflowed[1])return;var s="x",d=o.pageX>l.offset().left?-1:1,u=Math.abs(a[0].offsetLeft)-d*(.9*n.width())}else{if(!t.overflowed[0])return;var s="y",d=o.pageY>l.offset().top?-1:1,u=Math.abs(a[0].offsetTop)-d*(.9*n.height())}N(e,u.toString(),{dir:s,scrollEasing:"mcsEaseInOut"})}})},L=function(){var e=$(this),t=e.data("mCS"),o=t.opt,a="mCS_"+t.idx,n=$("#mCSB_"+t.idx+"_container"),i=n.parent();n.bind("focusin."+a,function(t){var a=$(document.activeElement),r=n.find(".mCustomScrollBox").length,l=0;a.is(o.advanced.autoScrollOnFocus)&&(j(e),clearTimeout(e[0]._focusTimeout),e[0]._focusTimer=r?17*r:0,e[0]._focusTimeout=setTimeout(function(){var t=[te(a)[0],te(a)[1]],r=[n[0].offsetTop,n[0].offsetLeft],l=[r[0]+t[0]>=0&&r[0]+t[0]<i.height()-a.outerHeight(!1),r[1]+t[1]>=0&&r[0]+t[1]<i.width()-a.outerWidth(!1)],s="yx"!==o.axis||l[0]||l[1]?"all":"none";"x"===o.axis||l[0]||N(e,t[0].toString(),{dir:"y",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0}),"y"===o.axis||l[1]||N(e,t[1].toString(),{dir:"x",scrollEasing:"mcsEaseInOut",overwrite:s,dur:0})},e[0]._focusTimer))})},z=function(){var e=$(this),t=e.data("mCS"),o="mCS_"+t.idx,a=$("#mCSB_"+t.idx+"_container").parent();a.bind("scroll."+o,function(e){0===a.scrollTop()&&0===a.scrollLeft()||$(".mCSB_"+t.idx+"_scrollbar").css("visibility","hidden")})},P=function(){var e=$(this),t=e.data("mCS"),o=t.opt,a=t.sequential,n="mCS_"+t.idx,i=".mCSB_"+t.idx+"_scrollbar";$(i+">a").bind("mousedown."+n+" touchstart."+n+" pointerdown."+n+" MSPointerDown."+n+" mouseup."+n+" touchend."+n+" pointerup."+n+" MSPointerUp."+n+" mouseout."+n+" pointerout."+n+" MSPointerOut."+n+" click."+n,function(n){function i(t,n){a.scrollAmount=o.scrollButtons.scrollAmount,U(e,t,n)}if(n.preventDefault(),K(n)){var r=$(this).attr("class");switch(a.type=o.scrollButtons.scrollType,n.type){case"mousedown":case"touchstart":case"pointerdown":case"MSPointerDown":if("stepped"===a.type)return;l=!0,t.tweenRunning=!1,i("on",r);break;case"mouseup":case"touchend":case"pointerup":case"MSPointerUp":case"mouseout":case"pointerout":case"MSPointerOut":if("stepped"===a.type)return;l=!1,a.dir&&i("off",r);break;case"click":if("stepped"!==a.type||t.tweenRunning)return;i("on",r);break}}})},H=function(){function e(e){function i(e,i){n.type=a.keyboard.scrollType,n.scrollAmount=a.keyboard.scrollAmount,"stepped"===n.type&&o.tweenRunning||U(t,e,i)}switch(e.type){case"blur":o.tweenRunning&&n.dir&&i("off",null);break;case"keydown":case"keyup":var r=e.keyCode?e.keyCode:e.which,d="on";if("x"!==a.axis&&(38===r||40===r)||"y"!==a.axis&&(37===r||39===r)){if((38===r||40===r)&&!o.overflowed[0]||(37===r||39===r)&&!o.overflowed[1])return;"keyup"===e.type&&(d="off"),$(document.activeElement).is(c)||(e.preventDefault(),e.stopImmediatePropagation(),i(d,r))}else if(33===r||34===r){if((o.overflowed[0]||o.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type){j(t);var u=34===r?-1:1;if("x"===a.axis||"yx"===a.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",m=Math.abs(l[0].offsetLeft)-u*(.9*s.width());else var f="y",m=Math.abs(l[0].offsetTop)-u*(.9*s.height());N(t,m.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}}else if((35===r||36===r)&&!$(document.activeElement).is(c)&&((o.overflowed[0]||o.overflowed[1])&&(e.preventDefault(),e.stopImmediatePropagation()),"keyup"===e.type)){if("x"===a.axis||"yx"===a.axis&&o.overflowed[1]&&!o.overflowed[0])var f="x",m=35===r?Math.abs(s.width()-l.outerWidth(!1)):0;else var f="y",m=35===r?Math.abs(s.height()-l.outerHeight(!1)):0;N(t,m.toString(),{dir:f,scrollEasing:"mcsEaseInOut"})}break}}var t=$(this),o=t.data("mCS"),a=o.opt,n=o.sequential,i="mCS_"+o.idx,r=$("#mCSB_"+o.idx),l=$("#mCSB_"+o.idx+"_container"),s=l.parent(),c="input,textarea,select,datalist,keygen,[contenteditable='true']",d=l.find("iframe"),u=["blur."+i+" keydown."+i+" keyup."+i];d.length&&d.each(function(){$(this).load(function(){R(this)&&$(this.contentDocument||this.contentWindow.document).bind(u[0],function(t){e(t)})})}),r.attr("tabindex","0").bind(u[0],function(t){e(t)})},U=function(e,t,o,a,n){function i(t){s.snapAmount&&(d.scrollAmount=s.snapAmount instanceof Array?"x"===d.dir[0]?s.snapAmount[1]:s.snapAmount[0]:s.snapAmount);var o="stepped"!==d.type,r=n||(t?o?m/1.5:h:1e3/60),c=t?o?7.5:40:2.5,f=[Math.abs(u[0].offsetTop),Math.abs(u[0].offsetLeft)],p=[l.scrollRatio.y>10?10:l.scrollRatio.y,l.scrollRatio.x>10?10:l.scrollRatio.x],g="x"===d.dir[0]?f[1]+d.dir[1]*(p[1]*c):f[0]+d.dir[1]*(p[0]*c),v="x"===d.dir[0]?f[1]+d.dir[1]*parseInt(d.scrollAmount):f[0]+d.dir[1]*parseInt(d.scrollAmount),x="auto"!==d.scrollAmount?v:g,S=a||(t?o?"mcsLinearOut":"mcsEaseInOut":"mcsLinear"),_=!!t;if(t&&r<17&&(x="x"===d.dir[0]?f[1]:f[0]),N(e,x.toString(),{dir:d.dir[0],scrollEasing:S,dur:r,onComplete:_}),t)return void(d.dir=!1);clearTimeout(d.step),d.step=setTimeout(function(){i()},r)}function r(){clearTimeout(d.step),J(d,"step"),j(e)}var l=e.data("mCS"),s=l.opt,d=l.sequential,u=$("#mCSB_"+l.idx+"_container"),f="stepped"===d.type,m=s.scrollInertia<26?26:s.scrollInertia,h=s.scrollInertia<1?17:s.scrollInertia;switch(t){case"on":if(d.dir=[o===c[16]||o===c[15]||39===o||37===o?"x":"y",o===c[13]||o===c[15]||38===o||37===o?-1:1],j(e),ee(o)&&"stepped"===d.type)return;i(f);break;case"off":r(),(f||l.tweenRunning&&d.dir)&&i(!0);break}},F=function(e){var t=$(this).data("mCS").opt,o=[];return"function"==typeof e&&(e=e()),e instanceof Array?o=e.length>1?[e[0],e[1]]:"x"===t.axis?[null,e[0]]:[e[0],null]:(o[0]=e.y?e.y:e.x||"x"===t.axis?null:e,o[1]=e.x?e.x:e.y||"y"===t.axis?null:e),"function"==typeof o[0]&&(o[0]=o[0]()),"function"==typeof o[1]&&(o[1]=o[1]()),o},q=function(e,t){if(null!=e&&void 0!==e){var o=$(this),a=o.data("mCS"),n=a.opt,i=$("#mCSB_"+a.idx+"_container"),r=i.parent(),l=typeof e;t||(t="x"===n.axis?"x":"y");var s="x"===t?i.outerWidth(!1):i.outerHeight(!1),c="x"===t?i[0].offsetLeft:i[0].offsetTop,u="x"===t?"left":"top";switch(l){case"function":return e();break;case"object":var f=e.jquery?e:$(e);if(!f.length)return;return"x"===t?te(f)[1]:te(f)[0];break;case"string":case"number":if(ee(e))return Math.abs(e);if(-1!==e.indexOf("%"))return Math.abs(s*parseInt(e)/100);if(-1!==e.indexOf("-="))return Math.abs(c-parseInt(e.split("-=")[1]));if(-1!==e.indexOf("+=")){var m=c+parseInt(e.split("+=")[1]);return m>=0?0:Math.abs(m)}if(-1!==e.indexOf("px")&&ee(e.split("px")[0]))return Math.abs(e.split("px")[0]);if("top"===e||"left"===e)return 0;if("bottom"===e)return Math.abs(r.height()-i.outerHeight(!1));if("right"===e)return Math.abs(r.width()-i.outerWidth(!1));if("first"===e||"last"===e){var f=i.find(":"+e);return"x"===t?te(f)[1]:te(f)[0]}return $(e).length?"x"===t?te($(e))[1]:te($(e))[0]:(i.css(u,e),void d.update.call(null,o[0]));break}}},Y=function(e){function t(){if(clearTimeout(s[0].autoUpdate),0===i.parents("html").length)return void(i=null);s[0].autoUpdate=setTimeout(function(){return l.advanced.updateOnSelectorChange&&(r.poll.change.n=a(),r.poll.change.n!==r.poll.change.o)?(r.poll.change.o=r.poll.change.n,void n(3)):l.advanced.updateOnContentResize&&(r.poll.size.n=i[0].scrollHeight+i[0].scrollWidth+s[0].offsetHeight+i[0].offsetHeight+i[0].offsetWidth,r.poll.size.n!==r.poll.size.o)?(r.poll.size.o=r.poll.size.n,void n(1)):!l.advanced.updateOnImageLoad||"auto"===l.advanced.updateOnImageLoad&&"y"===l.axis||(r.poll.img.n=s.find("img").length,r.poll.img.n===r.poll.img.o)?void((l.advanced.updateOnSelectorChange||l.advanced.updateOnContentResize||l.advanced.updateOnImageLoad)&&t()):(r.poll.img.o=r.poll.img.n,void s.find("img").each(function(){o(this)}))},l.advanced.autoUpdateTimeout)}function o(e){function t(e,t){return function(){return t.apply(e,arguments)}}function o(){this.onload=null,$(e).addClass(c[2]),n(2)}if($(e).hasClass(c[2]))return void n();var a=new Image;a.onload=t(a,o),a.src=e.src
}function a(){!0===l.advanced.updateOnSelectorChange&&(l.advanced.updateOnSelectorChange="*");var e=0,t=s.find(l.advanced.updateOnSelectorChange);return l.advanced.updateOnSelectorChange&&t.length>0&&t.each(function(){e+=this.offsetHeight+this.offsetWidth}),e}function n(e){clearTimeout(s[0].autoUpdate),d.update.call(null,i[0],e)}var i=$(this),r=i.data("mCS"),l=r.opt,s=$("#mCSB_"+r.idx+"_container");if(e)return clearTimeout(s[0].autoUpdate),void J(s[0],"autoUpdate");t()},X=function(e,t,o){return Math.round(e/t)*t-o},j=function(e){var t=e.data("mCS");$("#mCSB_"+t.idx+"_container,#mCSB_"+t.idx+"_container_wrapper,#mCSB_"+t.idx+"_dragger_vertical,#mCSB_"+t.idx+"_dragger_horizontal").each(function(){G.call(this)})},N=function(e,t,o){function a(e){return r&&l.callbacks[e]&&"function"==typeof l.callbacks[e]}function n(){return[l.callbacks.alwaysTriggerOffsets||x>=S[0]+w,l.callbacks.alwaysTriggerOffsets||x<=-b]}function i(){var t=[u[0].offsetTop,u[0].offsetLeft],a=[g[0].offsetTop,g[0].offsetLeft],n=[u.outerHeight(!1),u.outerWidth(!1)],i=[d.height(),d.width()];e[0].mcs={content:u,top:t[0],left:t[1],draggerTop:a[0],draggerLeft:a[1],topPct:Math.round(100*Math.abs(t[0])/(Math.abs(n[0])-i[0])),leftPct:Math.round(100*Math.abs(t[1])/(Math.abs(n[1])-i[1])),direction:o.dir}}var r=e.data("mCS"),l=r.opt,s={trigger:"internal",dir:"y",scrollEasing:"mcsEaseOut",drag:!1,dur:l.scrollInertia,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},o=$.extend(s,o),c=[o.dur,o.drag?0:o.dur],d=$("#mCSB_"+r.idx),u=$("#mCSB_"+r.idx+"_container"),f=u.parent(),m=l.callbacks.onTotalScrollOffset?F.call(e,l.callbacks.onTotalScrollOffset):[0,0],h=l.callbacks.onTotalScrollBackOffset?F.call(e,l.callbacks.onTotalScrollBackOffset):[0,0];if(r.trigger=o.trigger,0===f.scrollTop()&&0===f.scrollLeft()||($(".mCSB_"+r.idx+"_scrollbar").css("visibility","visible"),f.scrollTop(0).scrollLeft(0)),"_resetY"!==t||r.contentReset.y||(a("onOverflowYNone")&&l.callbacks.onOverflowYNone.call(e[0]),r.contentReset.y=1),"_resetX"!==t||r.contentReset.x||(a("onOverflowXNone")&&l.callbacks.onOverflowXNone.call(e[0]),r.contentReset.x=1),"_resetY"!==t&&"_resetX"!==t){if(!r.contentReset.y&&e[0].mcs||!r.overflowed[0]||(a("onOverflowY")&&l.callbacks.onOverflowY.call(e[0]),r.contentReset.x=null),!r.contentReset.x&&e[0].mcs||!r.overflowed[1]||(a("onOverflowX")&&l.callbacks.onOverflowX.call(e[0]),r.contentReset.x=null),l.snapAmount){var p=l.snapAmount instanceof Array?"x"===o.dir?l.snapAmount[1]:l.snapAmount[0]:l.snapAmount;t=X(t,p,l.snapOffset)}switch(o.dir){case"x":var g=$("#mCSB_"+r.idx+"_dragger_horizontal"),v="left",x=u[0].offsetLeft,S=[d.width()-u.outerWidth(!1),g.parent().width()-g.width()],_=[t,0===t?0:t/r.scrollRatio.x],w=m[1],b=h[1],y=w>0?w/r.scrollRatio.x:0,B=b>0?b/r.scrollRatio.x:0;break;case"y":var g=$("#mCSB_"+r.idx+"_dragger_vertical"),v="top",x=u[0].offsetTop,S=[d.height()-u.outerHeight(!1),g.parent().height()-g.height()],_=[t,0===t?0:t/r.scrollRatio.y],w=m[0],b=h[0],y=w>0?w/r.scrollRatio.y:0,B=b>0?b/r.scrollRatio.y:0;break}_[1]<0||0===_[0]&&0===_[1]?_=[0,0]:_[1]>=S[1]?_=[S[0],S[1]]:_[0]=-_[0],e[0].mcs||(i(),a("onInit")&&l.callbacks.onInit.call(e[0])),clearTimeout(u[0].onCompleteTimeout),V(g[0],v,Math.round(_[1]),c[1],o.scrollEasing),!r.tweenRunning&&(0===x&&_[0]>=0||x===S[0]&&_[0]<=S[0])||V(u[0],v,Math.round(_[0]),c[0],o.scrollEasing,o.overwrite,{onStart:function(){o.callbacks&&o.onStart&&!r.tweenRunning&&(a("onScrollStart")&&(i(),l.callbacks.onScrollStart.call(e[0])),r.tweenRunning=!0,C(g),r.cbOffsets=n())},onUpdate:function(){o.callbacks&&o.onUpdate&&a("whileScrolling")&&(i(),l.callbacks.whileScrolling.call(e[0]))},onComplete:function(){if(o.callbacks&&o.onComplete){"yx"===l.axis&&clearTimeout(u[0].onCompleteTimeout);var t=u[0].idleTimer||0;u[0].onCompleteTimeout=setTimeout(function(){a("onScroll")&&(i(),l.callbacks.onScroll.call(e[0])),a("onTotalScroll")&&_[1]>=S[1]-y&&r.cbOffsets[0]&&(i(),l.callbacks.onTotalScroll.call(e[0])),a("onTotalScrollBack")&&_[1]<=B&&r.cbOffsets[1]&&(i(),l.callbacks.onTotalScrollBack.call(e[0])),r.tweenRunning=!1,u[0].idleTimer=0,C(g,"hide")},t)}}})}},V=function(e,t,o,a,n,i,r){function l(){w.stop||(v||f.call(),v=Q()-p,s(),v>=w.time&&(w.time=v>w.time?v+g-(v-w.time):v+g-1,w.time<v+1&&(w.time=v+1)),w.time<a?w.id=_(l):h.call())}function s(){a>0?(w.currVal=u(w.time,x,C,a,n),S[t]=Math.round(w.currVal)+"px"):S[t]=o+"px",m.call()}function c(){g=1e3/60,w.time=v+g,_=window.requestAnimationFrame?window.requestAnimationFrame:function(e){return s(),setTimeout(e,.01)},w.id=_(l)}function d(){null!=w.id&&(window.requestAnimationFrame?window.cancelAnimationFrame(w.id):clearTimeout(w.id),w.id=null)}function u(e,t,o,a,n){switch(n){case"linear":case"mcsLinear":return o*e/a+t;break;case"mcsLinearOut":return e/=a,e--,o*Math.sqrt(1-e*e)+t;break;case"easeInOutSmooth":return(e/=a/2)<1?o/2*e*e+t:(e--,-o/2*(e*(e-2)-1)+t);break;case"easeInOutStrong":return(e/=a/2)<1?o/2*Math.pow(2,10*(e-1))+t:(e--,o/2*(2-Math.pow(2,-10*e))+t);break;case"easeInOut":case"mcsEaseInOut":return(e/=a/2)<1?o/2*e*e*e+t:(e-=2,o/2*(e*e*e+2)+t);break;case"easeOutSmooth":return e/=a,e--,-o*(e*e*e*e-1)+t;break;case"easeOutStrong":return o*(1-Math.pow(2,-10*e/a))+t;break;case"easeOut":case"mcsEaseOut":default:var i=(e/=a)*e,r=i*e;return t+o*(.499999999999997*r*i+-2.5*i*i+5.5*r+-6.5*i+4*e)}}e._mTween||(e._mTween={top:{},left:{}});var r=r||{},f=r.onStart||function(){},m=r.onUpdate||function(){},h=r.onComplete||function(){},p=Q(),g,v=0,x=e.offsetTop,S=e.style,_,w=e._mTween[t];"left"===t&&(x=e.offsetLeft);var C=o-x;w.stop=0,"none"!==i&&d(),c()},Q=function(){return window.performance&&window.performance.now?window.performance.now():window.performance&&window.performance.webkitNow?window.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},G=function(){var e=this;e._mTween||(e._mTween={top:{},left:{}});for(var t=["top","left"],o=0;o<t.length;o++){var a=t[o];e._mTween[a].id&&(window.requestAnimationFrame?window.cancelAnimationFrame(e._mTween[a].id):clearTimeout(e._mTween[a].id),e._mTween[a].id=null,e._mTween[a].stop=1)}},J=function(e,t){try{delete e[t]}catch(o){e[t]=null}},K=function(e){return!(e.which&&1!==e.which)},Z=function(e){var t=e.originalEvent.pointerType;return!(t&&"touch"!==t&&2!==t)},ee=function(e){return!isNaN(parseFloat(e))&&isFinite(e)},te=function(e){var t=e.parents(".mCSB_container");return[e.offset().top-t.offset().top,e.offset().left-t.offset().left]},oe=function(){function e(){var e=["webkit","moz","ms","o"];if("hidden"in document)return"hidden";for(var t=0;t<e.length;t++)if(e[t]+"Hidden"in document)return e[t]+"Hidden";return null}var t=e();return!!t&&document[t]};$.fn[e]=function(e){return d[e]?d[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void $.error("Method "+e+" does not exist"):d.init.apply(this,arguments)},$[e]=function(e){return d[e]?d[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void $.error("Method "+e+" does not exist"):d.init.apply(this,arguments)},$[e].defaults=a,window[e]=!0,$(window).load(function(){$(o)[e](),$.extend($.expr[":"],{mcsInView:$.expr[":"].mcsInView||function(e){var t=$(e),o=t.parents(".mCSB_container"),a,n;if(o.length)return a=o.parent(),n=[o[0].offsetTop,o[0].offsetLeft],n[0]+te(t)[0]>=0&&n[0]+te(t)[0]<a.height()-t.outerHeight(!1)&&n[1]+te(t)[1]>=0&&n[1]+te(t)[1]<a.width()-t.outerWidth(!1)},mcsOverflow:$.expr[":"].mcsOverflow||function(e){var t=$(e).data("mCS");if(t)return t.overflowed[0]||t.overflowed[1]}})})})});