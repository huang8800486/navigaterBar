defaultUrl()
function defaultUrl(){
    var currentId = "";
    var result = [];
    var navTopBox = $(".nav_top_box");
    var url = window.location.href;
    var twoUrl = url.split("/");
    var thirdUrl = twoUrl[twoUrl.length-1];
    var fourUrl = thirdUrl.split("#")[thirdUrl.split("#").length-1];
    var item = navTopBox.find(".topNavBtns");
    item.each(function(){
        currentId = $(this).attr("href").split("#")[$(this).attr("href").split("#").length-1];
        result.push(currentId);
    })
    for(var i = 0; i < item.length; i++){
        if(fourUrl == result[i]){
            item.eq(i).addClass("active").find("i").addClass("active").parent().siblings().removeClass("active").find("i").removeClass("active");
        }
    }
}

navigaterBar();
function navigaterBar(){
    var navTopBox = $(".nav_top_box");
    var item = navTopBox.find(".topNavBtns");
    var secondItemA = navTopBox.find(".secondBtn");
    var navBottomBox = $(".nav_bottom_box");
    var secondItemLi = navBottomBox.find("li");
    item.click(function(){
        var i = item.index($(this));
        item.eq(i).addClass("active").find("i").addClass("active").parent().siblings().removeClass("active").find("i").removeClass("active");
    })

    secondItemA.hover(function(){
        var i = secondItemA.index($(this))
        navBottomBox.find("ul").stop().animate({top:-48*i},300)
        enterNav();
    },function(){
        leaveNav();
    })

    secondItemLi.hover(function(){
        var i = secondItemLi.index($(this))
        secondItemA.eq(i).addClass("active").find("i").addClass("active");
        enterNav();
    },function(){
        leaveNav();
    })
    
    function enterNav(){
        navBottomBox.css({height:40})
    }

    function leaveNav(){
        navBottomBox.css({height:0})
        defaultUrl();
    }
}
