import '../styles/Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
import { useEffect, useState } from 'react';
import {FetchLogin} from '../utils/Fetch';


const Login = () => {
    const [user, setUser] = useState([]);

    const loginContext= useContext(LoginContext);


    const handleSubmit = (event) => {
        event.preventDefault();
        let user = {
            legajo: event.target[0].value,
            pass: event.target[1].value
        }
        let respuesta=FetchLogin(user.legajo, user.pass)
                .then( result => {setUser(result);
                        loginContext.addLogin(result);
                        
                    }) ; 
        

        
    }

    return (

        <div className="LoginContainer" >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Legajo</Form.Label>
                    <Form.Control  placeholder="ej. u123456" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">   
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                </Form>

        </div>
            );
    }

export default  Login;
    