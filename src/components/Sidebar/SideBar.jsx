import React, { useState } from 'react';
import PropTypes from 'prop-types';

import sideBar from './SideBar.module.scss';
import CategoryElem from './categoryElem/CategoryElem';



const SideBar = ( props ) => {
  const categories = [{id:'1', name: 'Nabiał', icon:'local_offer', active: true},
                      {id:'2', name: 'Prod. Zbożowe', icon:'local_offer', active: false},
                      {id:'3', name: 'Chemia', icon:'local_offer', active: false}, 
                      {id:'4', name: 'Owoce Warzywa', icon:'local_offer', active: false}, 
                      {id:'5', name: 'Mięso', icon:'local_offer', active: false}];
  const [active, setActive] = useState( '1' );

  const toggle = tab => {
    if (active !== tab) {
      setActive(tab)
    }
    console.log('FIRED')
  }

  return(

        <div className={`col-md-1 ${sideBar.sideBar}`}>
            { categories && categories.map( (category) => (
                <CategoryElem activeTab={active} key={category.id} category={category} onClickFun= {()=>{ toggle(category.id) }}/>
            ))}
        </div>

  )
};

export default SideBar;
