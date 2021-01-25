import { getLocation } from "../services/get-api.js"

export const listLocations = {
    name: 'listLocations',
    template: ({ name, type, dimension, id }) => 
    `<article class="wrapper-grid--column">
        <p><a class="title">${name}</a></p>
        <p class="date">Type: ${type}</p>
        <p class="date">Dimension: ${dimension}</p>
        <button value="${id}" class="text">The characters</button>
    </article>`,
    listeners: function ($container, nextPage, prevPage) {
    },
    render: function ($container, location, nextPage, prevPage) {
        const $html = this.template(location)
        $container.innerHTML += $html
        // this.listeners($container, nextPage, prevPage)
    },
    destroy: function () {
        document.querySelector('.wrapper-grid--column').remove()
    }
}