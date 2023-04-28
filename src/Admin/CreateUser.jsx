/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 28/04/2023 - 05:01:22
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import React, { useState } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateUser() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [PASSWORD, setPASSWORD] = useState('');
  const [alertMessage, setAlertMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = { email, username, PASSWORD };

    axios.post('http://localhost:5000/admin/usercreate', userData)
      .then(response => {
        setAlertMessage(`Utilisateur créé : ${response.data.message}`);
        setEmail('');
        setUsername('');
        setPASSWORD('');
      })
      .catch(error => {
        console.error("Erreur lors de la création de l'utilisateur :", error);
      });
  };

  return (
    <div className="container">
      <h1>Création d'un utilisateur</h1>
      {alertMessage && <Alert key={alertMessage} variant="success">{alertMessage}</Alert>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input type="email" className="form-control" id="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur :</label>
          <input type="text" className="form-control" id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe :</label>
          <input type="password" className="form-control" id="password" value={PASSWORD} onChange={e => setPASSWORD(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Créer</button>
      </form>
      <Link to="/admin/user">Retour à la liste des utilisateurs</Link>
    </div>
  );
}

export default CreateUser;




