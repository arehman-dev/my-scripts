// Log a simple message when the content script is injected 
// using manifest.
console.log("Weather Extension content script is running.");

// Listen for messages from the popup script 
// using popup button
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "Log this message") {
        console.log("message from popup button");
        sendResponse({ status: "Done! finally" });
    }
});
