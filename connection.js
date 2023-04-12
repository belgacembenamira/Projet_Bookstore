/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 10/04/2023 - 01:30:05
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 10/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
// Importer les modules nécessaires
const express = require('express');
const mysql = require('mysql');

// Créer une application Express
const app = express();

// Configurer la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost', // Correction : spécifier l'adresse IP ou le nom d'hôte de la base de données
    port: 3306, // Correction : spécifier le numéro de port de la base de données
    user: 'root',
    password: '',
    database: 'bookstore'
});

// Vérifier si la connexion est établie avec succès
connection.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à la base de données : ' + err.stack);
        return;
    }
    console.log('Connexion à la base de données établie avec succès.');
});

// Parser le corps des requêtes HTTP au format JSON
app.use(express.json());

// Créer une API pour récupérer les données utilisateur
app.get('/users', (req, res) => {
    connection.query('SELECT * FROM utilisateur', (err, rows, fields) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
            res.status(500).json({ error: 'Erreur interne du serveur', message: err.message });
            return;

        }
        res.json(rows); // Correction : envoyer les données au format JSON
    });
});

// Créer une API pour enregistrer les données utilisateur
app.post('/register', (req, res) => {
    const { email, username, password } = req.body;
    if (!email || !username || !password) { // Correction : valider les données reçues
        res.status(400).json({ error: 'Données manquantes' });
        return;
    }
    const query = `INSERT INTO utilisateur (email, username, password) VALUES ('${email}', '${username}', '${password}')`;
    connection.query(query, (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
            res.status(500).json({ error: 'Erreur interne du serveur' });
            return;
        }
        res.status(201).json({ message: 'Utilisateur enregistré avec succès' }); // Correction : renvoyer une réponse avec un code 201
    });
});
/************* */
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Check if the provided email and password are valid
    connection.query(
        'SELECT * FROM utilisateur WHERE email = ? AND password = ?',
        [email, password],
        (error, results) => {
            if (error) {
                // Handle error
                res.status(500).send(error.message);
            } else if (results.length === 0) {
                // Invalid email or password
                res.status(401).send('Invalid email or password');
            } else {
                // Login successful
                res.send('Login successful!');
            }
        }
    );
});

// Démarrer le serveur sur le port 3002
app.listen(3000, () => {
    console.log('Serveur démarré ');
});
