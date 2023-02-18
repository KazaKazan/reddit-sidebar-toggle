/* eslint-disable no-undef */
browser.browserAction.onClicked.addListener(toggleState);
let state = false;

function toggleState() {
    state = !state;
    browser.storage.local.set({"savedState": state});
}

async function loadState() {
    let storedState = await browser.storage.local.get("savedState");
    if(storedState != undefined){
        state = storedState["savedState"];
    };
}

loadState();