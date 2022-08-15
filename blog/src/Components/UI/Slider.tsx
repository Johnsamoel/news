// import mui components
import { Box } from '@mui/system';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SliderText from './SliderText';
import SliderPost from './SliderPost';

// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//importing react Hooks
import { useEffect , useContext } from 'react';

//importing context to fetch posts
import { PostsContext } from '../../Context/PostsContext';


const Slider = () => {

  const {posts , FetchAllPosts} = useContext(PostsContext);

  useEffect(() => { FetchAllPosts() } , [FetchAllPosts])


    return (
        <Box  sx={{
            backgroundImage: `url(http://jevelin.shufflehound.com/personal-blog/wp-content/uploads/sites/28/2019/09/bg-par2.jpg?id=277)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            boxSizing:'border-box',
            backgroundAttachment:'fixed',
            backgroundPosition:'center center',
            height:"120vh",
            paddingTop:'2rem',
            paddingBottom:'2rem',
            marginTop:'2rem'
          }}>


        <SliderText />
      
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >

        {posts?.map(({_id , postImage , description , title }) =>  <SwiperSlide key={_id}><SliderPost  src={postImage} data={{ head:{title} , desc:{description} }}/></SwiperSlide> )}
       

      </Swiper>
      
     
        </Box>
    );
};

export default Slider;