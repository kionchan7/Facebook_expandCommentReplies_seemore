var myVar1;
var len1;
var found = false;
function myFunction2() {};

function myFunction1() {
	found = false;
  myVar1 = window.setInterval(function() { var x = document.getElementsByClassName("oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz rq0escxv nhd2j8a9 nc684nl6 p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso i1ao9s8h esuyzwwr f1sip0of lzcic4wl oo9gr5id gpro0wi8 lrazzd5p");
len1 = x.length--;
for(j = 0; j < len1; j++)
{
	if(x[j].href == undefined)
	{
		found = true;
		break;
	}
}
if(found == true)
{
	x[j].id = "hello";
	var clickyou = document.getElementById('hello');
	clickyou.click()
}
else{
	clearInterval(myVar1);
	return;
}

}, 20000);
}

myFunction1();