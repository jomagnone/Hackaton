import Card from 'react-bootstrap/Card'
import '../styles/CourseCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { Link } from 'react-router-dom';


function CourseCard(props) {


    return (
        <div className="CardCointainer">
                <Link to = {`/course/${props.id}`}>
                <Card className="CardItem" 
                    bg='Light'
                    border="secondary">
                <Card.Header className="CardHeader">{props.name}</Card.Header>
                <Card.Img className="imgSmall"  src={props.img} />
                    <div className="textHidden"><FontAwesomeIcon icon={faEye} /></div>
                <Card.Body>
                    <Card.Text>
                    <div className="CardStock"><b>Licencias:</b> {props.stock}<br /></div>
                    
                    </Card.Text>
                </Card.Body>
                </Card>
                </Link>
        </div>
        );

}



export default CourseCard;