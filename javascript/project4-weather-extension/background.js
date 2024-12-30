chrome.action.onClicked.addListener(() => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
          const activeTab = tabs[0];
          // Send a message to the active tab
          chrome.tabs.sendMessage(activeTab.id, { message: "Alert! Alert! Alert!" });
          console.log("Extension clicked!");
      }
  });
});

// // chrome.action.onClicked.addListener((tab) => {
// //   //all tabs query
// //   chrome.tabs.query({}, (tabs) => {
// //     tabs.forEach((t) => {
// //       //loging
// //       chrome.scripting.executeScript({
// //         target: { tabId: t.id },
// //         func: logmessager

// //       });
// //     });
      
// //     });
// //   });

// // function logmessager() {
// //   console.log("Extension clicked!")
// // }

// chrome.action.onClicked.addListener((tab) => {

//   if (tab.id) {
//     // Send a message to active tab
//     chrome.tabs.sendMessage(tab.id, { message: "Alert! Alert! Alert!" });
//     console.log("Extension clicked!");  
//   }
// });