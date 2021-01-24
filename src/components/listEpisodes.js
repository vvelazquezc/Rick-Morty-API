export const listEpisodes = {
    name: 'listEpisodes',
    template: ({ name, air_date, url, episode }) => 
    `<article class="wrapper-grid--column">
        <p><a class="title" href="${url}">${episode.slice(-2)}. ${name}</a></p>
        <p class="date">${air_date}</p>
        <button value="${episode}" class="text">The characters</button>
    </article>`,
    render: function ($container, episode) {
        const $html = this.template(episode)
        $container.innerHTML += $html
    }
}