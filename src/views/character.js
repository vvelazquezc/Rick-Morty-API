import { flipCard } from '../helpers/openCard.js'
import { getCharacter } from '../services/get-api.js'


export const characterView = {
    name: 'character',
    template: () => `
    <section id="character" class="wrapper-characters">
    </section>`,
    render: function ($container, characters) {
        const $html = this.template()
        $container.innerHTML = $html

        const $containerCharacters = document.querySelector('#character')
        console.log(characters);
        // getCharacter($containerCharacters, characters)

    },
    destroy: function () {
        document.querySelector('#character').remove()
    }
}