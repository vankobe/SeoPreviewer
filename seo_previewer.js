$(function(){
	seo_object = {}
	$("body").on("click", "#seo_preview_close",function(e){
		e.preventDefault();
		$("#seo_preview_div").hide();
	})
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
	}
	var div = $("<div>").css({position: "fixed", 
							top: 0, right: 0, 
							"z-index": 99999999999,
							"background-color": "white",
							 height: "100%",
							  overflow: "scroll"})
						.attr({id: "seo_preview_div"})
	var table = $("<table>").css({width: "500px"}).addClass("table");
	var tbody = $("<tbody>")
	var close_mark = $("<a>").attr({href: "#", id: "seo_preview_close"}).text("[ x ]").css({})
	for (var seo_tag in seo_object) {
		var tr = $('<tr>')
		var th = $("<th>").text(seo_tag);
		var td = $('<td>').text(seo_object[seo_tag]);

		if (seo_tag ==="og_image") {
			var image = $("<image>").attr("src", seo_object[seo_tag]);
			td = $("<td>").append(image)
		}
		tbody.append(tr.append(th).append(td))
	};
	div.append(close_mark).append(table.append(tbody));
	$("body").append(div)
});