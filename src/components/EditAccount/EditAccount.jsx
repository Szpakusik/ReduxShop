import React from 'react';
import editAccount from './editAccount.module.scss';

const EditAccount = (props) => {

    return(
        <>
        
        <div className={`row my-5 p-5 pl-0 ${editAccount.editAccount}`}>

            <div className="row w-100 mb-5">

                <div className="text-left h1 my-3 text-dark col-md-12">
                    Zarejestruj się już teraz... <br /> i zgarnij <span className="text-success">2 darmowe dostawy</span>!
                </div>

            </div>

            <div className="row w-100">

                <div className={`col-md-5 ${editAccount.introduce}`}>
                    <div className="w-100 h-100 text-light pt-4">
                        <p className="h3">Jesteśmy</p>
                        <img src={require('./../../images/z-dowozem-text.png')} alt=""/>
                        <p className="text-dark">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam possimus explicabo illum asperiores dolore neque nam sequi inventore ex delectus mollitia ea reiciendis voluptatibus iure, ut debitis quibusdam consectetur quia?</p>
                        <p className="h3">A Ty?</p>
                    </div>
                </div>

                <div className="col-md-7">
                    <p className="h1">Przedstaw się!</p>
                </div>

            </div>

        </div>

        </>
    )

}

export default EditAccount