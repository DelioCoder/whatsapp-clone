import React, { useRef } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';


export default function LoginScreen({ onIdSubmit }) {

    const idRef = useRef();

    const handleSubmit = (e) =>{
        e.preventDefault();

        onIdSubmit(idRef.current.value);
    }

    const createNewId = () => {
        onIdSubmit(uuidV4());
    }


    return (
        <Container className="d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}} >
            <Form className="border border-4 w-50" onSubmit={handleSubmit} >
                <div className="p-4">
                    <div className="mb-2">
                        <Form.Control type="text" ref={idRef} className="form-control" placeholder="Ingrese su ID" />
                    </div>
                    <Button className="btn btn-primary me-2" >
                        Ingresar
                    </Button>
                    <Button 
                        className="btn btn-secondary"
                        onClick={createNewId}
                    >
                        Crear un nuevo Id
                    </Button>
                </div>
            </Form>  
        </Container>
    )
}
