var SeoPreview = {};
SeoPreview ={
	find: function(){
		seo_object = {};
		h1s = [];
		$("h1").each(function(i, str){ h1s.push($(str).text())});
		if (h1s){
			h1_str = h1s.join("###")
		}
		h2s = [];
		$("h2").each(function(i, str){ h2s.push($(str).text())})
		if (h2s){
			h2_str = h2s.join("###")
		}
		h3s = [];
		$("h3").each(function(i, str){ h3s.push($(str).text())})
		if (h3s){
			h3_str = h3s.join("###")
		}
		seo_object = {
			title : $("title").text() || false,
			h1 : h1_str || $("h1").find("img").attr("alt") || false,
			h2 : h2_str || $("h2").find("img").attr("alt") || false,
			h3 : h3_str || $("h3").find("img").attr("alt") || false,
			description : $("meta[name=description]").attr("content") || false,
			keywords : $("meta[name=keywords]").attr("content") || false,
			robots : $("meta[name=robots]").attr("content") || false,
			url : document.URL || false,
			canonical : $("link[rel=canonical]").attr("href") || false,
			prev : $("link[rel=prev]").attr("href") || false,
			next : $("link[rel=next]").attr("href") || false,
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
