var soCount = 0;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    /*console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");*/
    console.log(request.visitCount);
    soCount = request.visitCount;
    sendResponse({thankyou: "from UI"});
    
    
});

function getSOCount(){
	console.log(soCount)
	return soCount;
}