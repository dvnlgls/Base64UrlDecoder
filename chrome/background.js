function decodeBase64(event, twice) {
    if (event.selectionText) {
        try {
            let decodedText = atob(event.selectionText);
            if (twice) {
                decodedText = atob(decodedText);
            }
            return decodedText;
        } catch (err) {
            console.log('Something went wrong with Base64 decoding');
        }
    }
}

function openUrlToTheRight(url, currentTab) {
    const tabIndex = currentTab.index + 1;
    const createTab = chrome.tabs.create({
        url,
        active: false,
        index: tabIndex
    });
    createTab.then();
}

chrome.contextMenus.create({
    id: "one",
    title: "Decode Once",
    contexts: ["selection"]
});

chrome.contextMenus.create({
    id: "two",
    title: "Decode Twice",
    contexts: ["selection"]
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    const decodeTwice = info.menuItemId === "two";
    const decodedUrl = decodeBase64(info, decodeTwice);
    if (decodedUrl) {
        openUrlToTheRight(decodedUrl, tab);
    }
});
