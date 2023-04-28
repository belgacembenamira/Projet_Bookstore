/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 28/04/2023 - 02:45:10
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = () => {
    
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        
        axios.get(`http://localhost:5000/utilisateurs/${params.id}`)
            .then(response => {
                setEmail(response.data.email);
                setUsername(response.data.username);
                setPassword(response.data.password);
            })
            .catch(error => {
                console.error(error);
            });
    }, [params.id]);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:5000/utilisateurs/${params.id}`, { email, username, password })
            .then(response => {
                console.log(response.data);
                navigate('/admin/user');
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div>
            <h1>Modifier un utilisateur</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email :</label>
                    <input type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="username">Nom d'utilisateur :</label>
                    <input type="text" id="username" name="username" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Mot de passe :</label>
                    <input type="password" id="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Enregistrer</button>
            </form>
        </div>
    );
};

export default UpdateUser;
