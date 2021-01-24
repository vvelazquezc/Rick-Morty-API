import { getLocation } from "../services/get-api.js"

export const locationView = {
    name: 'location',
    template: () => `
    <section id="location" class="wrapper-grid wrapper-location">
         <div class="pagination">n e x t l o c a t i o n s&nbsp;&nbsp;<span class="line"></span></div>
    </section>`,
    listeners: function () {

    },
    render: function ($container) {
        const $html = this.template()
        $container.innerHTML = $html

        const $containerLocation = document.querySelector('.wrapper-location')
        getLocation($containerLocation)
    },
    destroy: function () {
        document.querySelector('#location').remove()
    }
}