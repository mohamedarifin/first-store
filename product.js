var searchbar = document.querySelector(".searchbar input")
searchbar.addEventListener("keyup",()=>{
    var val = searchbar.value.toLowerCase();
    var list = document.querySelectorAll(".scroll_items li");
    for(var i = 0;i<list.length;i++)
    if(list[i].innerHTML.toLowerCase().indexOf(val)==-1)
    {
        list[i].style.display = "none";
    }else{
        list[i].style.display = "block";
    }
})
var searchbar = document.querySelector(".searchbar input");
var close = document.querySelector(".close");
var search_items = document.querySelector(".search_items");
searchbar.addEventListener("click",()=>{
    search_items.style.display="block"
})
close.addEventListener("click",()=>{
    search_items.style.display="none";
    searchbar.value="";
})

// create a add cart button in js

var product = document.querySelectorAll(".product")
product.forEach((pro)=>{
    var create_add_cart = document.createElement("div");
    create_add_cart.innerHTML = "<ion-icon name='cart'></ion-icon>"
    create_add_cart.classList.add("cartadd")
    pro.appendChild(create_add_cart)
   cartbtn(create_add_cart)
})
var add_cart_back_cover = document.querySelector(".add_cart_back_cover");
var add_cart_close = document.querySelector(".add_cart_close");
var add_cart_cont = document.querySelector(".add_cart_cont");
var add_cart_list = document.querySelector(".add_cart_list");
var count_no = document.querySelector(".count_no")
console.log(count_no.innerHTML)
function extra(){
    count_no.innerHTML = add_cart_list.childElementCount-1;
}
add_cart_cont.addEventListener("click",()=>{
    add_cart_back_cover.classList.add("add_add_cart")
})
count_no.addEventListener("click",()=>{
    add_cart_back_cover.classList.add("add_add_cart")
})
add_cart_close.addEventListener("click",()=>{
    add_cart_back_cover.classList.remove("add_add_cart")
})

function  cartbtn(btn){
    btn.addEventListener("click",(e)=>{
        e.preventDefault();
        var parent = btn.parentNode;
       
        var imgsrc = parent.querySelector("img").src;
        var title = parent.querySelector(".title").innerHTML;
        var rate = parent.querySelector(".rate").innerHTML;
        var a = parent.querySelector("a").href;
        var source = cartapply(imgsrc,title,rate,a);
        var creatparent = document.createElement("div");
        creatparent.classList.add("cart_list");
        creatparent.innerHTML = source;
        add_cart_list.appendChild(creatparent);
        var parent_remove = creatparent.children[2].children[1];
        var buy_btn = creatparent.children[2].children[0];
        removeparent(parent_remove);
        extra()
       
    })
}
function removeparent(card_remove){
    card_remove.addEventListener("click",()=>{
        card_remove.parentNode.parentNode.remove();
        extra()
    });

}


function  cartapply(imgsrc,title,rate,a){
    return `<img src="${imgsrc}" alt="">
    <div class="titleamount">
                        <h5 class="card_title">${title}</h5>
                    <div class="card_rate">
                        <span>₹</span>
                        <div class="card_amount">${rate}</div>
                    </div>
                    </div>

<div class="buy_remove">
  <div class="cart_buy"><a href="${a}">Buy</a></div>
  <div class="card_remove"><ion-icon name="trash-outline"></ion-icon></div>
 </div>
</div>`
}
