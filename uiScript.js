var soCount = 0;
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.visitCount == "hello"){
      sendResponse({farewell: "og mud bon"});
      
    }
    else{
    	soCount = request.visitCount;
    	sendResponse({farewell: "kace cake "})  
	    // Save it using the Chrome extension storage API.
	    chrome.storage.sync.set({'soCount': data}, function() {
	      // Notify that we saved.
	      message('Settings saved');
	    });

    }
    
  } );


console.log("something " + soCount);
//document.getElementById('count').innerHTML = "visted amount: " + soCount;
chrome.storage.sync.get(["soCount"], function (itmes) {
	console.log("retrieved", items)
})
