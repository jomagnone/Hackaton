
import CourseDetail from '../components/CourseDetail';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams} from 'react-router-dom';

import datos from '../data/courses.jsx';
import {FetchCourse} from '../utils/Fetch';


const  DetailCourse = () => {
  
  
  const {idCourse} = useParams();
  const [curso, setCurso] = useState({});

  useEffect(() => {

    FetchCourse(idCourse)
          .then( result => {setCurso(result[0]);})
          .catch(error => console.log(error)) ; 

    }, []);


    return (
      <>
        <div className="DetailPoroductsContainter" >
        {(curso) ? <CourseDetail data = {curso}/>
        : <div className="fila progres">  <CircularProgress color="primary" /> </div>
         }

        </div>
      </>
    );
  }

  
  export default DetailCourse;

