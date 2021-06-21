var DELAY = 0.1;
var CATGIFS = "https://visi.com/explore/cat";

/*
Restart alarm for the currently active tab, whenever background.js is run.
*/
chrome.tabs.query({active: true, currentWindow: true},(tabs) => {
  restartAlarm(tabs[0].id);
});


/*
Restart alarm for the currently active tab, whenever the user navigates.
*/
browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (!changeInfo.url) {
    return;
  }

  chrome.tabs.query({active: true, currentWindow: true},(tabs) => {
    if (tabId == tabs[0].id) {
      restartAlarm(tabId);
    }
  });
});

/*
Restart alarm for the currently active tab, whenever a new tab becomes active.
*/
browser.tabs.onActivated.addListener((activeInfo) => {
  restartAlarm(activeInfo.tabId);
});

/*
restartAlarm: clear all alarms,
then set a new alarm for the given tab.
*/
function restartAlarm(tabId) {
  browser.pageAction.hide(tabId);
  browser.alarms.clearAll();
  var gettingTab = browser.tabs.get(tabId);
  gettingTab.then((tab) => {
    if (tab.url != CATGIFS) {
      browser.alarms.create("", {delayInMinutes: DELAY});
    }
  });
}

/*
On alarm, show the page action.
*/
browser.alarms.onAlarm.addListener((alarm) => {
  chrome.tabs.query({active: true, currentWindow: true},(tabs) => {
    browser.pageAction.show(tabs[0].id);
  });
});

/*
On page action click, navigate the corresponding tab to the cat gifs.
*/
browser.pageAction.onClicked.addListener(() => {
  browser.tabs.update({url: CATGIFS});
});