$(document).ready(function() {
    $(function() {
        $("a[href*=#]:not([href=#])").click(function() {
            if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
                var a = $(this.hash);
                if (a = a.length ? a : $("[name=" + this.hash.slice(1) + "]"), a.length) return $("html,body").animate({
                    scrollTop: a.offset().top
                }, 1e3), !1
            }
        })
    }), $("#code").viewportChecker({
        classToAdd: "up"
    }), $(".funItem").viewportChecker({
        classToAdd: "funUp"
    }), $("h1, .arrow").viewportChecker({
        classToAdd: "up"
    })
});