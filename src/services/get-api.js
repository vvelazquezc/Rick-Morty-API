import { listEpisodes } from '../components/listEpisodes.js';
import { listLocations } from '../components/listLocations.js';
import { API_BASE_URL, PAGE_LIMIT } from './config.js'

function getEpisodesBySeason (container, season) {
    axios.get(`${API_BASE_URL}episode?episode=${season}`)
        .then((response) => {
            const episodes = response.data.results
            episodes.forEach(episode => {
                listEpisodes.render(container, episode)
            })
        })
}

function getLocation (container) {
    axios.get(`${API_BASE_URL}location/?page=1`)
        .then((response) => {
            const locations = response.data.results
            locations.forEach(location => {
                listLocations.render(container, location)
            })
        })
}


export { getEpisodesBySeason, getLocation }
