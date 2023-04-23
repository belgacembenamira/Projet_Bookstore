/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 23/04/2023 - 20:13:27
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 23/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React from 'react';
import './offre.css';

const Offre = () => {
    return (
        <div className="container">
            <hr />
            <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="plan text-center">
                        <p className="icon bronze">
                            <i className="fa fa-tablet fa-fw"></i>
                        </p>
                        <h2 className="bronze-text">Bronze</h2>
                        <p className="bronze-text price">Acheter seul livre Reduction de 10 %</p>
                        <p>Petite Cadeux</p>
                        <p>+Book programmation js </p>
                        <p>+Book Basic C++</p>
                        {/* <a className="btn btn-pricing" href="#" target="_blank" rel="noopener noreferrer"> */}
                            {/* Order Now
                        </a> */}
                    </div>
                </div>
                <div className="col">
                    <div className="plan featured text-center">
                        <p className="icon silver">
                            <i className="fa fa-laptop fa-fw"></i>
                        </p>
                        <h2>Silver</h2>
                        <p className="price">Reduction de 20 %</p>
                        <p>Petite Cadeux</p>
                        <p>+Book programmation js </p>
                        <p>+Book Basic C++</p>
                        <p>+Book Basic Java</p>
                        {/* <a className="btn btn-pricing" href="#" target="_blank" rel="noopener noreferrer"> */}
                            {/* Order Now */}
                        {/* </a> */}
                    </div>
                </div>
                <div className="col">
                    <div className="plan text-center">
                        <p className="icon gold">
                            <i className="fa fa-desktop fa-fw"></i>
                        </p>
                        <h2 className="gold-text">Gold</h2>
                        <p className="gold-text price">Reduction 30 %</p>
                        <p>Petite Cadeux</p>
                        <p>+Book programmation js </p>
                        <p>+Book Basic C++</p>
                        <p>+Book Basic Java</p>
                        <p>+Book Basic C</p>
                        <p>+Book Basic Java 2</p>
                        {/* <a className="btn btn-pricing" href="#" target="_blank" rel="noopener noreferrer"> */}
                            {/* Order Now
                        </a> */}
                    </div>
                </div >
            </div >
        </div >
    );
};


export default Offre;
