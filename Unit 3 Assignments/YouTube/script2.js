let video = JSON.parse(localStorage.getItem("thumbnail"))
console.log('video:', video)


video.map(function(el){

let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");

let iframe = document.createElement("iframe");
iframe.src = `https://www.youtube.com/embed/${el.id.videoId}`


let title = document.createElement("h3");
title.innerText = el.snippet.title;

let channelname = document.createElement("h5");
channelname.innerText = el.snippet.channelTitle;


div1.append(iframe)
document.getElementById("iframediv").append(div1)

div2.append(title)
document.getElementById("titlediv").append(div2)

div3.append(channelname)
document.getElementById("titlename").append(div3);

})