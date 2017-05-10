var ce_channel_list = [
    {'contentid': 'K01'},
    {'contentid': 'K02'},
    {'contentid': 'M01'},
    {'contentid': 'S01'},
    {'contentid': 'E01'},
    {'contentid': 'E07'},
    {'contentid': 'C2301'}
]

if( typeof player !== 'undefined') {
    if( typeof player.listUI !== 'undefined' ) {

        function change_channel(contentID) {
            console.log("chnage_channel... " + contentID)
            var opt = new Object();
            opt.isLive = true;
            opt.isAutoPlay = true;
            opt.programID = "";
            opt.cornerID = "";

            jarvis.lib.excuteDelegate( player.listUI.delegate,
                                       "onEvent",
                                       [jarvis.PLAYER_EVENT.VOD_CHANGE, contentID, opt]);
        }

        var i = 0;
        for(var c in ce_channel_list) {
            i++;
            v = $("<div id='channel_" + i + "'></div>").attr("channel",ce_channel_list[c]['contentid']).on('click',
                function() {
                    change_channel( $(this).attr('channel') );
                });
            v.appendTo($('body'));
        }
    }
}
