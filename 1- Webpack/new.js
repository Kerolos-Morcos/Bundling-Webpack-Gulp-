import "/style.css";
var products=new XMLHttpRequest(); 
var arr=[];
var div=document.getElementsByClassName('products')[0];
let star=document.getElementById('search')
products.open("GET","https://dummyjson.com/products")
products.send();
products.onreadystatechange=function()
{
   if(products.readyState==4)
   {
       var data= JSON.parse(products.responseText).products
        console.log(data );
        arr=data
        for(var i=0;i<data.length;i++)
        {
            div.innerHTML+=`<div class="product">
            <div class="image">
                <img src=${data[i].thumbnail} alt="">
            </div>
            <div class="namePrice">
                <h3>${data[i].brand}</h3>
                <span>$ ${data[i].price}</span>
            </div>
            <p>${data[i].title}</p>
            
            <div class="bay">
                <button onclick="add(${i})"> bay now </button>
            </div>
        </div>`
        }
   }
}
function add(index)
{
var newdata= JSON.parse(localStorage.getItem('product'))||[];

console.log(newdata);
newdata.push(arr[index]);
console.log(newdata);
localStorage.setItem("product",JSON.stringify(newdata)); //overwrite 

}
var view=document.getElementsByClassName('views')[0];
var product=JSON.parse(localStorage.getItem('product'))

view.innerHTML="";
for(var i=0;i<product.length;i++)
{
    

        
        view.innerHTML+=`<div class="product">
        <div class="image">
            <img src=${product[i].thumbnail} alt="">
        </div>
        <div class="namePrice">
            <h3>${product[i].brand}</h3>
            <span>$ ${product[i].price}</span>
        </div>
        <p>${product[i].title}</p>
        
        <div class="bay">
            <button> bay now </button>
        </div>
    </div>`
    }

    star.addEventListener('click',()=>{
    var text=document.getElementById('s').value;
    alert('')
    div.innerHTML="";
    for(var i=0;i<arr.length;i++)
    {
        
        if(arr[i].title.indexOf(text)>-1)
        {
            
            div.innerHTML+=`<div class="product">
            <div class="image">
                <img src=${arr[i].thumbnail} alt="">
            </div>
            <div class="namePrice">
                <h3>${arr[i].brand}</h3>
                <span>$ ${arr[i].price}</span>
            </div>
            <p>${arr[i].title}</p>
            
            <div class="bay">
                <button> bay now </button>
            </div>
        </div>`
        }
    }
})