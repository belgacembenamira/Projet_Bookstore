/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 13/04/2023 - 23:23:09
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 13/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
 import {CardElement, injectStripe } from "react-stripe-elements";
//  import {CardElement } from "react-stripe-elements";
const CommandeForm = ({ handleSubmit }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const handleNameChange = (event) => setName(event.target.value);
    const handlePriceChange = (event) => setPrice(event.target.value);

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(name, price);
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="name_commande">Name commande:</label>
                <input
                    type="text"
                    id="name_commande"
                    name="name_commande"
                    value={name}
                    onChange={handleNameChange}
                />
            </div>
            <div>
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    onChange={handlePriceChange}
                />
            </div>
            <button type="submit">Checkout</button>
        </form>
    );
};

const Commande = ({ stripe }) => {
    const handleSubmit = async (name, price) => {
        try {
            const response = await fetch('/commande', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name_commande: name, price }),
            });

            const { client_secret } = await response.json();

            const result = await stripe.confirmCardPayment(client_secret, {
                payment_method: {
                    card: stripe.elements.getElement(CardElement),
                },
            });

            if (result.error) {
                console.error(result.error.message);
            } else {
                console.log(result);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <section>
                <div className="product">
                    <img
                        src="https://i.imgur.com/EHyR2nP.png"
                        alt="The cover of Stubborn Attachments"
                    />
                    <div className="description">
                        <h3>Stubborn Attachments</h3>
                        <h5>$20.00</h5>
                    </div>
                </div>
                <CommandeForm handleSubmit={handleSubmit} />
            </section>
        </div>
    );
};

export default injectStripe(Commande);
