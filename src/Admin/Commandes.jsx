/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 28/04/2023 - 04:21:58
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
 * @description      : 
 * @Author           : belgacem
 * @Group            : 
 * @created          : 28/04/2023 - 03:57:57
 * 
 * MODIFICATION LOG
 * - Version         : 1.0.1
 * - Date            : 28/04/2023
 * - Author          : belgacem
 * - Modification    : Ajout du bouton "Dashboard" pour rediriger vers /admin
 **/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Commandes() {
    const [commandes, setCommandes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:5000/admin/listecommande')
            .then(response => {
                console.log("Commandes récupérées :", response.data);
                setCommandes(response.data);
            })
            .catch(error => {
                console.error("Erreur lors de la récupération des commandes :", error);
            });
    }, []);

    return (
        <div className="container">
            <div className="row mb-2">
                <div className="col-6">
                    <h1>Liste des commandes</h1>
                </div>

            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prix</th>
                        <th>Numéro de téléphone</th>
                        <th>Adresse</th>
                    </tr>
                </thead>
                <tbody>
                    {commandes.map(commande => (
                        <tr key={commande.id}>
                            <td>{commande.name}</td>
                            <td>{commande.price} €</td>
                            <td>{commande.numero_telephone}</td>
                            <td>{commande.adresse}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="col-6 text-end">
                <button className="btn btn-primary" onClick={() => navigate('/admin')}>Dashboard</button>
            </div>
        </div>
    );
}

export default Commandes;
