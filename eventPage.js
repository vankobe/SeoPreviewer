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
		console.log("find")
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
			chrome.tabs.sendMessage(tabs[0].id, {model: "SeoPreview", method: "find"}, function(response){
				SeoPreview.set_data(response, "SeoPreview");
				SeoPreviewController.show();
			})
		})
	},
	set_data: function(data, key){
		console.log("set_data")
		console.log(data)
		// response"SeoPreview"をキーとして、localStorageに格納
		if (data){
	  		localStorage.setItem(key, JSON.stringify(data));
		}
	}
}
var SeoPreviewController = {};
SeoPreviewController = {

	prepare: function(){
		console.log("prepare")
		// DOMからSEOタグ情報を引っ張る(SeoPreviewモデルの情報をとるイメージ)
		SeoPreview.find();


	},
	show: function(){
		console.log("show")
		// show.htmlをpopupに登録(render show.htmlするイメージ)
		chrome.browserAction.setPopup({popup: "show.html"})
	}

}
// タブが変われば、データを取得する
chrome.tabs.onActivated.addListener(SeoPreviewController.prepare);
// ボタンがクリックされたら、表示する
chrome.browserAction.onClicked.addListener(SeoPreviewController.show);