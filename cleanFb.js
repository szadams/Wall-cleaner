chrome.runtime.onInstalled.addListener(function() {
     chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
         chrome.declarativeContent.onPageChanged.addRules([
             {
                 conditions: [
                     new chrome.declarativeContent.PageStateMatcher({
                         pageUrl: { urlContains: 'facebook' },
                     })
                 ],
                 actions: [ new chrome.declarativeContent.ShowPageAction() ]
             }
         ]);
     });
});

chrome.pageAction.onClicked.addListener(cleanLiked);

function cleanLiked() {
    var spans = document.getElementsByTagName("span");
    var spansWithLiked = [];
    var liked;

    for(var i = 0; i < spans.length; i++) {
        if(spans[i].innerHTML.indexOf(" liked this.") != -1) {
            itemToDelete = spans[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            parentItem = itemToDelete.parentNode.removeChild(itemToDelete);
        }
    }
}