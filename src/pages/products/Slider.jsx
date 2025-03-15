import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../common/Loader';
import apiReq from '../../utils/axiosInstance';
import { Box } from '@mui/material';

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
    queryKey: [''],
    queryFn: () => apiReq.get('/')
  })

  // if (isLoading) {
  //   return <Loader />;
  // }

  // if (data?.data?.length === 0) {
  //   return null;
  // }

  return (
    <Box my={6} >
      <Carousel
        swipeable={true}
        centerMode
        draggable={true}
        showDots={false}
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

        <img style={{ height: '100px', width: '200x' }} src='/SADIA TRADE LOGO.png' />

      </Carousel>
    </Box>
  )
}

export default Slider;