/**
    * @description      : 
    * @author           : belgacem
    * @group            : 
    * @created          : 28/04/2023 - 03:08:12
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : 28/04/2023
    * - Author          : belgacem
    * - Modification    : 
**/
import { useState } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from "react-router-dom";

const DeleteUser = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/utilisateurs/${id}`)
            .then(() => {
                navigate("/admin/user/");
            })
            .catch((error) => {
                setError(error);
            });
    };

    return (
        <div>
            <strong> Delte User</strong>
            {error && <div className="alert alert-danger">{error.message}</div>}
            <Button variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
    );
};

export default DeleteUser;
