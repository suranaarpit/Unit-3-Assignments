const getData = async (url) =>{

try{

    let res = await fetch(url);

    let data = await res.json();

    return data;

}

catch(err){

    console.log('err:', err)

}

};

const append = (data, parent) =>{

parent.innHtml = "";


data.forEach(({image, title, price})=>{

let div = document.createElement("div");

let img = document.createElement("img");
img.src = image;

let ti = document.createElement("h3");
ti.innerText = title;

let pr = document.createElement("p")
pr.innerText = price;

div.append(img, ti, pr);
parent.append(div);

})


}


export {getData, append}