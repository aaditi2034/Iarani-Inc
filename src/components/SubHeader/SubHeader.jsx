import React from 'react';
import PropTypes from 'prop-types';
import './header.scss';

const SubHeader = (props) => (
  <div className='d-flex topLevelHeaderWrapper'>
    <div className={`subHeaderTextWrapper text-center ${props.subHeaderText}`}>
      {props.subHeaderText}
    </div>
  </div >
);

SubHeader.propTypes = {
  subHeaderText: PropTypes.any,
};

export default SubHeader;
