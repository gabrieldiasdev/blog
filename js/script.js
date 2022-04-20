const filterCard = () => {
    const input = document.getElementById("searchInput").value.toUpperCase();
    const cards = document.getElementsByClassName("box");

    for (let i = 0; i < cards.length; i++) {
        let title = cards[i];
        if (title.innerText.toUpperCase().indexOf(input) > -1) {
            cards[i].style.display = "block";
        } else {
            cards[i].style.display = "none";
        };
    };
};