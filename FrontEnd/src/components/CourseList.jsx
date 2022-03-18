import CourseCard from '../components/CourseCard'
import { useEffect, useState } from 'react';
import datos from '../data/courses.jsx';
import {FetchCourseList} from '../utils/Fetch';


function CourseList() {

  const [listaCursos, setListaCursos] = useState([]);

  useEffect(() => {

      FetchCourseList()
          .then( result => {setListaCursos(result);
                console.log(result);})
          .catch(error => console.log(error)) ; 

    }, []);



 

    return (
        
        <div className="fila">
        {
            listaCursos.length > 0 ?
            listaCursos.map(curso => (
            
              <div className="columna" key ={curso.id_curso} >
                 
                <CourseCard name = {curso.titulo} 
                      stock = {curso.stock} 
                      img = {curso.img}
                      id = {curso.id_curso.toString()}
                      />
              </div>
             
            ) ): (<div className="progres">  cargando... </div>)
        }
        
        </div>
    
    );

}

export default CourseList;