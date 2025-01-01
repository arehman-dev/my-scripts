document.addEventListener('DOMContentLoaded', () => {
    const logMessageButton = document.getElementById('logMessage');
    if (logMessageButton) {
        logMessageButton.addEventListener('click', () => {
            console.log("Button clicked");
            chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                if (tabs.length > 0) {
                    chrome.tabs.sendMessage(tabs[0].id, { message: "Log this message" });
                }
            });
        });
    }
});