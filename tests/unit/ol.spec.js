import { expect } from 'chai'
import View from 'ol/View'
import DaumImg from '@/ol-daum'

describe('ol', () => {
    it('view', () => {
        const view = new View({
            center: [0, 0],
            zoom: 1
        })
        expect(view.getZoom()).to.equal(1)
    })

    it('DaumImg', () => {
        const daumImg = new DaumImg({})
        expect(daumImg.tileUrlFunction([0, 1, 2])).to.equal('http://map1.daumcdn.net/map_2d/1807hsm/L14/2/1.png')
    })
})