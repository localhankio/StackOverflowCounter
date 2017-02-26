var count = 1;

var user = "http://stackoverflow.com/";

console.log(window.location.href);
var url = window.location.href;
var domain = extractDomain(url);
console.log(domain);
var count = 1;
//updateCount(0);
if (domain == "stackoverflow.com"){
	console.log("is at stackoverflow")
	chrome.storage.sync.get(["visitCount"], function(items){
		console.log("retrieved count = " + items.visitCount);
		//var inc = items.visitCount+1;
		count = items.visitCount+1;

		updateCount(count);
	});
	
}

//clear counter 
chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse){
		if (request.clear){
			chrome.storage.sync.get("visitCount", function(item){
				chrome.storage.sync.set({"visitCount": 0}, function(){
					console.log("reset counter");
				});
				console.log("reset counter");
			});
		}
		sendResponse({"byeee": true});

})

function updateCount(currCount){
	chrome.storage.sync.set({"visitCount" : currCount}, function(){
		console.log("set item is " + currCount);
		chrome.runtime.sendMessage({"visitCount": currCount}, function(response){
			console.log(response);
		});
	});
}	

function extractDomain(url) {
	var domain;
	if (url.indexOf("://") > -1){
		domain = url.split("/")[2];
	}
	else {
		domain = url.split("/")[0];
	}
	domain = domain.split(":")[0];
	return domain; 
}

function gotPopup(popupURL) {
  console.log(popupURL)
}


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




/*var count = 0;
count++;
var url = "";

var db = new PouchDB("cats");
url = window.location.href;

var domainName = extractDomain(url);
console.log("Current domain is " + domainName);
console.log(typeof domainName);
//domainObj = getCount(domainName);
//updateCount(domainName, 0);
chrome.storage.sync.get(domainName, function(obj){
	console.log("from somewhere: ")
	console.log(obj);
	var domainCount = obj.domString.numVisits + 1;
	updateCount(obj.domString.domainName, domainCount);
});

console.log("***using getCount ***");
getCount(domainName);


function getCount(someDomain){
	console.log("\t" + someDomain);
	chrome.storage.sync.get(someDomain, function(items){
		if (!chrome.runtime.error){
			console.log(someDomain);
			console.log(someDomain, items);
		}
		else 
			console.log("there was error ");
	})
}

function updateCount(someDomain, currCount){
	var domString = someDomain;
	var updatedDomInfo = new DomainObj(someDomain, currCount);
	chrome.storage.sync.set({
		domString: updatedDomInfo
	}, function(){
		console.log("dom string ");
		console.log(domString);
		console.log(updatedDomInfo);
	});
}

function extractDomain(url) {
	var domain;
	if (url.indexOf("://") > -1){
		domain = url.split("/")[2];
	}
	else {
		domain = url.split("/")[0];
	}
	domain = domain.split(":")[0];
	return domain; 
}

function DomainObj(domainName, numVisits) {
	this.domainName = domainName;
	this.numVisits = numVisits; 
}



chrome.storage.sync.clear(function(){
	console.log("everything cleared");
});





/*chrome.tabs.getCurrent(function(tab){
	console.log(tab);;
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
});
*/