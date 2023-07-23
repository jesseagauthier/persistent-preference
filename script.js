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
displayCharacters()
function displayCharacters() {
    for (const characters of shrekCharacters) {
        CharactersContainer.insertAdjacentHTML("beforeend", `
             <li class="character card column m-2 is-5 is-flex is-flex-direction-column is-justify-content-end">
				<img class="card-image mx-auto image is-full" src="${characters.imgurl}" alt="${characters.name}">
				<div class="card-content">
				    <h3 class="card-header-title is-size-3">${characters.name}</h3>
					<p class="content disc">${characters.disc}</p>
				</div>
			</li>
        `)
    }
}
