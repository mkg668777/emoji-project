const emojis = [
    { char: "😀", category: "face" }, { char: "😁", category: "face" },
    { char: "😂", category: "face" }, { char: "🤣", category: "face" },
    { char: "😃", category: "face" }, { char: "😄", category: "face" },
    { char: "😅", category: "face" }, { char: "😆", category: "face" },
    { char: "🥰", category: "heart" }, { char: "😍", category: "heart" },
    { char: "😘", category: "heart" }, { char: "😚", category: "heart" },
    { char: "👍", category: "hand" }, { char: "👋", category: "hand" },
    { char: "👏", category: "hand" }, { char: "🖐️", category: "hand" },
    { char: "🍏", category: "food" }, { char: "🍎", category: "food" },
    { char: "🍌", category: "food" }, { char: "🍉", category: "food" },
    { char: "⚽", category: "sports" }, { char: "🏀", category: "sports" },
    { char: "🏈", category: "sports" }, { char: "🎾", category: "sports" },
    { char: "🐶", category: "animal" }, { char: "🐱", category: "animal" },
    { char: "🐭", category: "animal" }, { char: "🐹", category: "animal" },
    { char: "🇮🇳", category: "flag" }, { char: "🇺🇸", category: "flag" },
    { char: "🇬🇧", category: "flag" }, { char: "🇯🇵", category: "flag" },
    
];



function loadEmojis(category = "all") {
    const emojiGrid = document.getElementById("emojiGrid");
    emojiGrid.innerHTML = "";
    
    emojis
        .filter(emoji => category === "all" || emoji.category === category)
        .forEach(emoji => {
            let span = document.createElement("span");
            span.classList.add("emoji");
            span.innerText = emoji.char;
            span.onclick = () => copyToClipboard(emoji.char);
            emojiGrid.appendChild(span);
        });
}

function copyToClipboard(emoji) {
    navigator.clipboard.writeText(emoji);
    alert("Copied: " + emoji);
}

function filterEmojis(category) {
    loadEmojis(category);
}

function searchEmoji() {
    let searchValue = document.getElementById("searchBox").value.toLowerCase();
    const emojiGrid = document.getElementById("emojiGrid");
    emojiGrid.innerHTML = "";

    emojis
        .filter(emoji => emoji.char.includes(searchValue))
        .forEach(emoji => {
            let span = document.createElement("span");
            span.classList.add("emoji");
            span.innerText = emoji.char;
            span.onclick = () => copyToClipboard(emoji.char);
            emojiGrid.appendChild(span);
        });
}

// Default Load
loadEmojis();
