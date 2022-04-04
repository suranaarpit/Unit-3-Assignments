let timerID;

let movies = document.getElementById("movies")

async function searchMovie(){

try{

let input = document.getElementById("query").value;

let res = await fetch(`https://www.omdbapi.com/?apikey=d741de38&s=${input}`)

let data = await res.json()

let search_movies = data.Search

return search_movies;

}

catch(err){

    console.log('err:', err)
}

}

function appendMovies(data){

movies.innerHTML = "";

console.log('data:', data)


data.forEach(function(el){
    let p = document.createElement ("p")
    p.innerText = el.Title
    movies.append(p);
});
}

async function main(){
    movies.innerHTML = "";

    try{
        let data = await searchMovie();
        if(data === undefined){
            return false;
        }
        appendMovies(data)    
    }
catch(err){
    
    console.log('err:', err)

}
    
}
function debounce(main, delay){

console.log('timerID:', timerID)

if(timerID){

clearTimeout(timerID)

}
timerID = setTimeout(function(){

main();

}, delay);

}