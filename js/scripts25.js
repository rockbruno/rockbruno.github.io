(function ($) {
    'use strict';
    jQuery(document).ready(function () {
        $('pre').addClass("language-swift");
        ///
        var showSponsor = false;
        ///
        var sponsorTitle = "Emerge Tools - Monitor and reduce app size"
        var sponsorIcon = "https://i.imgur.com/F4ZGrLz.png"
        var sponsorText = "Emerge helps teams build better, smaller apps. With binary profiling to enable developers to see the full impact of their changes as they make them and actionable insights to provide suggestions on ways devs can improve their code."
        var sponsorLink = "https://www.emergetools.com/?utm_source=swiftrocks&utm_medium=advertisement&utm_campaign=emerge/"

        const sponsorDivId = "sponsor-article-ad-auto"
        const sponsorDivs = document.getElementsByClassName(sponsorDivId)

        for (var i = 0; i<sponsorDivs.length; i++) {
            if (showSponsor && sponsorDivs[i].classList.contains("hidden")) {
                sponsorDivs[i].innerHTML = "<a href=\""+sponsorLink+"\" target=\"_blank\"><span></span></a><div class=\"sponsor-article-ad-auto-header\">SPONSOR</div><text><b>"+sponsorTitle+"</b></text><div class=\"sponsor-article-ad-auto-inner\"><img src=\""+sponsorIcon+"\" alt=\"Sponsor icon\"><div class=\"sponsor-article-ad-auto-text\"><p>"+sponsorText+"</p></div></div>"
                sponsorDivs[i].classList.remove("hidden");
            }
        }
    });
})(jQuery);