   
   import {Quotes} from "./quotes.js";
  
      const btn = document.querySelector(".btn");
      const showHere = document.querySelector(".showHere");

      const author = document.getElementById("author")

     
      btn.addEventListener("click",function whatHapp(){
         let random = Math.floor(Math.random() * Quotes.length)
          showHere.innerHTML = Quotes[random].text
         author.innerHTML = Quotes[random].author
        
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
               
       

   

    