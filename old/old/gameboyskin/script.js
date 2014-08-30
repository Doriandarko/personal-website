/* 

Title: jQuery Tweet to Download
Version: 1.0.jQ
Created By: Tyler Colwell
Website: http://tyler.tc/

Copyright Â© 2010-2012 Tyler Colwell
- ALL RIGHTS RESERVED
- NO NOT DISTRIBUTE / BUNDLE
- NOT FOR RESALE

*/
/*-----------------------------------------------------------------------------------*/
/* Start Plugin
/*-----------------------------------------------------------------------------------*/
(function(i) {
    i.fn.tcTweetdl = function(g) {
        function k(a, b, c) {
            if (c) {
                var d = new Date;
                d.setTime(d.getTime() + 864E5 * c);
                c = "; expires=" + d.toGMTString()
            } else c = "";
            document.cookie = a + "=" + b + c + "; path=/"
        }
        function f(a) {
            for (var a = a + "=", b = document.cookie.split(";"), c = 0; c < b.length; c++) {
                for (var d = b[c];
                " " == d.charAt(0);) d = d.substring(1, d.length);
                if (0 == d.indexOf(a)) return d.substring(a.length, d.length)
            }
            return null
        }
        function l(b) {
            var e = b.type,
                b = jQuery(b.target.parentNode)
                    .parent("div.tweet-dl")
                    .attr("id"),
                c = a.dl,
                d = a.require_both;
            "tweet" == e && "" != c ? (k("ltd_" + b + "_tweet", "true", 365), !0 == d ? !0 == f("ltd_" + b + "_tweet") && !0 == f("ltd_" + b + "_follow") && setTimeout(window.location = c, 1100) : setTimeout(window.location = c, 1100)) : "follow" == e && "" != c && (k("ltd_" + b + "_follow", "true", 365), !0 == d ? !0 == f("ltd_" + b + "_tweet") && !0 == f("ltd_" + b + "_follow") && setTimeout(window.location = c, 1100) : setTimeout(window.location = c, 1100))
        }
        var a = {
            buttons: "follow",
            require_both: !1,
            makeCookie: !0,
            username: "TylerColwell7",
            counter: "horizontal",
            tweet_url: "http://tyler.tc",
            tweet_text: "",
            button_size: "medium",
            message: "Tweet about us or give us a Follow to start your download!",
            dl: "http://tyler.tc/"
        }, g = i.extend(a, g),
            g = i(this),
            e = g.attr("id"),
            j = f("ltd_" + e + "_tweet"),
            e = f("ltd_" + e + "_follow"),
            b = "",
            h = !1;
        if ("both" == a.buttons) if (!0 == a.require_both) "true" == j && "true" == e && (b = '<div class="tweet-dl-message">Thanks for Sharing!</div><div class="tweet-dl-buttons">You already unlocked this download, here is your <a href="' + a.dl + '" target="_blank">download link.</a>', h = !0);
        else if ("true" == j || "true" == e) b = '<div class="tweet-dl-message">Thanks for Sharing!</div><div class="tweet-dl-buttons">You already unlocked this download, here is your <a href="' + a.dl + '" target="_blank">download link.</a>', h = !0;
        "tweet" == a.buttons && "true" == j && (b = '<div class="tweet-dl-message">Thanks for Tweeting!</div><div class="tweet-dl-buttons">You already unlocked this download, here is your <a href="' + a.dl + '" target="_blank">download link.</a>', h = !0);
        "follow" == a.buttons && "true" == e && (b = '<div class="tweet-dl-message">Thanks for Following!</div><div class="tweet-dl-buttons">You already unlocked this download, here is your <a href="' + a.dl + '" target="_blank">download link.</a>', h = !0);
        !0 != h && (b = '<div class="tweet-dl-message">' + a.message + '</div><div class="tweet-dl-buttons">', "follow" == a.buttons ? b = b + '<a href="http://twitter.com/' + a.username + '" data-size="' + a.button_size + '" class="twitter-follow-button" data-show-count="' + a.counter + '">Follow @' + a.username + "</a>" : "tweet" == a.buttons ? b = b + '<a href="https://twitter.com/share" data-size="' + a.button_size + '" class="twitter-share-button" data-count="' + a.counter + '" data-url="' + a.tweet_url + '" data-text="' + a.tweet_text + '">Tweet</a>' : "both" == a.buttons && (b = b + '<a href="https://twitter.com/share" class="twitter-share-button" data-size="' + a.button_size + '" data-count="' + a.counter + '" data-url="' + a.tweet_url + '" data-text="' + a.tweet_text + '">Tweet</a><a href="http://twitter.com/' + a.username + '" class="twitter-follow-button" data-size="' + a.button_size + '" data-show-count="' + a.counter + '">Follow @' + a.username + "</a>"), b += "</div>");
        g.append(b);
        twttr.events.bind("tweet", l);
        twttr.events.bind("follow", l)
    }
})(jQuery);