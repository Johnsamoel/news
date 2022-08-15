// setting css to default values.
import CssBaseline from '@mui/material/CssBaseline';

// importing routing utilities from React. 
import  {lazy , Suspense} from 'react';
import { BrowserRouter , Routes , Route } from 'react-router-dom';

//importing some components
import Loader from '../Components/UI/Loader';
import Navbar from '../Components/UI/Navbar';
import Footer from '../Components/UI/Footer';

//consuming context in whole app.
import { PostsContextProvider  } from '../Context/PostsContext';
import { AuthContextProvider } from '../Context/AuthContext';

// implementing lazy loading to optmize the performance of initial loading.
const Home = lazy(() => import('../Pages/Home'));
const Login = lazy(() => import('../Pages/Login'));
const Register = lazy(() => import('../Pages/Register'));
const NotFound = lazy(() => import('../Pages/NotFound'));


function App() {
  return (
    <AuthContextProvider>
    <PostsContextProvider>
    <BrowserRouter >
    <CssBaseline />
    <Suspense fallback={<Loader />}>
    <Navbar />
    <Routes>
      <Route path='/'  element={ <Home /> } />
      <Route path='/home'  element={ <Home /> } />
      <Route path='/login' element={ <Login /> } />
      <Route path='/register' element={<Register />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
    </Suspense>
    </BrowserRouter>
    </PostsContextProvider>
    </AuthContextProvider>
  );
}

export default App;
