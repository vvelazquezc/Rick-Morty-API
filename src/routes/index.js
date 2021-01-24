import { episodesView } from "../views/episodes.js"
import { homeView } from "../views/home.js"
import { locationView } from "../views/location.js"

let currentRoute = null
const $container = document.querySelector('.wrapper-main')

const routes = {
    home: {
        route: '/home',
        view: homeView,
    },
    episode: {
        route: '/episode',
        view: episodesView,
    },
    location: {
        route: '/location',
        view: locationView,
    }
}

function navegateTo(routeKey, param) {

    const route = routes[routeKey]

    if (!route) {
        console.error(`Route unknown: ${routeKey}`)
        return
    }
    currentRoute = route;
    route.view.render($container, param)
}

export { navegateTo }