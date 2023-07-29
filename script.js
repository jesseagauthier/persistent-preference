const shrekCharacters = [
    {
        name: "Shrek",
        imgurl: "https://static.wikia.nocookie.net/shrek/images/9/9b/GoodShrekImage.png",
        disc: "Shrek is an ogre who lives in a swamp and values his solitude, but he embarks on a journey to rescue Princess Fiona and ultimately falls in love with her."
    },
    {
        name: "Fiona",
        imgurl: "https://static.wikia.nocookie.net/shrek/images/5/5a/Fiona_Ogre_Forever_After_Portrait.png",
        disc: "Princess Fiona is initially cursed to transform into an ogre at night, but she eventually embraces her true self and marries Shrek."
    },
    {
        name: "Donkey",
        imgurl: "https://static.wikia.nocookie.net/shrek/images/b/b4/Donkey_%28Shrek_2%29.png",
        disc: "Donkey is a talkative and loyal companion to Shrek, providing comic relief and unwavering support."
    },
    {
        name: "Prince Charming",
        imgurl: "https://static.wikia.nocookie.net/shrek/images/0/0d/Prince_Charming_transparent.png",
        disc: "Dragon is a gigantic and ferocious beast, but she has a soft spot for Donkey and later falls in love with him."
    },
    {
        name: "Lord Farquaad",
        imgurl: "https://static.wikia.nocookie.net/shrek/images/2/2d/Farquaad_portrait.png",
        disc: "Lord Farquaad is a ruthless ruler who wants to marry Princess Fiona to become king, even though he's not exactly the heroic type."
    },
    {
        name: "Puss in Boots",
        imgurl: "https://static.wikia.nocookie.net/shrek/images/6/61/GingerbreadManTransparent.png",
        disc: "Puss in Boots is a skilled and charming cat who befriends Shrek and becomes an ally in their adventures."
    },
];
displayCharacters();


function displayCharacters() {
    const CharactersContainer = document.getElementById("CharactersContainer");
    for (const character of shrekCharacters) {
        CharactersContainer.insertAdjacentHTML("beforeend", `
                    <li class="column is-3 character">
                        <img class="card-image" src="${character.imgurl}" alt="${character.name}">
                        <div class="card-content">
                            <h3 class="card-header-title">${character.name}</h3>
                            <p class="content disc">${character.disc}</p>
                        </div>
                    </li>
                `);
    }
}


if (localStorage.getItem("selectedStyle") === null) {
    localStorage.setItem('selectedStyle', 'everything');
    // console.log("No Default style, Setting to everything")
    let savedStyle = localStorage.getItem('selectedStyle');
    applySelectedStyle(savedStyle);
} if (localStorage.getItem("selectedStyle") == undefined) {
    localStorage.setItem('selectedStyle', 'everything');
    // console.log("No Default style, Setting to everything")
    let savedStyle = localStorage.getItem('selectedStyle');
    applySelectedStyle(savedStyle);
} else {
    let savedStyle = localStorage.getItem('selectedStyle');
    applySelectedStyle(savedStyle);
    // console.log("Style is set to " + savedStyle)
}

if (localStorage.getItem("selectedTheme") === null) {
    // console.log("No Default theme, Setting to light")
    localStorage.setItem('selectedTheme', 'light');
    let theme = localStorage.getItem('selectedTheme');
    applyTheme(theme)
} if (localStorage.getItem("selectedTheme") == undefined) {
    // console.log("No Default theme, Setting to light")
    localStorage.setItem('selectedTheme', 'light');
    let theme = localStorage.getItem('selectedTheme');
    applyTheme(theme)
} else {
    let theme = localStorage.getItem('selectedTheme');
    applyTheme(theme)
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', event => {
        dropdown.classList.toggle('is-active');
    });

    const themeLinks = dropdown.querySelectorAll('.dropdown-item[data-theme]');
    themeLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const selectedTheme = link.dataset.theme;
            localStorage.setItem('selectedTheme', selectedTheme);
            let theme = localStorage.getItem('selectedTheme');
            applyTheme(theme)
        });
    });
});

function applyTheme(theme) {
    document.body.classList = theme;
}



const dropdownItems = document.querySelectorAll('.characterdrop');


// Add click event listeners to each dropdown item
dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        // Get the selected style from the data-style attribute
        const selectedStyle = item.dataset.style;
        // Apply the selected style to the character cards
        applySelectedStyle(selectedStyle);
        localStorage.setItem('selectedStyle', selectedStyle);
    });
});



// Function to apply the selected style to the character cards
function applySelectedStyle(savedStyle) {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {

        if (character.classList.contains('everything')) {
            character.classList.remove('everything');
            character.classList.add(savedStyle);
        }
        if (character.classList.contains('character-only')) {
            character.classList.remove('character-only');
            character.classList.add(savedStyle);
        }
        if (character.classList.contains('name-only')) {
            character.classList.remove('name-only');
            character.classList.add(savedStyle);
        }
        else {
            character.classList.add(savedStyle);
        }
    });
}
