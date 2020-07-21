import App from '../App';
import Notes from '../views/Notes';
import endpoints from './endpoints';
import ViewLayout from '../Layouts/ViewLayout';

export default [
  {
    component: App,
    routes: [
      {
        path: endpoints.default,
        component: ViewLayout,
        routes: [
          {
            path: endpoints.default,
            exact: true,
            component: Notes
          },
        ],
      },
    ]
  }
];
