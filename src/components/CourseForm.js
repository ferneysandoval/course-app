import React, { useEffect, useState } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const intialForm = {
    id: null,
    name:"",
    description:""
}

const CourseForm = ({createCourse,updateCourse,dataToEdit,setDataToEdit}) =>{
    const [form,setForm] = useState(intialForm)

    useEffect(()=>{

        if(dataToEdit){
            setForm(dataToEdit);
        }else{
            setForm(intialForm);
        }
    },[dataToEdit])

    const handleChange = (e) =>{
        setForm({
        ...form,
        [e.target.name]:e.target.value,
        });

    }
    const handleSubmit = (e) =>{
        e.preventDefault();

        if(!form.name  || !form.description ){
            alert("vacio");
            return;
        }
    if(form.id === null){
        createCourse(form);
    }else{
        updateCourse(form);
    }
        handleReset();
    };
    const handleReset = (e) =>{
        setForm(intialForm);
        setDataToEdit(null);

    }

    return(
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <Card style={{ width: '65rem' }}>
                    <Card.Header>
                        <Row>
                            <Col></Col>
                            <Col> <h2>{dataToEdit ? "EDITAR CURSO": "AGREGAR CURSO"}</h2> </Col>
                            <Col></Col>
                        </Row>
                        
                    </Card.Header>
                    <Card.Body>
                        <form>
                            <Form.Group className="mb-3" controlId="courseName"  >
                                <Form.Label>Nombre del curso</Form.Label>
                                < Form.Control input type='text' name='name'  placeholder="Ingrese nombre del curso"onChange={handleChange} value={form.name}/>
                            </Form.Group>
                            
                            <Form.Group className="mb-3" controlId="courseDescription"  >
                                <Form.Label>Descripcion del curso</Form.Label>
                                <Form.Control input type='text' name='description' placeholder="Ingrese la descripcion del curso"onChange={handleChange} value={form.description} />
                            </Form.Group>
                            <Button variant="success" type="submit" onClick={handleSubmit}> 
                                Enviar
                            </Button> {' '}
                            <div className="vr" />
                            <Button variant="primary" type="submit"  onClick={handleReset}>
                                limpiar
                            </Button>
                        </form>
                    </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
            </Row>

        </Container>
    )
}

export default CourseForm