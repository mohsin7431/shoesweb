let slide=document.querySelectorAll(".slidecard");
let card=document.querySelectorAll(".card");
let count=0 ;
 slide.forEach(function(slides,index){
slides.style.left=`${index*100}%`

 })
 function myfun(){
    slide.forEach(function(curVal){
        curVal.style.transform=`translateX(-${count*100}%)`
    })
 }
 setInterval(function(){
    count++;
    if (count== slide.length){
        count=0
    }
    myfun();
  //  console.log("Hello World");
 },
 2000
)
//card detail
card.forEach(function(cards){
    cards.addEventListener("click",function(){
        console.log(cards.firstElementChild.src);
        document.querySelector(".container").style.display="none";

        let div=document.createElement("div");
        div.classList.add("cardDetail");
        div.innerHTML=`<img src=${cards.firstElementChild.src} alt="">
        <div class="cardText">
            <h2>Top Trending</h2>
            <h2>Review</h2>
            <p> Absolutely thrilled with my recent purchase from Mohsin Shoes Store! I've been on the hunt for the perfect pair of comfortable shoes, and I've finally found them. The moment I slipped into these shoes, I could feel the difference. The cushioning is heavenly, providing unmatched support for my feet all day long. Plus, the breathability keeps my feet feeling fresh, even during the busiest days. I also appreciate the attention to detail in the construction - these shoes are built to last. Overall, I couldn't be happier with my purchase. Thanks, for delivering both style and comfort in one fantastic pair of shoes! </p>
            <button>Buy Now</button>
            <button>Add To Cart</button>
            <a href="">Back</a>
        </div>`
        document.querySelector("body").appendChild(div)
    })
})