import React from 'react';
import CourseItem from './CourseItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';


const CourseTable = ({dbCourses,setDataToEdit,deleteCourse}) =>{
    return(
        <Container>
            <Row>
                <Col></Col>
                <Col>
                    <h2>tabla de cursos</h2>
                </Col>
                <Col></Col>
            </Row>
        
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>id</th>
                <th>Curso</th>
                <th>Descripcion</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {dbCourses.length === 0 ? (
                            <tr><td colSpan="4" center>Sin datos</td> </tr> 
                        ): (
                            dbCourses.map((element)=> <CourseItem key={element.id} element={element} setDataToEdit={setDataToEdit} deleteCourse={deleteCourse}/>)
                        )
                    } 
            </tbody>
        </Table>
      

        </Container>
    )
}

export default CourseTable