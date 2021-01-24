
export const listLocations = {
    name: 'listLocations',
    template: ({ name, type, dimension, id }) => 
    `<article class="wrapper-grid--column">
        <p><a class="title">${name}</a></p>
        <p class="date">Type: ${type}</p>
        <p class="date">Dimension: ${dimension}</p>
        <button value="${id}" class="text">The characters</button>
    </article>`,
    render: function ($container, location) {
        const $html = this.template(location)
        $container.innerHTML += $html
    }
}