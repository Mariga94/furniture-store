import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Slider.css'
interface ImageSliderProps {
  images?: string[];
}
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  return (
    <Carousel showArrows={false} className="carousel">
      {images?.map((image: string, index:number) => (
        <div className="carousel-image_container">
          <img src={image} alt="" key={index}/>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
