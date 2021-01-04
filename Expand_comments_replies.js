javascript:(function(){
	var myVar;
	var len;
	var len2 = 0;
	var i = 0;
	var total = 0;

	function myFunctionTwo() {
		x = document.getElementsByClassName("oajrlxb2 bp9cbjyn g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 g5gj957u p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys p8fzw8mz qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh gpro0wi8 m9osqain buofh1pr");
		len2 = x.length;
		if(len == len2)
			i = i + 1;
		if(len-i == 1){
				clearInterval(myVar);
				return;
		}
	}

	function myFunction() {
		myVar = window.setInterval(function() { var x = document.getElementsByClassName("oajrlxb2 bp9cbjyn g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 pq6dq46d mg4g778l btwxx1t3 g5gj957u p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys p8fzw8mz qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb lzcic4wl abiwlrkh gpro0wi8 m9osqain buofh1pr");
			len = x.length;
			x[i].id = "id2020";
			var clickyou = document.getElementById('id2020');
			total++;
			clickyou.click() 
			setTimeout(myFunctionTwo, 10000);
		}, 20000);
	}
	myFunction();

	window.setInterval(function() {
		if(len-i == 1)
			clearInterval(myVar);
	}, 1000);

})();
