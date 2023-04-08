import React from 'react';
import Button from 'react-bootstrap/esm/Button';

const CourseItem = ({element, setDataToEdit, deleteCourse}) =>{
    let {id}= element;
    return(
      <>
        <tr>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.description}</td>
            <td>
                <Button variant="primary" onClick={()=> setDataToEdit(element)} >Editar</Button>{' '}
                <Button variant="danger" onClick={()=> deleteCourse(id)} >Borrar</Button>{' '}   
            </td>
            
        </tr>
      </>
    )
}

export default CourseItem
