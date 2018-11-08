/*------------------------------ 自适应长度 -----------------------------*/
	
;(function (doc, win, undefined) {
	var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in win? 'orientationchange' : 'resize',
	recalc = function () {
		var clientWidth = docEl.clientWidth;
		if (clientWidth === undefined) return;
		docEl.setAttribute("style","font-size:" + 20 * (clientWidth / 750) + "px !important");
	};
	if (doc.addEventListener === undefined) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false)
})(document, window);

