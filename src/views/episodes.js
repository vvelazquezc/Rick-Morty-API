import { getEpisodesBySeason } from "../services/get-api.js";

export const episodesView = {
    name: 'episodes',
    template: () => `
    <section id="episodes">
        <select class="wrapper-seasson">
            <option value="S01">Season 1</option>
            <option value="S02">Season 2</option>
            <option value="S03">Season 3</option>
            <option value="S04">Season 4</option>
        </select>
        <div class="wrapper-grid wrapper-episodes">
        </div>
    </section>`,
    render: function ($container) {
        const $html = this.template()
        $container.innerHTML = $html

        const $containerEpisode = document.querySelector('.wrapper-episodes')
        const $seasonSelect = document.querySelector('.wrapper-seasson')
        let seasonCurrent = 'S01'
        getEpisodesBySeason($containerEpisode, seasonCurrent)

        $seasonSelect.addEventListener('change', (e) => {
            e.preventDefault()
            $containerEpisode.innerHTML = ''
            seasonCurrent = e.target.value
            getEpisodesBySeason($containerEpisode, seasonCurrent)
        })
    },
    destroy: function () {
        document.querySelector('#episodes').remove()
    }
}