async function apiCall(url) {


    //add api call logic here
    try{
        let res = await fetch(url)
        let data = await res.json()
        return data
    }
    catch(err){
        console.log('err:', err)

    }


}


function appendArticles(articles, main) {
    main.innerHTML = ""
    //add append logic here
    articles.forEach((el)=>{
        let div = document.createElement("div")
        div.setAttribute("id", "blog")

        let div1 = document.createElement("div")
        div1.setAttribute("class", "title")
        let tit = document.createElement("p")
        tit.addEventListener("click",function(){
            let arr = []
            arr.push (el)
            localStorage.setItem("article",JSON.stringify(arr));
            window.location.href = "./blog.html"
        })
        tit.innerText = el.title

        let div2 = document.createElement("div")
        div2.setAttribute("class", "desc")
        let disc = document.createElement("p")
        disc.innerText = el.description

        let div3 = document.createElement("div")
        div3.setAttribute("class", "poster")
        let pos = document.createElement("img")
        pos.setAttribute("class", "post")
        pos.src = el.urlToImage

        div3.append(pos)
        div2.append(disc)
        div1.append(tit)
        div.append(div1,div2,div3)
        main.append(div)
    })

}

const searchBlog = async(e,input) =>{
    if(e.key==="Enter"){
        localStorage.setItem("search_term",input);
        window.location.href = "./search.html";
    }
};

export { apiCall, appendArticles, searchBlog }

//https://blog-search-u3c4.herokuapp.com/api/blogs/psychology