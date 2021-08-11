chrome.runtime.onInstalled.addListener(() => {
    //init for the first time the extension is installed
    chrome.storage.local.set({
        name: "Shivesh"
    });
});

chrome.storage.local.get('name', data => {

});

const myURLs = ['https://twitter.com/home'];

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./core.css"]
        }).then(() => {
            console.log("FOREGROUND STYLES IS INJECTED");
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ["./foreground.js"]
            }).then(() => {
                console.log("FOREGROUND SCRIPT IS INJECTED");
            })
        }).catch(err => console.log(err));
    }
});