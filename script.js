function nextPage(pageNumber) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + pageNumber).classList.add("active");
}

function celebrate() {
    setInterval(createFall, 200);
}

function createFall() {
    const item = document.createElement("div");
    item.classList.add("fall");

    const symbols = ["🎂", "🍰", "❤️", "✨", "🎉"];
    item.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (Math.random() * 20 + 20) + "px";
    item.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 5000);
}