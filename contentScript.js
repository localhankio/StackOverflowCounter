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

url = "http://stackoverflow.com/questions/42459444/difference-between-i-i-and-i-i-1"
//this should compare to see if the users input is contained in the current url
if(url.indexOf(user) > -1){
//if what the user is looking for is found in the url increment the count
	count++;
	console.log(count);
}
<<<<<<< HEAD

chrome.runtime.sendMessage({visitCount: count}, function(response) {
  console.log("farewell is " + response.farewell);
});

try{
	chrome.storage.sync.get(["visitCount"], function(items){
		console.log("retrieved", items)
	});
	
	
} catch (err){
	chrome.storage.sync.set({visitCount:count}, function () {
		console.log("saved, " + count);
	});
}

chrome.storage.sync.get(["visitCount"], function(items){
		console.log("retrieved", items)
	});

    
/*    // Save it using the Chrome extension storage API.
chrome.storage.sync.set({'soCount': data}, function() {
  // Notify that we saved.
  message('Settings saved');
});*/
=======
>>>>>>> 0aac5da8c30db6003aca1dbb0b353ad3b5ec54c4
