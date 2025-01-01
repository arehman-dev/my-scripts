// // Handle the click event on the extension icon
// browser.browserAction.onClicked.addListener((tab) => {
//     console.log("Extension icon clicked");
//     // Send a message to the active tab
//     browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
//       if (tabs.length > 0) {
//         browser.tabs.sendMessage(tabs[0].id, { message: "Alert! Alert! Alert!" });
//       }
//     });
//   });

// // chrome.action.onClicked.addListener(() => {
// //   chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
// //       if (tabs.length > 0) {
// //           const activeTab = tabs[0];
// //           // Send a message to the active tab
// //           chrome.tabs.sendMessage(activeTab.id, { message: "Alert! Alert! Alert!" });
// //           console.log("Extension clicked!");
// //       }
// //   });
// // });

// // // // chrome.action.onClicked.addListener((tab) => {
// // // //   //all tabs query
// // // //   chrome.tabs.query({}, (tabs) => {
// // // //     tabs.forEach((t) => {
// // // //       //loging
// // // //       chrome.scripting.executeScript({
// // // //         target: { tabId: t.id },
// // // //         func: logmessager

// // // //       });
// // // //     });
      
// // // //     });
// // // //   });

// // // // function logmessager() {
// // // //   console.log("Extension clicked!")
// // // // }

// // // chrome.action.onClicked.addListener((tab) => {

// // //   if (tab.id) {
// // //     // Send a message to active tab
// // //     chrome.tabs.sendMessage(tab.id, { message: "Alert! Alert! Alert!" });
// // //     console.log("Extension clicked!");  
// // //   }
// // // });