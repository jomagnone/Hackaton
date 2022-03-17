
import CourseDetail from '../components/CourseDetail';
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams} from 'react-router-dom';

import datos from '../data/courses.jsx';


const  DetailCourse = () => {

  const {idCourse} = useParams();
    return (
      <>
        <div className="DetailPoroductsContainter" >
        {(datos) ? <CourseDetail data = {datos[idCourse]} />
        : <div className="fila progres">  <CircularProgress color="primary" /> </div>
         }

        </div>
      </>
    );
  }

  
  export default DetailCourse;

