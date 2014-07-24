(function($){
        barRightMaxWidth = 350;
        gapR = 64;
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
            margin: 0,
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
                rightSidebar.css(settings.rightSidebarCss).prependTo(B);
                
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
        
//OPEN RIGHT SIDEBAR        
        $.fn.openRightSidebarWidget = function() {
            this.each(function(){
                var m = $(this);
                var nl = 0;
                var cFix = $("*").filter(function() {return $(this).css('position') == 'fixed';}).not(rightSidebar);
                var links = rightSidebar.find('a');
                
                $(window).resize(function(){
                    mwidth = rightSidebar.width();
                    
                    var Css = theUniqueWrapper.css('right');
                    var aaa = parseInt(Css);
                    
                    if (aaa == 0) {
                        H.animate({right: 0, left: 0});
                        theUniqueWrapper.animate({right: 0, left: 0});
                        cFix.animate({right: 0, left: 0});
                    } else if (aaa !== mwidth)  {
                        H.animate({right: mwidth, left: -mwidth}, 200);
                        theUniqueWrapper.animate({right: mwidth, left: -mwidth}, 200);
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
                        H.animate({right: mwidth, left: -mwidth}, 400);
                        theUniqueWrapper.animate({right: mwidth, left: -mwidth}, 400);
                        cFix.animate({right: mwidth, left: -mwidth}, 400);
                    } else if (mrf(nl) === true) {
                        H.animate({right: 0, left: 0}, 400);
                        theUniqueWrapper.animate({right: 0, left: 0}, 400);
                        cFix.animate({right: 0, left: 0}, 400);
                        nl = 0;
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
    });
}(jQuery));