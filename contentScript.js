/*
画面ロード時にpopupを初期化する場合 => 最後にロードした画面のseoタグが見れる
$(function(){
	console.log("get_content")
	seo_object = {};
	seo_object = {
		h1 : $("h1").text(),
		title : $("title").text(),
		description : $("meta[name=description]").attr("content"),
		keywords : $("meta[name=keywords]").attr("content"),
		url : document.URL,
		canonical : $("link[rel=canonical]").attr("href"),
		og_type : $('meta[property="og:type"]').attr("content"),
		og_site_name : $('meta[property="og:site_name"]').attr("content"),
		og_title : $('meta[property="og:title"]').attr("content"),
		og_image : $('meta[property="og:image"]').attr("content"),
		og_description : $('meta[property="og:description"]').attr("content")
	};
	seo_object.action = "get_seo_object";
	chrome.runtime.sendMessage(seo_object)	
})
*/
var SeoPreview = {};
SeoPreview ={
	find: function(){
		console.log("find_model")
		seo_object = {};
		seo_object = {
			h1 : $("h1").text(),
			title : $("title").text(),
			description : $("meta[name=description]").attr("content"),
			keywords : $("meta[name=keywords]").attr("content"),
			url : document.URL,
			canonical : $("link[rel=canonical]").attr("href"),
			og_type : $('meta[property="og:type"]').attr("content"),
			og_site_name : $('meta[property="og:site_name"]').attr("content"),
			og_title : $('meta[property="og:title"]').attr("content"),
			og_image : $('meta[property="og:image"]').attr("content"),
			og_description : $('meta[property="og:description"]').attr("content")
		};
		return seo_object;	
	}
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendMessage){
		console.log("get_request")
		model = eval(request.model);
		method = request.method;
		data = model[method]();
		sendMessage(data);
	}
)
