import '../styles/CourseDetail.css';
import Button from 'react-bootstrap/Button'
import {useEffect, useState,useContext} from 'react';
import {Link} from 'react-router-dom';

function CourseDetail ({data})  {

  
    return (
        <div className="fila">
            <div className="ImgGallery columnGalerry">
                <img className = "ImgDetail" src={data.image} />
            </div>  
            <div className="columnGalerry" >
                <div className="title" >{data.title}</div>
                <div className="description" >{data.description}</div>
                <div className="stock" ><b>Stock: </b>{data.stock}</div>
                <Link to="/myLearning"> <Button variant="success">Anotarse</Button>{''} </Link> 
                <br />
                
              
            </div>  
        </div>
    );


}

export default CourseDetail;