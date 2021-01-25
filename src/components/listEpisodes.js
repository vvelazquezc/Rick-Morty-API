import { navegateTo } from '../routes/index.js';
import { getCharacter } from '../services/get-api.js'
import { characterView } from '../views/character.js';


export const listEpisodes = {
    name: 'listEpisodes',
    template: ({ name, air_date, id, episode }, season) => 
    `<article class="wrapper-grid--column">
        <div class="wrapper-cover">
            <img src="assets/imgaes/${season}.jpg" alt="season01">
        </div>
        <div class="wrapper-info">
            <p><a class="title pointer">${episode.slice(-2)}. ${name}</a></p>
            <p class="date">${air_date}</p>
            <button id="${episode}" class="text characters">Watch details</button>
        </div>
    </article>`,
    render: function ($container, episode, season) {
        const $html = this.template(episode, season)
        $container.innerHTML += $html

        const $buttonCharacters = document.querySelector('.wrapper-info:last-of-type')
        console.log($buttonCharacters);
        $buttonCharacters.addEventListener('click', (e) => {
            if ( e.target.id == episode.episode ) {
                const characters = episode.id
                console.log(characters);
                // navegateTo('character', characters)
            }
        })
    }
}