   
import { Quotes } from "./quotes.js"
      const btn = document.querySelector(".btn");
      const showText= document.querySelector(".showText p");
      const showAuthor = document.getElementById("showAuthor")

     
      btn.addEventListener("click", function whatHapp(){
         let random = Math.floor(Math.random() * Quotes.length)
          showText.innerHTML = Quotes[random].text
         showAuthor.innerHTML = Quotes[random].author
        
      })

   





















      
   // const btn = document.querySelector(".btn");
   //  const showHere = document.querySelector(".showHere");
   //  const showMe= document.getElementById("showMe");
    
    

   // import { quotes } from "./quotes.js";
   
   //        btn.addEventListener("click",function messagE(){
   //         let random = Math.floor(Math.random() * 34)
   //         showHere.innerText = quotes[random].text;
   //        showMe.innerText = quotes[random].author;
   //        })
               
       

   

    