(function($){
        barLeftMaxWidth = 350;
        gapL = 64;
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
                leftSidebar.css(settings.leftSidebarCss).prependTo(B);
                
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

//OPEN LEFT SIDEBAR        
        $.fn.openLeftSidebarWidget = function() {
            this.each(function(){
                var m = $(this);
                var nl = 0;
                var lFix = $("*").filter(function() {return $(this).css('position') == 'fixed';}).not(leftSidebar);
                
                var blinks = leftSidebar.find('a');

                $(window).resize(function(){
                    nwidth = leftSidebar.width();
                    
                    var bss = theUniqueWrapper.css('left');
                    var bbb = parseInt(bss);
                    
                    if (bbb == 0) {
                        H.animate({left: 0, right: 0}, 400);
                        theUniqueWrapper.animate({left: 0, right: 0}, 400);
                        lFix.animate({left: 0, right: 0}, 400);
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
                        H.animate({left: nwidth, right: -nwidth}, 400);
                        theUniqueWrapper.animate({left: nwidth, right: -nwidth}, 400);
                        lFix.animate({left: nwidth, right: -nwidth}, 400);
                    } else if (mrf(nl) === true) {
                        H.animate({left: 0, right: 0}, 400);
                        theUniqueWrapper.animate({left: 0, right: 0}, 400);
                        lFix.animate({left: 0, right: 0}, 400);
                        nl = 0;
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
