//importing sections of the Home page
import Header from '../Components/Header';
import Posts from '../Components/Posts';
import Sucsription from '../Components/Sucsription';
import Slider from '../Components/UI/Slider';

const Home = () => {
    return (
           <>
           <Header  />
           <Posts   />
           <Sucsription />
           <Slider />
           </>
    );
};

export default Home;