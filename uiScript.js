var soCount = 0;
var amazingCleanUpSound = new Audio("./audio/oxp.wav");
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

function clearCounter(){
	chrome.runtime.sendMessage({"clear": true}, function(response){
		console.log(response);
		if (response.byeee){
			return 0;
		}
		else{
			return 1; //this shouldnt happen 
		}
	})
}
chrome.tabs.onCreated.addListener(function(tab){
	console.log("tab created");
	var maxTabs = 20;
	chrome.tabs.query({}, function(tabs){
		if (tabs.length > maxTabs) { // should be bigger ,but oh well 
			var delRand = Math.floor(Math.random()*maxTabs);
			chrome.tabs.remove(tabs[delRand].id, function(){
				amazingCleanUpSound.play();
				alert("Cleaned up a tab! You're Welcome!")
			})
		}
	});
});