$(function(){
	var seo_object = {}
	if (localStorage.getItem("SeoPreview") != "undefined"){
		seo_object = JSON.parse(localStorage.getItem("SeoPreview"));
	}

    // DOMをセットする
	var div = $("<div>").attr({id: "seo_preview_div"})
	var table = $("<table>").css({width: "500px"}).addClass("table");
	var tbody = $("<tbody>");
	for (var seo_tag in seo_object) {
		var tr = $('<tr>');
		var title = seo_tag
		if (seo_object[seo_tag] && seo_tag != "og_image"){
	 		title = seo_tag + "(" + seo_object[seo_tag].length +")"
		}
		var th = $("<th>").text(title);
		var content = seo_object[seo_tag]
		if (content && content.split(",")){
			content = content.split("###").join("</br>")
		}
		var td = $('<td>').html(content);

		if (seo_tag ==="og_image") {
			var image = $("<image>").attr("src", seo_object[seo_tag]).css({width: "116px", height: "116px"});
			td = $("<td>").append(image);
		}
		if (seo_object[seo_tag] == false){
			var td = $('<td>').css({"background-color": "#FFEFD5"});
		}
		tbody.append(tr.append(th).append(td));
	};
	div.append(table.append(tbody));
	$("body").append(div);
});
