var osmde = /google.com(\S{3})?\/search\?(?!.*\&tb.?s\=)/g;
var newurl
if (window.location.href.match(osmde)) 
    {
      newurl = window.location.href + "&tbs=qdr:y";
    }

chrome.extension.sendRequest({redirect: newurl});