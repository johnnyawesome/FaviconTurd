// ==UserScript==
// @name         Favicon Turd
// @namespace    https://github.com/johnnyawesome
// @version      1.0.3
// @description  Changes all Favicons to turds, because we can!
// @author       JohnnyAwesome
// @match        *://*/*
// @grant        none
// @icon         https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull32.ico
// @icon64		 https://raw.githubusercontent.com/johnnyawesome/MyLogo/master/MySkull64.ico
// @updateURL    https://github.com/johnnyawesome/FaviconTurd/raw/master/Favicon%20Turd.user.js
// @downloadURL  https://github.com/johnnyawesome/FaviconTurd/raw/master/Favicon%20Turd.user.js
// ==/UserScript==

(function() {
    'use strict';

    //#########################################################################################

    //Gets the header
    var header = document.getElementsByTagName("head")[0];

    //Creates our new Link Node
    var lnk = document.createElement('LINK');

    //Create attribute for the Link Node....
    var att1 = document.createAttribute("rel");
    ///...and set the valie of the new attribute
    att1.value = "icon";
    //...and so on...
    var att2 = document.createAttribute("type");
    att2.value = "image/x-icon";
    var att3 = document.createAttribute("href");
    att3.value = "https://upload.wikimedia.org/wikipedia/commons/c/c8/Poop_Emoji.png";

    //Sets all the attributes of the link
    lnk.setAttributeNode(att1);
    lnk.setAttributeNode(att2);
    lnk.setAttributeNode(att3);

    //Now that the link-tag is created, and all its attributes are attached,
    //we append it to the header
    header.appendChild(lnk);

    console.log("Shit Happened!");

    //#########################################################################################

})();
