export const listEpisodes = {
    name: 'listEpisodes',
    template: ({ name, air_date, url, episode }) => 
    `<article id="episodes" class="wrapper-episodes--episode">
        <p><a class="title" href="${url}">${episode.slice(-2)}. ${name}</a></p>
        <p class="date">${air_date}</p>
        <button value="${episode}" class="text pointer">The characters</button>
    </article>`,
    render: function ($container, episode) {
        const $html = this.template(episode)
        $container.innerHTML = $html
    }
}