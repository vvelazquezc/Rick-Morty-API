import { episodesView } from "../views/episodes.js"
import { homeView } from "../views/home.js"

let currentRoute = null
const $container = document.querySelector('.wrapper-main')

const routes = {
    home: {
        route: '/',
        view: homeView,
    },
    episode: {
        route: '/episode',
        view: episodesView,
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