import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1// optional, default to 1.
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
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={true}
      responsive={responsive}
      // ssr={true} // means to render carousel on server-side.
      infinite={true}
      // autoPlay={this.props.deviceType !== "mobile" ? true : false}
      autoPlaySpeed={3000}
      autoPlay={true}
      keyBoardControl={true}
      // customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <img style={{ height: '150px', width: '100%' }} src="https://static.vecteezy.com/system/resources/thumbnails/006/532/742/small_2x/flash-sale-banner-illustration-template-design-of-special-offer-discount-for-media-promotion-and-social-media-post-free-vector.jpg" />
      </div>
      <div>
        <img style={{ height: '150px', width: '100%' }} src="https://static.vecteezy.com/system/resources/previews/011/320/988/non_2x/big-sale-banner-design-with-podium-gradient-background-social-media-post-product-advertisement-design-special-discount-design-vector.jpg" />
      </div>
      <div>
        <img style={{ height: '150px', width: '100%' }} src="https://t3.ftcdn.net/jpg/09/62/32/42/360_F_962324274_f6MDmcbHNztTs2IcnXKJo4wB5Oi5Cm80.jpg" />
      </div>
    </Carousel>
  )
}

export default Slider