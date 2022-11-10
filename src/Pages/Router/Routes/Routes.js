import {  createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main';
import AllServices from '../../AllServices/AllServices';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import BookedService from '../../BookedService/BookedService';
import Home from '../../Home/Home/Home';
import Login from '../../Login/Login';
import MyReviews from '../../MyReviews/MyReviews';
import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import Services from '../../Services/Services';
import SignUp from '../../SignUp/SignUp';
const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home ></Home>
        },
        {
          path: '/banner',
          element: <Banner ></Banner>
        },
        {
          path: '/banner',
          element: <Services></Services>
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>
        },
        {
          path: '/servicedetails',
          element: <ServiceDetails></ServiceDetails>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/bookedservice',
          element: <BookedService></BookedService>
        },
        {
          path: '/myreviews',
          element: <MyReviews></MyReviews>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/logout',
          
        }

      ]
      
    }
  ])

  export default router;