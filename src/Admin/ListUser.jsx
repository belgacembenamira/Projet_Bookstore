/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 28/04/2023 - 02:18:24
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
/**
    * @description      : Affiche les utilisateurs dans un tableau Bootstrap. 
    *                      (modification du code initial fourni)
    * @version          : 1.0.0
    * @date             : 28/04/2023
    * @modification     : None
**/

import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const ListUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/utilisateurs")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Users List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.PASSWORD}</td>
              <td>
                {/* /********** KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK */}
                <Link to={`/admin/user/modifier/${user.id}`}>
                  <Button variant="success">Modifier</Button>
                </Link>
                <Link to={`/admin/user/supprimer/${user.id}`}>
                  <Button variant="success">Delete</Button>
                </Link>

              </td>

            </tr>
          ))}
        </tbody>
      </table>
      <Link to={`/admin/usercreate`}>
        <Button variant="success">Create</Button>
      </Link>
    </div>
  );
};

export default ListUser;
