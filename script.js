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
const CharactersContainer = document.getElementById("CharactersContainer");
displayCharacters();

function displayCharacters() {
    for (const character of shrekCharacters) {
        CharactersContainer.insertAdjacentHTML("beforeend", `
              <li class="column is-3 character card">
                <img class="card-image" src="${character.imgurl}" alt="${character.name}">
                <div class="card-content">
                  <h3 class="card-header-title">${character.name}</h3>
                  <p class="content disc">${character.disc}</p>
                </div>
              </li>
            `);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', event => {
            event.stopPropagation();
            dropdown.classList.toggle('is-active');
        });
        const themeLinks = dropdown.querySelectorAll('.dropdown-item[data-theme]');
        themeLinks.forEach(link => {
            link.addEventListener('click', event => {
                event.preventDefault();
                const selectedTheme = link.dataset.theme;
                applyTheme(selectedTheme);
                saveThemeToLocalStorage(selectedTheme);
            });
        });
    });

    document.addEventListener('click', event => {
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target)) {
                dropdown.classList.remove('is-active');
            }
        });
    });

    function applyTheme(theme) {
        document.body.classList = theme;
    }

    function saveThemeToLocalStorage(theme) {
        localStorage.setItem('selectedTheme', theme);
    }

    function getSavedThemeFromLocalStorage() {
        return localStorage.getItem('selectedTheme');
    }

    const savedTheme = getSavedThemeFromLocalStorage();
    if (savedTheme) {
        applyTheme(savedTheme);
    }
});

const dropdownItems = document.querySelectorAll('.dropdown-item');

function applySelectedStyle(selectedStyle) {
    const characters = document.querySelectorAll('.character');
    characters.forEach(character => {
        character.classList.remove('everything', 'character-only', 'name-only');
        character.classList.add(selectedStyle);
    });

    // Save the selected style to local storage
    localStorage.setItem('selectedStyle', selectedStyle);
}

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        const selectedStyle = item.dataset.style;
        console.log(`Selected Style: ${selectedStyle}`);
        applySelectedStyle(selectedStyle);
    });
});

// Load the previously saved style from local storage and apply it
const savedStyle = localStorage.getItem('selectedStyle');
if (savedStyle) {
    applySelectedStyle(savedStyle);
}
