chrome.action.onClicked.addListener(async () => {
  const tab = await chrome.tabs.create({ url: '<https://apnews.com/>' });

  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: ['contentScript.js'],
    },
    () => {
      // Script executed
    }
  );
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'newsSummaries') {
    // Process the news summaries received from the content script
    // You can send the summaries to the popup using chrome.extension.getViews and postMessage
    console.log(message.summaries);
  }
});
