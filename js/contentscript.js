

var s = document.createElement('script');

s.src = chrome.extension.getURL('js/remopooq.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);


document.addEventListener('keydown', (event) => {

    var keyCode = event.keyCode;

    // console.log(keyCode);
    if (keyCode >= 49 && keyCode <= 55)
    {
        var selector = '#channel_' + (keyCode-48)
        console.log(selector);
        $(selector).trigger('click');
    } else if ( keyCode == 70 ) // 70 == f
    {
        var fs = $(".btn-enter-full-screen");

        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, true)
        fs[0].dispatchEvent(evt);
    } else if ( keyCode == 68 )  // D
    {
        var fs = $(".btn-exit-full-screen");

        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, true)
        fs[0].dispatchEvent(evt);
    } else if ( keyCode == 37 )  // <-
    {
        var fs = $(".btn-list-open");

        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, true)
        fs[0].dispatchEvent(evt);
    } else if ( keyCode == 39 )  // ->
    {
        var fs = $(".btn-list-close");

        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("click", false, true)
        fs[0].dispatchEvent(evt);
    }

}, false );

