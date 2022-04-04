const order = document.querySelector("#form");
const menu =document.querySelector("#food");
const success = document.querySelector(".success");
const items = document.querySelector(".items");
const reject = document.querySelector(".reject");
const ready = document.querySelector("main>div>h1");
const marq = document.querySelector("marquee");

const d = new Date();
let hours = d.getHours();
console.log(hours)

order.addEventListener("submit",initiate_order);


function initiate_order(e){
    e.preventDefault();
    let fries = document.querySelector("#fries").checked;
    let burger = document.querySelector("#burger").checked;
    let nuggets = document.querySelector("#nuggets").checked;
    let coffee = document.querySelector("#coffee").checked;
    let coke = document.querySelector("#coke").checked;
    let sandwich = document.querySelector("#sandwich").checked;
    let cake = document.querySelector("#cake").checked;
    let oat = document.querySelector("#oat").checked;
   
    if(fries|| burger || nuggets  || coffee  || coke  || sandwich  || cake   || oat ){

        let checked_value = document.querySelectorAll(".check");
        let checked_array=[];
        for(let i=0;i<checked_value.length;i++){
            if(checked_value[i].checked){
                checked_array.push(checked_value[i].value);
            }
         }

         let status;
         if(hours>=20 || hours<=8){
             status= "close";
         }else{
             status="open";
         }
        let order_id = Math.floor(Math.random()*1000);
        menu.style.display="none";
        
        let food_promise = new Promise(function(resolve,reject){
            let time =Math.floor(Math.random() * 6000) +3000;
            
    
            if(status==="close"){
                reject("We are not taking orders right now!");
            }else{
                success.innerHTML = `<h3>Thanks for order</h3><p>Your order id is ${order_id}</p><p>Please Wait, We are processing your order</p>`;
                success.style.transform="scale(1)";
                setTimeout(function(){
                    resolve(checked_array);
                },time);
            }
        });
    
        food_promise.then(function (res){
            success.style.display="none";
            items.style.transform="scale(1)";
            ready.innerHTML = "<h2>Your order is ready</h2>";
            res.map(function(elem){
                switch(elem){
                    case "fries":
                        let div = document.createElement("div");

                        let img = document.createElement("img");
                        img.src="./fries.png";
                        let p = document.createElement("p");
                        p.innerText=`Order id : ${order_id}`;

                        div.append(img,p);
                        items.append(div);
                        break;
                    case "burger":
                        let div2 = document.createElement("div");

                        let img2 = document.createElement("img");
                        img2.src="./burger.png";
                        let p2 = document.createElement("p");
                        p2.innerText=`Order id : ${order_id}`;

                        div2.append(img2,p2);
                        items.append(div2);
                        break;
                    case "nuggets":
                        let div3 = document.createElement("div");

                        let img3 = document.createElement("img");
                        img3.src="./veg.png";
                        let p3 = document.createElement("p");
                        p3.innerText=`Order id : ${order_id}`;

                        div3.append(img3,p3);
                        items.append(div3);
                        break;
                    case "coffee":
                        let div4 = document.createElement("div");

                        let img4 = document.createElement("img");
                        img4.src="./coffee.png";
                        let p4 = document.createElement("p");
                        p4.innerText=`Order id : ${order_id}`;

                        div4.append(img4,p4);
                        items.append(div4);
                        break;
                    case "coke":
                        let div5 = document.createElement("div");

                        let img5 = document.createElement("img");
                        img5.src="./coke.png";
                        let p5 = document.createElement("p");
                        p5.innerText=`Order id : ${order_id}`;

                        div5.append(img5,p5);
                        items.append(div5);
                        break;
                    case "sandwich":
                        let div6 = document.createElement("div");

                        let img6 = document.createElement("img");
                        img6.src="./sandwhich.png";
                        let p6 = document.createElement("p");
                        p6.innerText=`Order id : ${order_id}`;

                        div6.append(img6,p6);
                        items.append(div6);
                        break;
                    case "cake":
                        let div7 = document.createElement("div");

                        let img7 = document.createElement("img");
                        img7.src="./pancake.png";
                        let p7 = document.createElement("p");
                        p7.innerText=`Order id : ${order_id}`;

                        div7.append(img7,p7);
                        items.append(div7);
                        break;
                    case "oat":
                        let div8 = document.createElement("div");

                        let img8 = document.createElement("img");
                        img8.src="./oatmeal.png";
                        let p8 = document.createElement("p");
                        p8.innerText=`Order id : ${order_id}`;

                        div8.append(img8,p8);
                        items.append(div8);
                        break;
                }
            })
        });
    
        food_promise.catch(function(error){
                        reject.style.transform="scale(1)";
                        marq.innerText="We will be open at 9:00AM. Thanks!";
                        let div = document.createElement("div");
                        let img = document.createElement("img");
                        img.src="https://media.istockphoto.com/photos/sorry-were-closed-sign-picture-id483287435?k=20&m=483287435&s=612x612&w=0&h=q3D3T967MJdj0pBh4CvjeTbrOFmdVHUzbPRaS3p47Ps=";
                        let p = document.createElement("p");
                        p.innerText=`We are not taking orders right now`;

                        div.append(img,p);
                        reject.append(div); 
                        console.log(error);
        });
        resetForm();

    }
    else{
        alert("Please choose atleast One Item: 🍟🍔☕🥤🥪🥧");
    }

}


function resetForm(){
document.querySelector("#fries").checked = false; 
document.querySelector("#burger").checked = false; 
document.querySelector("#nuggets").checked = false;
document.querySelector("#coffee").checked = false;
document.querySelector("#coke").checked = false;  
document.querySelector("#sandwich").checked = false;
document.querySelector("#cake").checked = false;  
document.querySelector("#oat").checked = false;
    
}