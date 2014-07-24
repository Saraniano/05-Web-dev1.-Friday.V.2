Simple-SideBar
==============

a simple, responsive and cross-browser, jquery sidebar

For a live demo you can click on one of these links below:

[Simple Sidebar Homepage](http://dcdev.altervista.org/sidebar/)<br><br>
[Right Sidebar Demo](http://dcdev.altervista.org/sidebar/right)<br><br>
[Left Sidebar Demo](http://dcdev.altervista.org/sidebar/left)<br><br>
[Both Sidebars Demo](http://dcdev.altervista.org/sidebar/twobars)

===========================================

Tested on:
-Chrome and Chrome Mobile;
-Opera and Opera Mobile;
-Firefox and Firefox Mobile;
-IE;

========================================

##Set Up Guide</h2>

###STEP 1: include

Include the *.JS file in your page.
Be sure to put it above your main *JS file.

    <title>Simple Sidebar: Left</title>
    <link rel="stylesheet" type="text/css" href="your-style-sheet.css">
    <script src="jquery.min.js"></script>
    <script src="THE-WIDGET-FILE.js"></script>
    <script src="your-main-javascrip-file.js"></script>
    </head>

##STEP 2: right-sidebar &amp; left-sidebar html tags

Set up the HTML tags. You can choose your favorite ID without any restrictions. The class is not supported on this widget. You can certainly add all the classes you want to stylize your sidebars. The important thing is that you choose two IDs, one for the right sidebar, the other for the left one. It does not matter where they are in the HTML code, and it is not necessary to set the position attributes in the style sheet, I will take care of it.

    <div id="ID-FOR-THE-RIGHT-SIDEBAR" class="bars foo boo">
        <content of your right sidebar>
    </div>
    <div id="ID-FOR-THE-LEFT-SIDEBAR" class="bars foo boo">
        <content of your left sidebar>
    </div>

##STEP 3: navigation bar CSS and HTML

Create a navigation bar with at least these CSS attributes:

    #YOUR-OWN-NAVBAR {
        position: fixed;
        top:0;
        right:0;
        left:0;
    }


In this navigation bar TWO <b>icons</b> or whatever you like are required to open the sidebars. In this example, I chose two pictures, but you can use two &gt;div&lt; or anything else. The important thing is that you add a unique ID to each element. In this case you have to care about the position of the two elements. Hopefully the element that will open the right sidebar will be positioned to the right, and the other one to the left.

    <div id="YOUR-OWN-NAVBAR">
        <nav>
            <img id="TAG-TO-SHOW-THE-RIGHT-SIDEBAR" src="">
            <img id="TAG-TO-SHOW-THE-LEFT-SIDEBAR" src="">
        </nav>
    </div> 

##STEP 4: run the function

Run the function in the page or either on a different file you import. However it must be run after the included file  (as in step 1).

    $(document).ready(function(){
        $('#ID-FOR-THE-RIGHT-SIDEBAR').rightSidebarWidget();
        $('#ID-FOR-THE-LEFT-SIDEBAR').leftSidebarWidget();
        $('#TAG-TO-SHOW-THE-RIGHT-SIDEBAR').openRightSidebarWidget();
        $('#TAG-TO-SHOW-THE-LEFT-SIDEBAR').openLeftSidebarWidget();
    });

##STEP 5: customize

You can choose the max-width of the sidebars and the gab between the end of them and the opposite side of the screen in pixel.

    (function($){
        barRightMaxWidth = 350;
        gapR = 68;
        barLeftMaxWidth = 350;
        gapL = 68;
    
If you installed the minified version of this plug-in don't panic! The four variables are in the first few colums of the code.

    !function(a){barRightMaxWidth=350,gapR=68,barLeftMaxWidth=350,gapL=68,

##CSS ISSUE

Remember to set a background to your div or they will be auto-set by the browsers at <i>transparent</i>. This will show the sidebar as you scroll the page. If you don't want to set a background, just set it as <i>inherit</i> so it will inherit the background from its parent container.

    #div {<br />
        background: inherit;
    }
