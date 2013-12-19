var SeoPreview = {};
SeoPreview ={
	find: function(){
		seo_object = {};
		h2s = [];
		$("h2").each(function(i, str){ h2s.push($(str).text())})
		if (h2s){
			h2_str = h2s.join("###")
		}
		seo_object = {
			title : $("title").text() || false,
			h1 : $("h1").text() || false,
			h2 : h2_str || false,
			description : $("meta[name=description]").attr("content") || false,
			keywords : $("meta[name=keywords]").attr("content") || false,
			url : document.URL || false,
			canonical : $("link[rel=canonical]").attr("href") || false,
			og_type : $('meta[property="og:type"]').attr("content") || false,
			og_site_name : $('meta[property="og:site_name"]').attr("content") || false,
			og_title : $('meta[property="og:title"]').attr("content") || false,
			og_description : $('meta[property="og:description"]').attr("content") || false,
			og_image : $('meta[property="og:image"]').attr("content") || false
		};
		return seo_object;
	}
}

chrome.runtime.onMessage.addListener(
	function(request, sender, sendMessage){
		model = eval(request.model);
		method = request.method;
		data = model[method]();
		sendMessage(data);
	}
);
