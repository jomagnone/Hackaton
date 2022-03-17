import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import datos from '../data/courses.jsx';

function CourseList() {

    
    return (
        
        <div className="fila">
        {
            datos.length > 0 ?
            datos.map(curso => (
            
              <div className="columna" key ={curso.id} >
                 
                <CourseCard name = {curso.title} 
                      stock = {curso.stock} 
                      img = {curso.image}
                      id = {curso.id.toString()}
                      />
              </div>
             
            ) ): (<div className="progres">  cargando... </div>)
        }
        
        </div>
    
    );

}

export default CourseList;