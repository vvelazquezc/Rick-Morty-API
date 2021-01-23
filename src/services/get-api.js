import { listEpisodes } from '../components/listEpisodes.js';
import { API_BASE_URL, PAGE_LIMIT } from './config.js'

export function getEpisodesBySeason (container, season) {
    console.log(season);
    axios.get(`${API_BASE_URL}episode?episode=${season}`)
        .then((response) => {
            const episodes = response.data.results
            episodes.forEach(episode => {
                listEpisodes.render(container, episode)
            });
        })
}