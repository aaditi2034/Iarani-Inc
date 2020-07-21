import React from 'react';
import PropTypes from 'prop-types';
import { renderRoutes } from 'react-router-config';
import Header from '../HeaderLayout';

const ViewLayout = (props) => {
  const { route } = props;
  return (
    <>
      <Header />
      <div className="LayoutContent mt-24">
        {renderRoutes(route.routes)}
      </div>
    </>
  );
};

export default ViewLayout;

ViewLayout.propTypes = {
  route: PropTypes.object,
  history: PropTypes.object,
};
