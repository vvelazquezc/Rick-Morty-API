import { navegateTo } from "../routes/index.js"

export const homeView = {
    name: 'home',
    listeners: function () {
        const $wrapperNav = document.querySelector('.wrapper-nav')
        $wrapperNav.addEventListener('click', (e) => {
            const param = e.target.value
            navegateTo(param, param)
        })
    },
    render: function () {
        this.listeners()
    },
}

