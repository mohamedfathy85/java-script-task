


 var allproducts =document.querySelectorAll(".list li")


 var content =document.querySelector("#content")

 var btn1 =document.querySelector("#addtocard")

 var totalprice =0;

 

 allproducts.forEach(function(item){
    item.onclick= function(){

        totalprice +=parseInt(item.getAttribute("price"))
        

        content.innerHTML += item.textContent + "     ";
         
        if(content.innerHTML !=""){
            btn1.style.display ="block"
        }
    }
   
 })


//  btn.onclick=function(){
//     document.write(totalprice)
//  }



btn1.onclick=function(){
    alert  ( totalprice)
}
 
