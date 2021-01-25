import { listEpisodes } from '../components/listEpisodes.js';
import { listLocations } from '../components/listLocations.js';
import { listCharacters } from '../components/listCharacters.js';
import { API_BASE_URL, PAGE_LIMIT } from './config.js'

function getEpisodesBySeason (container, season) {
    axios.get(`${API_BASE_URL}episode?episode=${season}`)
        .then((response) => {
            const episodes = response.data.results
            episodes.forEach(episode => {
                listEpisodes.render(container, episode, season)
            })
        })
}

function getLocation (container, pagination) {
    const url = pagination
    axios.get(url)
        .then((response) => {
            const nextPage = response.data.info.next
            const prevPage = response.data.info.prev
            const locations = response.data.results
            locations.forEach(location => {
                listLocations.render(container, location, nextPage, prevPage)
            })
        })
}

function getCharacter (container, characters) {
    characters.forEach(character => {
        axios.get(character)
        .then((response) => {
            const character = response.data
            console.log(character);
            listCharacters.render(container, character)
        })
    })
}



export { getEpisodesBySeason, getLocation, getCharacter }
