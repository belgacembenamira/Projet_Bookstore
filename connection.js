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
// Importer les modules nécessaires
const express = require('express');
const mysql = require('mysql');
const stripe = require('stripe')('sk_test_51MwFg1GRr5LN8XFFpv4lyuMd4hZRsQhBVp1xwXPMLu9GSPix42hk1KFyfeLHuZ7mxDOsSB1q4mxzHFt4ZRiF7UQm00RAuZhvJV');

const bodyParser = require("body-parser");

// Créer une application Express
const app = express();
const port = 5000
app.use(express.json())
const cors = require('cors');
app.use(bodyParser.json());

app.use(cors({
    origin: 'http://localhost:3000'
}));

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

// // Créer une API pour récupérer les données utilisateur
// app.get('/users', (req, res) => {
//     connection.query('SELECT * FROM utilisateur', (err, rows, fields) => {
//         if (err) {
//             console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
//             res.status(500).json({ error: 'Erreur interne du serveur', message: err.message });
//             return;

//         }
//         res.json(rows); // Correction : envoyer les données au format JSON
//     });
// });
app.get('/utilisateurs', (req, res) => {
    const query = 'SELECT * FROM utilisateur';
    connection.query(query, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
        res.status(500).json({ error: 'Erreur interne du serveur' });
        return;
      }
      res.status(200).json(result);
    });
  });
  
// Créer une API pour enregistrer les données utilisateur
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  if (!req.body.email || !req.body.username || !req.body.password) {
    res.status(400).json({ error: 'Données manquantes' });
    return;
  }
  const query = `INSERT INTO utilisateur (email, username, password) VALUES ('${req.body.email}', '${req.body.username}', '${req.body.password}')`;
  connection.query(query, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
      res.status(500).json({ error: 'Erreur interne du serveur' });
      return;
    }
    res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
  });
});
/************* 
 * sk_test_51MwFg1GRr5LN8XFFpv4lyuMd4hZRsQhBVp1xwXPMLu9GSPix42hk1KFyfeLHuZ7mxDOsSB1q4mxzHFt4ZRiF7UQm00RAuZhvJV
 * 
*/
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
app.put('/utilisateurs/:id', (req, res) => {
    const id = req.params.id;
    const { email, username, password } = req.body;
  
    const query = `UPDATE utilisateur SET email = '${email}', username = '${username}', password = '${password}' WHERE id = ${id}`;
  
    connection.query(query, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
        res.status(500).json({ error: 'Erreur interne du serveur' });
        return;
      }
  
      if (result.affectedRows === 0) {
        res.status(404).json({ error: `Aucun utilisateur trouvé avec l'ID ${id}` });
        return;
      }
  
      res.status(200).json({ message: 'Utilisateur modifié avec succès' });
    });
  });
  app.post('/admin/usercreate', (req, res) => {
    const { email, username, PASSWORD } = req.body;
  
    const query = `INSERT INTO utilisateur (email, username, PASSWORD) VALUES ('${email}', '${username}', '${PASSWORD}')`;
  
    connection.query(query, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
        res.status(500).json({ error: 'Erreur interne du serveur' });
        return;
      }
  
      res.status(201).json({ message: 'Utilisateur créé avec succès' });
    });
  });
  
  // Créer une API pour supprimer un utilisateur
app.delete('/utilisateurs/:id', (req, res) => {
    const id = req.params.id;
  
    const query = `DELETE FROM utilisateur WHERE id = ${id}`;
  
    connection.query(query, (err, result) => {
      if (err) {
        console.error('Erreur lors de l\'exécution de la requête : ' + err.stack);
        res.status(500).json({ error: 'Erreur interne du serveur' });
        return;
      }
  
      if (result.affectedRows === 0) {
        // L'utilisateur n'a pas été trouvé
        res.status(404).json({ message: 'Utilisateur non trouvé' });
      } else {
        // L'utilisateur a été supprimé avec succès
        res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
      }
    });
  });
  
const YOUR_DOMAIN = 'http://localhost:3000';



// Route pour créer une nouvelle commande



app.post('/commande', async (req, res) => {
    try {
        // Vérifier que les données envoyées sont valides
        if (!req.body.name || !req.body.price || !req.body.numero_telephone || !req.body.adresse) {
            throw new Error('Tous les champs sont obligatoires.');
        }

        // Créer une session de paiement avec Stripe
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [{
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: req.body.name,
                        description: req.body.description,
                    },
                    unit_amount: req.body.price * 100,
                },
                quantity: 1,
            }],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success`,
            cancel_url: `${YOUR_DOMAIN}/canceled`,
        });

        // Insérer les détails de la commande dans la base de données
        const sql = "INSERT INTO commande (name, price, numero_telephone, adresse) VALUES (?, ?, ?, ?)";
        const values = [req.body.name, req.body.price, req.body.numero_telephone, req.body.adresse];
        connection.query(sql, values, function (err, result) {
            if (err) {
                console.error("Erreur lors de l'insertion de la commande :", err);
                throw err;
            }
            console.log("Commande insérée dans la base de données :", result);
        });

        // Retourner le client_secret de la session de paiement Stripe
        res.json({ client_secret: session.client_secret });
    } catch (err) {
        console.error(err);
        if (err.type === 'StripeCardError') {
            // Le paiement a échoué en raison d'une carte invalide
            res.status(400).json({ error: err.message });
        } else {
            // Une erreur s'est produite côté serveur
            console.error("Erreur côté serveur :", err);
            res.status(500).json({ error: 'Une erreur s\'est produite lors du traitement du paiement', message: err.message });
        }
    }
});

app.get('/admin/listecommande', (req, res) => {
    const sql = "SELECT * FROM commande";
    connection.query(sql, function (err, result) {
      if (err) {
        console.error("Erreur lors de la récupération des commandes :", err);
        res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des commandes' });
      } else {
        console.log("Commandes récupérées de la base de données :", result);
        res.status(200).json(result);
      }
    });
  });
  






// Démarrer le serveur sur le port 3002
app.listen(port, () => {
    console.log('Serveur démarré ' + port);
});
// Fermer la connexion à la base de données lorsque l'application est arrêtée
// process.on('SIGINT', () => {
//     connection.end();
//     console.log('Connexion à la base de données fermée avec succès.');
//     process.exit(0);
//     });