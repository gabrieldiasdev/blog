cardsJSON.map((item, index) =>{
    let cardItem = document.querySelector('.box').cloneNode(true);

    document.querySelector('.content').append(cardItem);
    
    cardItem.querySelector('.box-header-date').innerHTML = item.date;
    cardItem.querySelector('.heart-svg').setAttribute('id', item.id);
    cardItem.querySelector('.title').innerHTML = item.title;
    cardItem.querySelector('.description').innerHTML = item.description;
});


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


const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    favorites.forEach(function(favorite){
        document.getElementById(favorite).classList.add('fav');
        document.getElementById(favorite).parentNode.parentNode.setAttribute('data-tooltip', 'Desfavoritar')
    });

    document.querySelectorAll('.heart-svg').forEach(itens => {
        itens.addEventListener('click', function(e){
            const id = e.target.id,
                item = e.target,
                index = favorites.indexOf(id);
            if (!id) return;
            if (index == -1) {
                favorites.push(id);
                item.classList.add('fav');
                item.parentNode.parentNode.setAttribute('data-tooltip', 'Desfavoritar')
            } else {
                favorites.splice(index, 1);
                item.classList.remove('fav');
                item.parentNode.parentNode.setAttribute('data-tooltip', 'Favoritar')
            };
            localStorage.setItem('favorites', JSON.stringify(favorites));
        });
    });
};

handleFavorite();