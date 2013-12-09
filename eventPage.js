/*
画面ロード時にpopupを初期化する場合 => 最後にロードした画面のseoタグが見れる

chrome.runtime.onMessage.addListener(
	function(request, sender, sendMessage){

		if (request){
	  		localStorage.setItem("seoPreview", JSON.stringify(request));
		}
		sendMessage({})
		chrome.browserAction.setPopup({popup: "popup.html"})
	}
);
*/

// dom取得用メソッド
var SeoPreview = {};
SeoPreview = {
	find: function(){
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {model: "SeoPreview", method: "find"}, function(response){
				// set_data on LocalStorage
				SeoPreview.set_data(response, "SeoPreview");
				// show.htmlをpopupに登録
				chrome.browserAction.setPopup({popup: "show.html"})
			})
		})
	},
	set_data: function(data, key){
		// response"SeoPreview"をキーとして、localStorageに格納
		if (data){
	  		localStorage.setItem(key, JSON.stringify(data));
		}
	}
}
var SeoPreviewController = {};
SeoPreviewController = {
	set_popup: function(){
		// DOMからSEOタグ情報を引っ張る(SeoPreviewモデルの情報をとるイメージ)
		SeoPreview.find();
	}
}
// タブが変われば、データを取得する
chrome.tabs.onActivated.addListener(SeoPreviewController.set_popup);
// タブが変化すれば、データを取得する
chrome.tabs.onUpdated.addListener(SeoPreviewController.set_popup);
