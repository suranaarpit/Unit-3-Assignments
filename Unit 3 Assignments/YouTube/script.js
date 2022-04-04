const search_results_div = document.getElementById("container");

const searchVideos = async ()=>{
    try{
        let input = document.getElementById("search").value;

        let res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${input}&key=AIzaSyBcDU6QQ2FJPrTp7gCDq4TsHW_B8kLJs_g&maxResults=20`)

        let data = await res.json()
        // console.log('data:', data)

        let videos = data.items
        console.log('videos:', videos)

        appendVideos(videos)

    }
    catch(err){

        console.log('err:', err)

    }
};

const appendVideos = (data) =>{
    try{
        data.forEach((el)=>{

            let div = document.createElement("div");

            let thumb = document.createElement("img");
            thumb.addEventListener("click", function(){
                let arr = [];
                arr.push(el)
                localStorage.setItem("thumbnail", JSON.stringify(arr));
                window.location.href = "./video.html";
            })
            thumb.setAttribute("id", "thumb")
            thumb.src = el.snippet.thumbnails.high.url;

            let title = document.createElement("h4");
            title.innerText = el.snippet.title;

            let channel_name = document.createElement("p");
            channel_name.innerText = el.snippet.channelTitle;

            div.append(thumb,title, channel_name);
            search_results_div.append(div); 
        })
    }
    catch(err){

        console.log('err:', err)

    }
}

