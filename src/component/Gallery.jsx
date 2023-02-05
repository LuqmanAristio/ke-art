import "../style/galleryHome.css"
import { ImageSlider } from "../component/ImageSlider"

export const Gallery = () =>{
    return(
        <div className="homeGallery">
            <hr />
            <h1 className="fontBold">Our Latest Project</h1>
            <p className="textGallery">We already build so many house in Bali since 2010. Our project was spread around Bali, these are some of our latest projects that you might like</p>
            <ImageSlider/>
        </div>
    )
}