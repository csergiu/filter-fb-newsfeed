/*$('#pageNav li:eq(1)').after('<li class="navItem middleItem _55bi litestandNavItem _55bh"><a class="navLink bigPadding">FBNR</a></li>');*/
$('#pagelet_composer').before('<div class="main-div"><ul><li class="categories"><a style="background-color: #3b5998;">Social News</a></li><li class="categories"><a>Page News</a></li></ul></div>');


function filterShit() {
    $("._5pcb > div").each(function (i, elem) {
        if ($(this).attr("id").indexOf("more_pager_pagelet_") === -1) {
            console.log("A.selected elem: "); console.log(elem);
            $(this).find("a[class^=_5pb8]").each(function (x, index) {
                console.log("B.selected elem: "); console.log(index);
                if ($(this).attr("data-hovercard").indexOf("page") !== -1) {
                    //console.log("removed page");
                    console.log($(this).parent().parent().parent());
                }
            });
        }
});}

filterShit();