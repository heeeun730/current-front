import * as React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Main';
import Wireframe from './Wireframe';
import Subpage from './Subpage';

import './css/App.scss';
import './css/font.css';
import './css/reset.css';
import 'animate.css';
import './aos.scss';

const App = (props) => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/Wireframe',
      element: <Wireframe />,
    },
    {
      path: '/Subpage',
      element: <Subpage />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
