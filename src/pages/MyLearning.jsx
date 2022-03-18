import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import "../styles/MyLearning.css";
import Button from '@material-ui/core/Button';
import data from '../data/myLearnings.jsx';



const MyLearning = () => {


    function SortArray(x, y){
        return x.curso.localeCompare(y.curso);
    }
    var learningsOrdered = data.sort(SortArray);

    const estaActiva = (estado) => {
        if (estado == "Activa" )
            return true 
        else
            return false 
    }

    return (
        
        <div className="cartContainer">
            <div className="MyLearningTitle">Mi Aprendizaje</div>
            {
            learningsOrdered.length > 0 ?
            learningsOrdered.map(curso => (
            
              <div className="learningList" key ={curso.id} >
                 <Card className="root">
                    <div className="details">
                        <img className="ImgMyLerning" src={curso.img}></img>
                        <CardContent className="content">
                        <Typography component="h5" variant="h5">
                            Curso: {curso.curso} 
                        </Typography>
                        <Typography variant="subtitle1" >
                            Fecha Asignación: {curso.fechaAsign}           
                        </Typography>
                        <Typography variant="subtitle1" color={estaActiva(curso.estado) ? "secondary" :"error"}>
                            Vigencia: {curso.vigencia}
                        </Typography>
                        <Typography component="h5" variant="h5" color={curso.licencia!="" ? "" :"primary"}>
                            Licencia: {curso.licencia!=""  ? curso.licencia  : "En espera"}
                        </Typography>
                        {curso.licencia!="" ? <Button align="right" variant="contained" color="primary">
                            Revocar Licencia
                        </Button> :""}
                        
                        </CardContent>
                        
                    </div>
                </Card>
                
              </div>
             
            ) ): (<div className="progres">  cargando... </div>)
        }
            
        </div>
  
            );
    }

export default  MyLearning;
    