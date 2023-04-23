
/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 16/04/2023 - 02:13:30
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 16/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import axios from 'axios';


const Commande = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [numero_telephone, setNumerotelephone] = useState('');
    const [adresse, setAdresse] = useState('');

    // const handleSubmit = async (event) => {
    //     event.preventDefault();

    //     try {
    //         const response = await fetch('/commande', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify({
    //                 name,
    //                 price,
    //                 numerotelephone,
    //                 adresse
    //             })
    //         });

    //         const data = await response.json();
    //         console.log(data);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = axios.post('http://localhost:3000/commande', {
                name,
                price,
                numero_telephone,
                adresse
            });
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='m-5 p-5 my-10'>
            <div className="container p-5">
                <div className="card px-4">
                    <p className="h8 py-3">Commande</p>
                    <div className="row gx-3">
                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">name</p>
                                <input
                                    required
                                    type="text"
                                    placeholder="commande"
                                    id="name"
                                    value={name}
                                    className="form-control mb-3"
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Numero_telephone</p>
                                <input
                                    required
                                    type="text"
                                    placeholder="numero_telephone"
                                    id="numero_telephone"
                                    value={numero_telephone}
                                    className="form-control mb-3"
                                    onChange={(event) => setNumerotelephone(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Price</p>
                                <input
                                    required
                                    type="number"
                                    placeholder="Price"
                                    id="Price"
                                    value={price}
                                    className="form-control mb-3"
                                    onChange={(event) => setPrice(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Adresse</p>
                                <input
                                    required
                                    type="text"
                                    placeholder="Adresse"
                                    id="Adresse"
                                    value={adresse}
                                    className="form-control mb-3"
                                    onChange={(event) => setAdresse(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Card Number</p>
                                <input className="form-control mb-3" type="text" placeholder="1234 5678 ****" />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">Expiry</p>
                                <input className="form-control mb-3" type="text" placeholder="MM/YYYY" />
                            </div>
                        </div>

                        <div className="col-6">
                            <div className="d-flex flex-column">
                                <p className="text mb-1">CVV/CVC</p>
                                <input className="form-control mb-3 pt-2" type="password" placeholder="***" />
                            </div>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                            <form onSubmit={handleSubmit}>
                                <button type="submit" className="m-5 p-10">
                                    Payer

                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
}
export default Commande;