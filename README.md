#WHAT#
This is the Google 1yr Chrome Extension. 
It resets the default timeframe of Google to 1yr. 

#HOW#
If you want to change the search time windows, it will respect that, but the default will now be 1yr. Extremely lightweight and open source.

#WHY#
some users (like myself) do more searches and care about current content rather than searching "all time" of google. 

For example, developers often prefer having recent answers to their questions as it is more likely to be relevant. 

We waste a lot of time clicking the little dropdown in google because the default is meant for the general population of google.

This extension fixes that.

#WHO#
This is swyx's first chrome extension. source code is hosted at: <https://github.com/sw-yx/google1yr-extension>

#WHEN#
released march 24 2017.

#MORE#
check out urlrewrite: <https://github.com/sjmulder/urlrewrite-chrome>

how to build this: 
---
- thanks to <https://superuser.com/questions/284110/redirect-urls-in-chrome> 
- plus this <http://jokru.tumblr.com/post/45116018901/chrome-extension-for-redirecting-urlsdomains-7933>
- plus this <http://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word>
- (using https://regex101.com/ to generate: `google.com\/search\?(?!.*\&tb.?s\=)`)