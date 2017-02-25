var count = 0;
var url = "";
var user = "stackoverflow.com";

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

chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log("farewell is " + response.farewell);
});
