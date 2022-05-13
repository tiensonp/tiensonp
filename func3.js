function unshift(e) {
//var data =JSON.stringify(e)
//data = data.replace(/&quot;/gi, "\"");
let dd=e.contents.replace(/&quot;/gi, "\"")
var tongproduct=e.contents.length

var target=dd.match(/\"x_object_id\":\"(.+?)"/g) // productId
var productId=dd.match(/\"productId\":(.+?),/gi) // starRating

var seoTitle=dd.match(/\"seoTitle\":\"(.+?)"/gi) // Title
var imgUrl=dd.match(/\"imgUrl\":\"(.+?)"/gi) // image
var price=dd.match(/\"formatted_price\":\"(.+?)"/gi) // price
var storeName=dd.match(/\"storeName\":\"(.+?)"/gi) // storeName
var starRating=dd.match(/\"starRating\":(.+?),/gi) // starRating
var tradeDesc=dd.match(/\"tradeDesc\":\"(.+?)"/gi) // storeName
var tags=dd.match(/\"displayName\":\"(.+?)"/gi) // tags

//var tongproduct=target.length
//alert(keywords)

var disdata=""
var title=""

seoTitle[0] = seoTitle[0].replace(/\"/gi, "");	
seoTitle[0] = seoTitle[0].replace(/seoTitle:/gi, "");
title=keywords+'-'+seoTitle[0]
document.getElementsByTagName("title")[0].innerHTML =title


var o='{"@context": "http://schema.org/","@type":"Product","productID": "[productId]","description": "Great but Cheap [seoTitle]","aggregateRating ":{"@type":"AggregateRating","ratingCount ":"[ratingCount]","ratingValue ":"[starRating]"},"image":"[imgUrl]","name":"[seoTitle]","sku":"AE-33029213495","mpn":"MP9206802AE","review":{"@type":"Review","author":{"@type":"Thing","name":"Carol Smith"},"name":"Reviews"},"brand":{"@type":"Thing","name":"[storeName]"},"offers":{"@type":"Offer","price":"[price]","priceCurrency":"USD","seller":{"@type":"Organization","name":"Shop361 Store"},"availability":"http://schema.org/InStock","itemCondition":"http://schema.org/NewCondition","priceValidUntil":"2022-07-11","url":"[urllink]"}}'

o=o.replace(/\[seoTitle\]/gi, seoTitle[0]).replace(/\[imgUrl\]/gi, imgUrl[0]).replace(/\[price\]/gi, price[0]).replace(/\[urllink\]/gi, window.location).replace(/\[starRating\]/gi, starRating[0]).replace(/\[ratingCount\]/gi, "23689").replace(/\[storeName\]/gi, storeName[0]).replace(/\[productId\]/gi, productId[0])

var i = document.createElement("script");
//i.type = "application/ld+json", i.textContent = JSON.stringify(o), (document.head || document.getElementsByTagName("head")[0]).appendChild(i)
i.type = "application/ld+json", i.textContent = o, (document.head || document.getElementsByTagName("head")[0]).appendChild(i)

//alert(window.location)
	

	
for(k=0;k<target.length;k++){
	//alert(tags[k])
seoTitle[k] = seoTitle[k].replace(/\"/gi, "");	
seoTitle[k] = seoTitle[k].replace(/seoTitle:/gi, "");

productId[k] = productId[k].replace(/\"/gi, "");
productId[k] = productId[k].replace(/,/gi, "");	
productId[k] = productId[k].replace(/productId:/gi, "");

imgUrl[k] = imgUrl[k].replace(/\"/gi, "");	
imgUrl[k] = imgUrl[k].replace(/imgUrl:/gi, "");
imgUrl[k] = imgUrl[k].replace(/_220x220xz.jpg/gi, "");

price[k] = price[k].replace(/\"/gi, "");	
price[k] = price[k].replace(/formatted_price:/gi, "");

storeName[k] = storeName[k].replace(/\"/gi, "");	
storeName[k] = storeName[k].replace(/storeName:/gi, "");

if(starRating[k]!=null){
starRating[k] = starRating[k].replace(/\"/gi, "");
starRating[k] = starRating[k].replace(/,/gi, "");
starRating[k] = starRating[k].replace(/starRating:/gi, "");
}

if(tradeDesc[k]!=null){
tradeDesc[k] = tradeDesc[k].replace(/\"/gi, "");	
tradeDesc[k] = tradeDesc[k].replace(/tradeDesc:/gi, "");
}
var tag2=''
if(tags[k]!=null){
tags[k] = tags[k].replace(/\"/gi, "");	
tags[k] = tags[k].replace(/displayName:/gi, "");
var tag1=tags[k].replace(/ /gi, "-");
tag2='<a href="/?'+tag1+'">'+tags[k]+'</a>'
}else{tag2=''}

//disdata +=productId[k]+'<br>'+seoTitle[k]+'<br>'+imgUrl[k]+'<br>'+price[k]+'<br>'+storeName[k]+'<br>'+tradeDesc[k]+'<br>'+starRating[k]+'<br>'

disdata +=tag2+'<div class="flex flex-wrap items-center my-4"><img src="'+imgUrl[k]+'" alt="'+seoTitle[k]+'" class="w-24 h-24 md:w-32 md:h-32 object-cover shadow-lg rounded my-2 mr-6"><div class="flex-1"><h2 class="font-medium"><a href="/?product,'+productId[k]+'" class="hover:text-pink-600">'+seoTitle[k]+'</a></h2><div><span class="inline-block font-medium text-sm text-white rounded bg-pink-600 my-2 py-0.5 px-2">'+price[k]+'</span></div></div></div>'
}

document.getElementById("content").innerHTML =disdata + "10 disdata"


}


