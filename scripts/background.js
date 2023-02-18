/* eslint-disable no-undef */
let state = false;

browser.browserAction.onClicked.addListener(toggleState);

function toggleState() {
    state = !state;
    browser.storage.local.set({storedState: state});
}

async function loadState(sidebarState) {
    let savedState = await browser.storage.local.get("storedState");
    if(savedState != undefined){
        state = savedState;
    };
}

loadState();