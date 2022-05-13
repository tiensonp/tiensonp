function unshiftp(e) {
var data =JSON.stringify(e)
//data = e.replace(/\\n/gi, "\"");
//let dd=e.contents.replace(/&quot;/gi, "\"")
//var tongproduct=e.contents.length

var seoTitle=data.match(/<title>(.+?)<\/title>/gi) // Title
var seoTitle=data.match(/\\"ogTitle\\":\\"(.+?)\\"/g) // productId
var target=data.match(/\\"displayName\\":\\"(.+?)\\"/g) // productId
//var productId=data.match(/\"productId\":(.+?),/gi) // starRating

seoTitle[0] = seoTitle[0].replace(/\\"/gi, "");
seoTitle[0] = seoTitle[0].replace(/ - AliExpress/gi, "");
seoTitle[0] = seoTitle[0].replace(/AliExpress/gi, "");
seoTitle[0] = seoTitle[0].replace(/ogTitle:/gi, "");

document.getElementsByTagName("title")[0].innerHTML =seoTitle[0]
document.getElementById("content").innerHTML =seoTitle[0]

//document.getElementById("title")[0].innerHTML =disdata

}


