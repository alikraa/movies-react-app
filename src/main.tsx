import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { store } from './store/store';
import { FilmDetails } from './components/film-list/film-details';
import { AppContent } from './components/app-content/app-content';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <AppContent />,
      },

      {
        path: '/more/:filmId',
        element: <FilmDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
