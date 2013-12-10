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
		var th = $("<th>").text(seo_tag);
		var td = $('<td>').text(seo_object[seo_tag]);

		if (seo_tag ==="og_image") {
			var image = $("<image>").attr("src", seo_object[seo_tag]);
			td = $("<td>").append(image);
		}
		if (seo_object[seo_tag] == false){
			var td = $('<td>').css({"background-color": "#FFEFD5"});
		}
		tbody.append(tr.append(th).append(td));
	};
	div.append(table.append(tbody));
	$("body").append(div);
})

/*
function setView(response){	
 	seo_object = response;
	// 閉じる
    $("body").on("click", "#seo_preview_close",function(e){
		e.preventDefault();
		$("#seo_preview_div").hide();
	});

    // DOMをセットする
	var div = $("<div>").attr({id: "seo_preview_div"})
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
}
*/
//