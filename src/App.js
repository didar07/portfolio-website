import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import SnapDetails from './Components/SnapDetails/SnapDetails';
import EduDetails from './Components/EduDetails/EduDetails';
import CarsDetails from './Components/CarsDetails/CarsDetails';
import QuizDetails from './Components/QuizDetails/QuizDetails';
import OneManDetails from './Components/OneManDetails/OneManDetails';
import GeniusDetails from './Components/GeniusDetails/GeniusDetails';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/resume',
          element: <Resume></Resume>
        },
        {
          path: '/snapdetails',
          element: <SnapDetails></SnapDetails>
        },
        {
          path: '/edudetails',
          element: <EduDetails></EduDetails>
        },
        {
          path: '/carsdetails',
          element: <CarsDetails></CarsDetails>
        },
        {
          path: '/quizdetails',
          element: <QuizDetails></QuizDetails>
        },
        {
          path: '/onemandetails',
          element: <OneManDetails></OneManDetails>
        },
        {
          path: '/geniusdetails',
          element: <GeniusDetails></GeniusDetails>
        }
      ]
    }
  ])
  return (
    <div className='max-w-screen-xl mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
