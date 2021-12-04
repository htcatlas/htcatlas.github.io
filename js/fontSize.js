(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = document.body.clientHeight;
            console.log(clientWidth)
            // if (!clientWidth) return;
            console.log(14 * (clientWidth / 980))
            docEl.style.fontSize = 14 * (clientWidth / 980) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);