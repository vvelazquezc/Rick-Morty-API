import { characterView } from "../views/character.js"

export const listCharacters = {
    name: 'listCharacters',
    template: ({ name, image, species, status, gender, origin }) => 
        `<div class="card-wrapper">
            <div class="card-1 card-object card-object-hf"><a class="face front" style="background: #222 url('${image}') 90% 35%; background-size: 115%;" href="#">
                <div class="title-wrapper">
                    <div class="title">${name}</div>
                    <div class="subtitle">${species} - ${status}</div>
                </div></a><a class="face back" href="#">
                <div class="img-wrapper" style="background: transparent url('${image}') 70% 45%; background-size: 160%;">
                    <div class="avatar" style="background: transparent url('${image}') 40% 20%; background-size: 130% 130%;"></div>
                </div>
                <div class="info-wrapper">
                    <div class="info-title">${name}</div>
                    <ul class="info-content">
                        <li class="info-content-item">Gender <span>${gender}</span></li>
                        <li class="info-content-item">Origin <span>${origin.name}</span></li>
                        <li class="info-content-item">Episodes <span>Show here</span></li>
                    </ul>
            </div></a></div>
        </div>`,
    render: function (container, character) {
        const $html = this.template(character)
        container.innerHTML += $html
    }
}