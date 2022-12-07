function decodeBase64(event, twice) {
    if (event.selectionText) {
        try {
            let decodedText = atob(event.selectionText);
            if (twice) {
                decodedText = atob(decodedText);
            }
            return decodedText;
        } catch (err) {
            console.log('Base64 Decoder: check the b64 text. It may not be a valid base 64 input.');
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

function fixOldLinkProtectorURL(url) {
    if (url.indexOf('https://links.snahp.it/') >= 0) {
        url = url.replace('links.snahp.it', 'lnk.snahp.eu');
    }
    return url;
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
        const formattedURL = fixOldLinkProtectorURL(decodedUrl);
        openUrlToTheRight(formattedURL, tab);
    }
});
