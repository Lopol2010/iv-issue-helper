chrome.browserAction.onClicked.addListener(function (tab) {

    // let url = parseUrl(tab.url)
    chrome.tabs.query({url: `https://instantview.telegram.org/contest/*`}, function (tabs) {
        tabs.forEach(ivtab => {
            chrome.tabs.sendMessage(ivtab.id, {url: tab.url})
        })
    })
})

// function parseUrl(url) {
//     var parser = document.createElement('a')
//     parser.href = url
//     return parser
// }