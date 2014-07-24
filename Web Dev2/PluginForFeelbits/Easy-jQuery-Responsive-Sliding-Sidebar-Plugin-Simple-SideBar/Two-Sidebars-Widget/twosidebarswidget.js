(function($){
        barRightMaxWidth = 350;
        gapR = 68;
        barLeftMaxWidth = 350;
        gapL = 68;
    $(document).ready(function(){
    
        H = $('html');
        H.css({marginRight: 0, marginLeft: 0, right: 0, left: 0, "overflow-x":"hidden"});
        B = $('body');
        bodyChildren = $('body').children();
        bodyChildren.wrapAll('<div>');
        theUniqueWrapper= bodyChildren.parent();
        theChildrenOfTheOnlyChildOfTheUniqueWrapper = theUniqueWrapper.children();
        theChildrenOfTheOnlyChildOfTheUniqueWrapper.wrapAll('<div>');
        theOnlyChildOfTheUniqueWrapper = theChildrenOfTheOnlyChildOfTheUniqueWrapper.parent();
    
        theUniqueWrapper.css({
            position: "absolute",
            top:0,
            right:0,
            bottom:0,
            left:0,
            margin: "0 0",
            background: "inherit",
        });
        theOnlyChildOfTheUniqueWrapper.css({
            position: "relative",
            margin: "0 auto",
            minWidth: "100%",
            background: "inherit",
        });
    
//RIGHT SIDEBAR    
        $.fn.rightSidebarWidget = function (options){
            var defaults = {
                rightSidebarCss: {
                    position: "fixed",
                    top: 0,
                    right: 0,
                    minHeight: "110%",
                    marginTop: 0,
                    marginBottom:0,
                },
            };
            var settings = $.extend( true, {}, defaults, options );
            this.each(function(){
                rightSidebar = $(this);
                rightSidebar.css(settings.rightSidebarCss).prependTo(B).hide();
                
                $(document).ready(function(){
                    var w = $(window).width();
                    rsbw = w-gapR;
                    
                    rightSidebar.css({
                        width: rsbw,
                        maxWidth: barRightMaxWidth,
                    });
                });
                
                $(window).resize(function(){
                    var w = $(window).width();
                    rsbw = w-gapR;
                    
                    rightSidebar.css({
                        width: rsbw,
                        maxWidth: barRightMaxWidth,
                    });
                });
            });
            return this;
        };
        
//LEFT SIDEBAR    
        $.fn.leftSidebarWidget = function (options){
            var defaults = {
                leftSidebarCss: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    minHeight: "110%",
                    marginTop: 0,
                    marginBottom:0,
                },
            };
            var settings = $.extend( true, {}, defaults, options );
            this.each(function(){
                leftSidebar = $(this);
                leftSidebar.css(settings.leftSidebarCss).prependTo(B).hide();
                
                $(document).ready(function(){
                    var w = $(window).width();
                    lsbw = w-gapL;
                    
                    leftSidebar.css({
                        width: lsbw,
                        maxWidth: barLeftMaxWidth,
                    });
                });
                
                $(window).resize(function(){
                    var w = $(window).width();
                    lsbw = w-gapL;
                    
                    leftSidebar.css({
                        width: lsbw,
                        maxWidth: barLeftMaxWidth,
                    });
                });
            });
            return this;
        };
                    
//OPEN RIGHT SIDEBAR        
        $.fn.openRightSidebarWidget = function() {
            this.each(function(){
                var m = $(this);
                var nl = 0;
                var cFix = $("*").filter(function() {return $(this).css('position') == 'fixed';}).not(rightSidebar).not(leftSidebar);
                var links = rightSidebar.find('a');
                
                $(window).resize(function(){
                    mwidth = rightSidebar.width();
                    
                    var Css = theUniqueWrapper.css('right');
                    var aaa = parseInt(Css);
                    
                    
                    if (aaa == 0) {
                        H.animate({right: 0, left: 0}, 100);
                        theUniqueWrapper.animate({right: 0, left: 0}, 100);
                        cFix.animate({right: 0, left: 0}, 100);
                    } else if (aaa !== mwidth)  {
                        H.animate({right: mwidth, left: -mwidth}, 200);
                        theUniqueWrapper.animate({right: mwidth, left: -mwdith}, 200);
                        cFix.animate({right: mwidth, left: -mwidth}, 200);
                    }
                });  

                m.click(function(){
                    var mwidth = rightSidebar.width();
                    nl++;
                    
                    var mrf = function(ll) {
                        return (ll % 2 === 0) ? true : false;
                    };
                    if (mrf(nl) === false) {
                        leftSidebar.hide();
                        rightSidebar.show();
                        H.animate({right: mwidth, left: -mwidth}, 400);
                        theUniqueWrapper.animate({right: mwidth, left: -mwidth}, 400);
                        cFix.animate({right: mwidth, left: -mwidth}, 400);
                    } else if (mrf(nl) === true) {
                        leftSidebar.show(500);
                        H.animate({right: 0, left: 0}, 400);
                        theUniqueWrapper.animate({right: 0, left: 0}, 400);
                        cFix.animate({right: 0, left: 0}, 400);
                        nl=0;
                    }
                });
                
                links.click(function(){
                    H.animate({right: 0, left: 0}, 400);
                    theUniqueWrapper.animate({right: 0, left: 0}, 400);
                    cFix.animate({right: 0, left: 0}, 400);
                    nl = 0;
                });
                
            });
            return this;
        }
                            
//OPEN LEFT SIDEBAR        
        $.fn.openLeftSidebarWidget = function() {
            this.each(function(){
                var m = $(this);
                var nl = 0;
                var lFix = $("*").filter(function() {return $(this).css('position') == 'fixed';}).not(leftSidebar).not(rightSidebar);
                var blinks = leftSidebar.find('a');

                $(window).resize(function(){
                    nwidth = leftSidebar.width();
                    
                    var bss = theUniqueWrapper.css('left');
                    var bbb = parseInt(bss);
                    
                    if (bbb == 0) {
                        H.animate({left: 0, right: 0}, 100);
                        theUniqueWrapper.animate({left: 0}, 100);
                        lFix.animate({left: 0, right: 0}, 100);
                    } else if (bbb !== nwidth)  {
                        H.animate({left: nwidth, right: -nwidth}, 200);
                        theUniqueWrapper.animate({left: nwidth, right: -nwidth}, 200);
                        lFix.animate({left: nwidth, right: -nwidth}, 200);
                    }
                });
                
                m.click(function(){
                    var nwidth = leftSidebar.width();
                    nl++;
                    
                    var mrf = function(ll) {
                        return (ll % 2 === 0) ? true : false;
                    };
                    if (mrf(nl) === false) {
                        rightSidebar.hide();
                        leftSidebar.show();
                        H.animate({left: nwidth, right: -nwidth}, 400);
                        theUniqueWrapper.animate({left: nwidth, right: -nwidth}, 400);
                        lFix.animate({left: nwidth, right: -nwidth}, 400);
                    } else if (mrf(nl) === true) {
                        rightSidebar.show(500);
                        H.animate({left: 0, right: 0}, 400);
                        theUniqueWrapper.animate({left: 0, right: 0}, 400);
                        lFix.animate({left: 0, right: 0}, 400);
                        nl=0;
                    }
                });
                
                blinks.click(function(){
                    theUniqueWrapper.animate({left: 0, right: 0}, 400);
                    H.animate({left: 0, right: 0}, 400);
                    lFix.animate({left: 0, right: 0}, 400);
                    nl=0;
                });
                
            });
            return this;
        }                
    });
}(jQuery));