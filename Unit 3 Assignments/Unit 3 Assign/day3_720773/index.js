

//This information should be stored in 4 different objects. All of this objects should be stored in localstorage in advance. Their localstorage key should be their respective names.  For e.g Scope data will be stored in LocalStorage with key as "scope". ( Note: no capital letter in key )


const scope={
    line1:"Scope in JavaScript refers to the accessibility or visibility of variables.",
    line2:"That is, which parts of a program have access to the variable or where the variable is visible.",
    line3:"There are 3 Types of Scopes :-",
    line4: "Global Scope - When you execute a script, the JavaScript engine creates a global execution context. It also assigns variables that you declare outside of functions to the global execution context. These variables are in the global scope. They are also known as global variables.",
    line5: "Local Scope - Variables that you declare inside a function are local to that function. They are called Local Variables and can’t be accessed in Global Scope.",
    line6: "Block Scope - Variables that you declare inside a block {} using let or const are limited only to that block.",
 };
 localStorage.setItem("scope",JSON.stringify(scope));

 const hoisting={
    line1:"Hoisting is JavaScript's default behavior of finding variables and function declarations before actually executing the program.",
    line2:"Types of Hoisting -",
    line3:"Var hoisting",
    line4: "let and const hoisting",
    line5: "class hoisting",
    line6: "Function and class expression hoisting",
 };
 localStorage.setItem("hoisting",JSON.stringify(hoisting));

 const constructor_functions={
    line1:"A constructor is a special function that creates and initializes an object instance of a class.",
    line2:"In JavaScript, a constructor gets called when an object is created using the new keyword.",
    line3:"When a constructor gets invoked in JavaScript, the following sequence of operations take place:-",
    line4: "A new empty object gets created.",
    line5: "The this keyword begins to refer to the new object and it becomes the current instance object.",
    line6: "The new object is then returned as the return value of the constructor.",
 };
 localStorage.setItem("constructor_functions",JSON.stringify(constructor_functions));

 const prototype={
    line1:"The prototype is an object that is associated with every functions and objects by default in JavaScript, where function's prototype property is accessible and modifiable and object's prototype property (aka attribute) is not visible.",
    line2:"Every function includes prototype object by default.",
    line3:"The prototype object is special type of enumerable object to which additional properties can be attached to it which will be shared across all the instances of it's constructor function.",
    line4: "Every object which is created using literal syntax or constructor syntax with the new keyword, includes __proto__ property that points to prototype object of a function that created this object.",
    line5: "Object's Prototype :-",
    line6: "object's prototype property is invisible. Use Object.getPrototypeOf(obj) method instead of __proto__ to access prototype object.",
 };
 localStorage.setItem("prototype",JSON.stringify(prototype));




//Information should be retrieved from localstorage only, avoid hard coding data.
let scopedata=JSON.parse(localStorage.getItem("scope"))||[];
let hostdata=JSON.parse(localStorage.getItem("hoisting"))||[];
let constrdata=JSON.parse(localStorage.getItem("constructor_functions"))||[];
let prodata=JSON.parse(localStorage.getItem("prototype"))||[];
let btn_arr=["scope","hoisting","constructor_functions","prototype"];
btn_arr.forEach((elem)=>{
    document.getElementById(elem).addEventListener("click",()=>{
        console.log(elem);

        if(elem=="scope"){
            let a=[];
            a.push(scopedata);

            gomap(a);
        }
        else if(elem=="hoisting"){
            let a=[];
            a.push(hostdata);

            gomap(a);
        }
        else if(elem=="constructor_functions"){
            let a=[];
            a.push(constrdata);

            gomap(a);
        }
        else if(elem=="prototype"){
            let a=[];
            a.push(prodata);

            gomap(a);
        }

    })
})

 function gomap(a){
    a.map(function(elem,index){
        document.querySelector("#infoBox").innerHTML="";
        var div=document.createElement("div");
        div.setAttribute("class","main");
        var unorderList=document.createElement("ul");
        var list=document.createElement("li");
        var list1=document.createElement("li");
        var list2 = document.createElement("li");
        var list3 = document.createElement("li");
        var list4 =document.createElement("li");
        var list5 =document.createElement("li");

        list.innerText=elem.line1;
        list1.innerText=elem.line2;
        list2.innerText=elem.line3;
        list3.innerText=elem.line4;
        list4.innerText=elem.line5;
        list5.innerText=elem.line6;

        
        unorderList.append(list,list1, list2, list3, list4, list5);
        div.append(unorderList);
        // div.innerText=e.name
        document.querySelector("#infoBox").append(div);

     })
 }