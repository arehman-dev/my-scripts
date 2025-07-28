// Create context menu item for Wikipedia search
chrome.contextMenus.create({
    id: "wiki-search",
    title: "wiki-search",
    contexts: ["selection"]
});

// Create context menu item for text-to-speech
chrome.contextMenus.create({
    id: "speak-it",
    title: "Speak it.",
    contexts: ["selection"]
});

// Helper function to encode text for Wikipedia URL
function fixedEncodeURI(str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

// Single click handler for both context menu items
chrome.contextMenus.onClicked.addListener(function(clickData) {
    if (!clickData.selectionText) return;

    switch (clickData.menuItemId) {
        case "wiki-search":
            var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
            chrome.windows.create({
                url: wikiUrl,
                type: "popup",
                top: 5,
                left: 5,
                width: screen.availWidth / 2,
                height: screen.availHeight / 2
            });
            break;

        case "speak-it":
            chrome.tts.speak(clickData.selectionText, { rate: 1 });
            break;
    }
});


// ---------------------------------------------------------------------------------------------
// chrome.contextMenus.create({
//     id: "wiki-search",
//     title: "wiki-search",
//     contexts: ["selection"]
// });

// chrome.contextMenus.create({
//     id: "speak-it",
//     title: "Speak it.",
//     contexts: ["selection"]
// });

// chrome.contextMenus.create(menuItems);

// function fixedEncodeURI(str) {
//     return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
// }
// chrome.contextMenus.onClicked.addListener(function(clickData) {
//     if (clickData.menuItemId == "wiki-search" && clickData.selectionText) {
//         var wikiUrl = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(clickData.selectionText);
//         var createData = {
//             url: wikiUrl,
//             type: "popup",
//             top: 5,
//             left: 5,
//             width: screen.availWidth / 2,
//             height: screen.availHeight / 2
//         };
//         chrome.windows.create(createData, function(){});
//     }
// });

// chrome.contextMenus.create(menuItems);

// chrome.contextMenus.onClicked.addListener(function(clickData) {
//     if (clickData.menuItemId == "speak-it" && clickData.selectionText) {
//         chrome.tts.speak(clickData.selectionText, {'rate': 1});
//     }
// });

//---------------------------------------------------------------------------------------
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