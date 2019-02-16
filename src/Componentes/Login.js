import React from 'react';
import {Col,Button,Form, FormGroup,Label,Input,FormText} from 'reactstrap';

export default class LoginForm extends React.Component{
    render(){
        return(
            
            <Form>
                <FormGroup row>
                    <Label for="Nombre"sm={2}>Nombre</Label>
                    <Col sm={2}>
                        <Input type="nombre" name="nombre" id="nombre" placeholder="Ingrese su nombre"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Apellido"sm={2}>Apellido</Label>
                    <Col sm={2}>
                        <Input type="apellido" name="apellido" id="apellido" placeholder="Ingrese su Apellido"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Correo"sm={2}>Correo</Label>
                    <Col sm={2}>
                        <Input type="correo" name="correo" id="correo" placeholder="Ingrese su Correo"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Password"sm={2}>Contraseña</Label>
                    <Col sm={2}>
                        <Input type="password" name="password" id="password" placeholder="************"/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="confirm password"sm={2}>Confirmar Contraseña</Label>
                    <Col sm={2}>
                        <Input type="password" name="password" id="password" placeholder="************"/>
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{size:10, offset:0}}>
                        <Button>Confirmar</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

