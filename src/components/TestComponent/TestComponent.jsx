import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'gatsby';
import SideBar from '../Sidebar/SideBar';
import MainContent from '../MainContent/MainContent';



const TestComponent = ( props ) => {
  
  return(

    <div className="mainContainer">
      <div className="row w-100 p-0">
        <SideBar/>
        <MainContent className="col-md-11" />
      </div>
    </div>

  )
};

TestComponent.propTypes = {

};
TestComponent.defaultProps = {

};

export default TestComponent;
