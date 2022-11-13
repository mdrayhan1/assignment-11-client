import {  createBrowserRouter } from 'react-router-dom';
import Main from '../../../Layout/Main';
import AllServices from '../../AllServices/AllServices';
import Banner from '../../Banner/Banner';
import Blogs from '../../Blogs/Blogs';
import BookedService from '../../BookedService/BookedService';
import Home from '../../Home/Home/Home';
import Login from '../../Login/Login';
import MyReviews from '../../MyReviews/MyReviews';
import Review from '../../Review/Review';
import ServiceDetails from '../../ServiceDetails/ServiceDetails';
import Services from '../../Services/Services';
import SignUp from '../../SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
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
          path: '/services',
          element: <Services></Services>
        },
        {
          path: '/allservices',
          element: <AllServices></AllServices>
        },
        {
          path: "/services/:id",
          loader: ({ params }) =>
            fetch(
              `https://web-server-cyan.vercel.app/services/${params.id}`
            ),
          element: <ServiceDetails></ServiceDetails>,
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
          element: <PrivateRoute><BookedService></BookedService></PrivateRoute>
        },
        {
          path: '/myreviews',
          element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
        },
        {
          path: '/addreview',
          element: <PrivateRoute><Review></Review></PrivateRoute>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        }
        
      ]
      
    }
  ])

  export default router;