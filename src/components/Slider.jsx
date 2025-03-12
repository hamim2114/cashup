import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import apiReq from '../utils/axiosInstance';
import { useQuery } from '@tanstack/react-query';
import Loader from '../common/Loader';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Slider = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['create-slider'],
    queryFn: () => apiReq.get('/create-slider/')
  })

  if (isLoading) {
    return <Loader />;
  }

  if (data?.data?.length === 0) {
    return null;
  }

  return (
    <Carousel
      className='mb-10'
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      infinite={true}
      autoPlaySpeed={3000}
      autoPlay={true}
      keyBoardControl={true}
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {
        data?.data?.map((item, index) => (
          <div key={index}>
            <img style={{ height: '150px', width: '100%' }} src={item.image} alt={`slide-${index}`} />
          </div>
        ))
      }
    </Carousel>
  )
}

export default Slider;