import React,{useState} from 'react';
import CourseTable from './CourseTable';
import CourseForm from './CourseForm';

const initialCourses =[
    { id:4580921866723, name:"programacion 1", description:"Este es el primer curso de programacion" },
    { id:4780921866723, name:"programacion 2", description:"Este es el segundo curso de programacion" },
    { id:1280921866723, name:"Matematicas", description:"Este es un curso de matematicas" }
  ];

const CourseList = () =>{
    const [dbCourses,setdbCourses] = useState(initialCourses);
    const [dataToEdit,setDataToEdit] = useState(null);

    const createCourse = (data) => {
        data.id =Date.now();
        console.log(initialCourses)
        setdbCourses([...dbCourses,data]);

    }
    const updateCourse = (data) => {
        let newData = dbCourses.map(element => element.id ===data.id ? data:element);
        setdbCourses(newData);

    }
    const deleteCourse = (id) => {
        let isDelete = window.confirm("Esta seguro de borrar el curso ");
        console.log(isDelete);

        if (isDelete) {
            let newData =dbCourses.filter(element => element.id !== id);
            setdbCourses(newData);
        } else {
            return;            
        }
    }

    return(
        <>
        <h2>Lista de cursos</h2>
       { /* Componente formulario
        Propiedades que se le envian al formulario para saber si es Crear o Editar*/}
        <CourseForm createCourse = {createCourse} updateCourse ={updateCourse} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit} />
        {/* Componente tabla*/}
        <CourseTable dbCourses={dbCourses} setDataToEdit={setDataToEdit} deleteCourse={deleteCourse}/>
   
        </>
    )
}

export default CourseList