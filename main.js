chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
        //console.log('Page uses History API and we heard a pushSate/replaceState.');
        chrome.tabs.executeScript(null,{file:"DOM_changer.js"});
  });