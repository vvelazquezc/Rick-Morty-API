import { getLocation } from "../services/get-api.js"

export const locationView = {
    name: 'location',
    template: () => `
    <div id="pagination">
        <div class="next">n e x t s&nbsp;&nbsp;<span class="line"></span></div>
    </div>
    <section id="location" class="wrapper-grid wrapper-location">
    </section>`,
    render: function ($container) {
        const $html = this.template()
        $container.innerHTML = $html

        const $containerLocation = document.querySelector('.wrapper-location')
        const $pagination1 = 'https://rickandmortyapi.com/api/location?page=1'
        getLocation($containerLocation, $pagination1)

        const $paginationButton = document.querySelector('#pagination')
        const $nextnButton = document.querySelector('.next')
        const $prevButton = document.createElement("div")
        $prevButton.classList.add('prev')
        $prevButton.innerHTML = `<span class="line"></span>p r e v</div>`

        $nextnButton.addEventListener('click', () => {
            // TODO: pagination
            // this.destroy()
            $paginationButton.insertBefore($prevButton, $nextnButton)
            // console.log('lo destruyo');
            // getLocation($container, pagination)

        })
    },
    destroy: function () {
        document.querySelector('#location').remove()
    }
}