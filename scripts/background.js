/* eslint-disable no-undef */

browser.storage.onChanged.addListener(loadState);

let state = true;

chrome.browserAction.onClicked.addListener(function() {
    chrome.tabs.executeScript({
        file: "scripts/reddit.js"
    });
});

async function loadState(sidebarState) {
    let savedState = await browser.storage.local.get("storedState);
    if(savedState != undefined){
        state = savedState;
    };
}
