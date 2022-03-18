import '../styles/Login.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';


const Login = () => {
    const loginContext= useContext(LoginContext);

    const onFormSubmit = () => {
        let text = document.getElementById('formLogin');
        console.log(text);
    }


    return (

        <div className="LoginContainer" >
            <Form id = "formLogin">
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

                <Button variant="primary" type="submit" onClick={onFormSubmit()} >
                    Submit
                </Button>
                </Form>

        </div>
            );
    }

export default  Login;
    