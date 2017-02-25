var count = 0;
count++;
var url = "";
var user = "http://stackoverflow.com/";

/*//permission to play with tabs
"permissions": [ "tabs" ]

//get url and store that jawn in yo variable
chrome.tabs.getSelected(null,function(tab) {
	var url = tab.url; 
});*/
chrome.storage.sync.get(["visitCount"], function(items){
			console.log("retrieved count = ", items.visitCount);
			count = items.visitCount +1;
			console.log("new count = " + count);
			updateCount(count);
});

function updateCount(currCount){
	chrome.storage.sync.set({visitCount : count}, function(){
		console.log("set item is " + count);
	});
}
var soRegex = new RegExp("[http|https]://stackoverflow.com/*");
if(soRegex.test(url)){
	console.log("danny is a BITCH ");
}
else{
	console.log("not a bitch ");
}
console.log(window.location.href);
url = window.location.href;
/*chrome.tabs.getCurrent(function(tab){
	console.log(tab);
});

var fourmTabs = new Array();
chrome.tabs.query({}, function (tabs) {
    for (var i = 0; i < tabs.length; i++) {
        fourmTabs[i] = tabs[i];
    }
    // Moved code inside the callback handler
    for (var i = 0; i < fourmTabs.length; i++) {
        if (fourmTabs[i] != null)
           window.console.log(fourmTabs[i].url);
        else {
            window.console.log("??" + i);
        }
    }
});*/

    
/*    // Save it using the Chrome extension storage API.
chrome.storage.sync.set({'soCount': data}, function() {
  // Notify that we saved.
  message('Settings saved');
});*/
