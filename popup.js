var soCount = 0;
var temp = "";
/*chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
    	temp = request;
   		sendResponse({thankyou: request.visitCount});
   		console.log(request.visitCount);
   		//alert(request);
   		document.onload = function(){
   			console.log("loaded");
   			document.getElementById("count").textContent = "kkdlfjsld;f " + request.visitCount;
   		}
   		displayCount(request.visitCount);
   		return true;

});*/

/*document.addEventListener('DOMContentLoaded', function () {
	//console.log(temp);
	displayCount(temp.visitCount);
});*/
function clearCounter(){
	var back = chrome.extension.getBackgroundPage();
	soCount = back.clearCounter();
	displayCount(soCount);
}

function displayCount(count){
	console.log(count);
	document.getElementById('count').innerHTML = "You visited SO " + count;
}

var someCount = chrome.extension.getBackgroundPage();
soCount=someCount.getSOCount();
displayCount(soCount);
