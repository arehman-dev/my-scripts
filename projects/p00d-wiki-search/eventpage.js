var menuItems = {
    id: "wiki-search",
    title: "wiki-search",
    contexts: ["selection"]
};

chrome.contextMenus.create(menuItems);

function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (clickData.menuItemId == "wiki-search" && clickData.selectionText) {
        var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
        var createData = {
            url: wikiUrl,
            type: "popup",
            top: 5,
            left: 5,
            width: screen.availWidth / 2,
            height: screen.availHeight / 2
        };
        chrome.windows.create(createData, function(){});
    }
});

// code with parenthesis issues,
// var menuItems= {
//     "id": "wiki-search",
//     "title": "wiki-search",
//     "context": ["selection"]
// };
// Chrome.contextMenus.create(menuItems);
// function fixedEncodeURI(str) {
//     return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
// };
// Chrome.contextMenus.onClicked.addEventListener(function(clickData{
//         if(clickData.menuItemsId == "wiki-search" && clickData.selectionText){
//             var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
//             var createData = {
//                 "url": wikiUrl,
//                 "type": "popup",
//                 "top" : 5,
//                 "left" : 5,
//                 "width" : screen.availWidth/2,
//                 "height" : screen.availHeight/2,
//             };
//         Chrome.windows.create(createData, function(){});
//             )
// });