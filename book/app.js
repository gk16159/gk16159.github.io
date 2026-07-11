const book = ePub("book_1.epub");

const rendition = book.renderTo("viewer", {
    width: "100%",
    height: "100%",
    spread: "auto"
});

rendition.display();

document.getElementById("next").addEventListener("click", () => {
    rendition.next();
});

document.getElementById("prev").addEventListener("click", () => {
    rendition.prev();
});

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") rendition.next();
    if (e.key === "ArrowLeft") rendition.prev();
});
