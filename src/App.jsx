import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import RestaurantsPage from './pages/RestaurantsPage.jsx';
import RestaurantsDetailsPage from './pages/RestaurantsDetailsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import EventsPage from './pages/EventsPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Layout from './components/Layout.jsx';

import './App.css';


const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/restaurants',
        element: <RestaurantsPage />
      },
      {
        path: '/restaurants/:id', 
        element: <RestaurantsDetailsPage />
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/events',
        element: <EventsPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

