import { emojiList } from "./emojiList.js";

const emojiContainer = document.querySelector(".emojisContainer");
const form = document.querySelector("form");
const input = form.querySelector("input");
const buttons = form.querySelectorAll(".buttons");

console.log(buttons);

window.addEventListener("load",()=>{
    displayEmojis(emojiList);
})

form.addEventListener("keyup", searchEmoji);

buttons.forEach((btn)=>{
   btn.addEventListener("click",searchbtnEmoji);
   console.log(btn);
})
// buttons.addEventListener("click", searchEmoji);

function searchbtnEmoji(e){
    const btnValue = e.target.innerText.toLowerCase();
    e.preventDefault();
    const filteredbtnArr = emojiList.filter((obj) =>{
        if(obj.aliases.includes(btnValue)||obj.description.toString().includes(btnValue)||obj.tags.toString().includes(btnValue)){
            return true;
            }
    }) 
    displayEmojis(filteredbtnArr);
}
   
function searchEmoji(e){
  const inputValue = input.value.toLowerCase();
 
    e.preventDefault();
   

    const filteredArr = emojiList.filter((obj) =>{
        if(obj.description.includes(inputValue) || obj.aliases.toString().includes(inputValue) || obj.tags.toString().includes(inputValue)){
            return true;
        }
       
    })
    displayEmojis(filteredArr);
    
}
function displayEmojis(arr){
    emojiContainer.innerHTML = "";
    const fragment = document.createDocumentFragment();fragment
    
    arr.forEach((obj) =>{
         const parent = document.createElement("div");
         const icon = document.createElement("p");
        
         parent.classList.add("parent");
         icon.classList.add("icon");
         icon.innerText = obj.emoji;
         icon.addEventListener("click" , () =>{
            clickToCopyEmoji(icon.innerText);
         })

  parent.append(icon);
fragment.append(parent);
});
emojiContainer.append(fragment);
}

function clickToCopyEmoji(textEmoji){
    window.navigator.clipboard.writeText(textEmoji)
    .then(respose=>{
        alert("Emoji Successfully Copied");
    })
    .catch( e =>{
          alert("Something went wrong");
    })
}