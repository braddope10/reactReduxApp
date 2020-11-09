import React, { Component } from 'react'
import { ReactPictureGrid } from 'react-picture-grid'

const data = [
    { image: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?s=1024x768', title: 'image 1', description: 'image 1'},
    { image: 'https://assets.tivolihotels.com/image/upload/q_auto,f_auto/media/minor/tivoli/images/brand_level/footer/1920x1000/thr_aboutus1_1920x1000.jpg', title: 'image 2', description: 'image 2'},
    { image: 'https://cf.bstatic.com/images/hotel/max1024x768/222/222713113.jpg', title: 'image 3', description: 'image 3'},
    { image: 'https://cf.bstatic.com/images/hotel/max1280x900/415/41568213.jpg', title: 'image 4', description: 'image 4'},
    { image: 'https://s7d2.scene7.com/is/image/ritzcarlton/RCBARCE_00387-1', title: 'image 5', description: 'image 5'},
    { image: 'https://contenthotels.amimir.com/hotels/mx/quintana_roo_r_285/tulum_c_3918/h_89671/imatges/aluna-hotel-tulum-0.jpg', title: 'image 6', description: 'image 6'},
]

export default class PictureGrid extends Component {
    render() {
        return (
            <div>
                <ReactPictureGrid data={data} showTitle gap={10} />
            </div>
        )
    }
}
