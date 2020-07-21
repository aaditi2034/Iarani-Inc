import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import { renderRoutes } from 'react-router-config';
import './assets/styles/global.scss';

function App(props) {
  return (
    <div className="App">
      <React.Fragment>
        {renderRoutes(props.route.routes)}
      </React.Fragment>
    </div>
  );
}

export default App;

App.propTypes = {
  route: PropTypes.object,
};
