import * as React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {createTheme,  useTheme } from '@material-ui/core/styles';
import "../styles/MyLearning.css";
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';

const MyLearning = () => {
   const myLearnings = [
        {id: 1, usuario: 'u176848', curso: 'Javascript', img: require('../media/python.jpg'),licencia:'LKOK9P51',fechaAsign: '10/03/2022', vigencia: '10/06/2022', estado: 'Activa' },
        {id: 2, usuario: 'u176848', curso: 'NodeJS',img: require('../media/db.jpg'), licencia:'JPTR251D',fechaAsign: '15/01/2022', vigencia: '20/02/2022', estado: 'VENCIDA' },
        {id: 3, usuario: 'u176848', curso: 'AWS',img: require('../media/react.jpg'), licencia:'',fechaAsign: '', vigencia: '', estado: '' },
    
   ]

   const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: '#11cb5f',
      },
      error:{
          main: '#f44336',
      }
    },
  });

    function SortArray(x, y){
        return x.curso.localeCompare(y.curso);
    }
    var learningsOrdered = myLearnings.sort(SortArray);

    
    const estaActiva = (estado) => {
      
        if (estado == "Activa" )
         return true 
        else
        return false 
    }

    return (
        <ThemeProvider theme={theme}>
        <div className="cartContainer">
            <h3>Mi Aprendizaje</h3>
            {
            learningsOrdered.length > 0 ?
            learningsOrdered.map(curso => (
            
              <div className="learningList" key ={curso.id} >
                 <Card className="root">
                    <div className="details">
                        <img src={curso.img}></img>
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
                        {curso.licencia!="" ? <Button align="right" variant="outlined" color="default">
                            Revocar Licencia
                        </Button> :""}
                        
                        </CardContent>
                        
                    </div>
                </Card>
                
              </div>
             
            ) ): (<div className="progres">  cargando... </div>)
        }
            
        </div>
        </ThemeProvider>
            );
    }

export default  MyLearning;
    