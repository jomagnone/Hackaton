import '../styles/CourseDetail.css';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';

function CourseDetail ({data})  {


    return (
        <div className="fila">
            <div className="ImgGallery columnGalerry">
                <img className = "ImgDetail" src={data.img} />
            </div>  
            <div className="columnGalerry" >
                <div className="title" >{data.titulo}</div>
                <div className="description" >{data.descripcion}</div>
                <div className="stock" ><b>Stock: </b>{data.stock}</div>
                <div className="btnCourseDetail" > 
                <Link to="/myLearning"> <Button variant="success">Anotarse</Button>{''} </Link> 
                </div>
                
              
            </div>  
        </div>
    );


}

export default CourseDetail;