omnibox tutorial: <https://www.lullabot.com/articles/creating-a-simple-chrome-extension>

urlrewrite: <https://github.com/sjmulder/urlrewrite-chrome>
another: <http://stackoverflow.com/questions/12065029/chrome-redirect-extension>

final answer:
---
thanks to <https://superuser.com/questions/284110/redirect-urls-in-chrome> 
plus this <http://jokru.tumblr.com/post/45116018901/chrome-extension-for-redirecting-urlsdomains-7933>
plus this <http://stackoverflow.com/questions/406230/regular-expression-to-match-a-line-that-doesnt-contain-a-word>
(using https://regex101.com/ to generate: `google.com\/search\?(?!.*\&tb.?s\=)`)


https://www.google.com/search?q=potato&oq=potato&aqs=chrome..69i57j69i60l2j0l3.591j0j1&sourceid=chrome&ie=UTF-8
https://www.google.com/search?q=potato&source=lnt&tbs=qdr:y&sa=X&ved=0ahUKEwiv6Jmwue7SAhVB94MKHbhCB9IQpwUIFA&biw=1423&bih=759
https://www.google.com/search?q=potato&tbas=0&source=lnt&sa=X&ved=0ahUKEwj-m6SRu-7SAhXq7IMKHX8XCt0QpwUIEw&biw=1423&bih=803