// Listen for messages
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.message === "Alert! Alert! Alert!") {
    console.log("Message received from extension: ", request.message);
    sendResponse({ status: "Message logged!" });
  }
});


// // For active tab consoles
// // // Listen messages
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === "Alert! Alert! Alert!") {
//       console.log("Message received from extension: ", request.message);
//       sendResponse({ status: "Message logged!" });
//     }
//   });
