var browser = {
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return { 
            trident: u.indexOf('Trident') > -1, 
            presto: u.indexOf('Presto') > -1, 
            webKit: u.indexOf('AppleWebKit') > -1, 
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, 
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), 
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), 
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, 
            iPhone: u.indexOf('iPhone') > -1, 
            iPad: u.indexOf('iPad') > -1, 
            webApp: u.indexOf('Safari') == -1 
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}

var inapp = false;
if (browser.versions.mobile) {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
		inapp = true;
        }
        if (ua.match(/WeiBo/i) == "weibo") {
		inapp = true;
        }
        if (ua.match(/QQ/i) == "qq") {
		inapp = true;
        }
}

