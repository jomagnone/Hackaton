import * as React from 'react';
import { TableContainer, Table, TableHead, TableBody,TableRow, TableCell,TablePagination,Paper } from '@material-ui/core';
import "../styles/Admin.css";
import Chip from '@material-ui/core/Chip';
import { useState } from 'react';

const Admin = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    

    var data = [
        {id: 1, name: 'Gob', curso: 'Javascript', licencia:'LKOK9P51',fechaAsign: '10/03/2022', vigencia: '10/06/2022', estado: 'Activa' },
        {id: 2, name: 'Buster', curso: 'NodeJS', licencia:'',fechaAsign: '', vigencia: '', estado: ''},
        {id: 3, name: 'George Michael', curso: 'AWS', licencia:'652OPDKCB',fechaAsign: '02/02/2022', vigencia: '30/07/2022', estado: 'Activa'},
        {id: 4, name: 'Mariah Maclachlan', curso: 'Python', licencia:'OPLSKIJSS',fechaAsign: '11/12/2021', vigencia: '11/03/2022', estado: 'VENCIDA'},
        {id: 5, name: 'Gob', curso: 'Javascript', licencia:'LKOK9P51',fechaAsign: '10/03/2022', vigencia: '10/06/2022', estado: 'Activa' },
        {id: 6, name: 'Buster', curso: 'NodeJS', licencia:'54DCDG1P',fechaAsign: '10/01/2022', vigencia: '17/04/2022', estado: 'Activa'},
        {id: 7, name: 'George Michael', curso: 'AWS', licencia:'652OPDKCB',fechaAsign: '02/02/2022', vigencia: '30/07/2022', estado: 'Activa'},
        {id: 8, name: 'Mariah Maclachlan', curso: 'Python', licencia:'OPLSKIJSS',fechaAsign: '11/12/2021', vigencia: '11/03/2022', estado: 'VENCIDA'},
        {id: 9, name: 'Gob', curso: 'Javascript', licencia:'',fechaAsign: '', vigencia: '', estado: '' },
        {id:10, name: 'Buster', curso: 'NodeJS', licencia:'',fechaAsign: '', vigencia: '', estado: ''},
        {id: 11, name: 'George Michael', curso: 'AWS', licencia:'652OPDKCB',fechaAsign: '02/02/2022', vigencia: '30/02/2022', estado: 'VENCIDA'},
        {id: 12, name: 'Mariah Maclachlan', curso: 'Python', licencia:'OPLSKIJSS',fechaAsign: '11/12/2021', vigencia: '11/03/2022', estado: 'VENCIDA'}
      ];

     

    function SortArray(x, y){
        return x.curso.localeCompare(y.curso);
    }
    var dataOrdered = data.sort(SortArray);
    

      const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };

      const calcularCeldaEstado = (estado) => {
      
        if (estado != "" )
        { return(<Chip label={estado} color={ 
           estaActiva(estado) ?
                "primary" : "secondary"
            }
           /> )
        }
        else
        {
            return"";
        }
    }

    const estaActiva = (estado) => {
      
        if (estado == "Activa" )
         return true 
        else
        return false 
    }



    return (
        
        <div className="">
           
           <div className="App">
                <p className="title">Listado de Licencias Asignadas</p>
                <TableContainer component={Paper}>
                    <Table className='licenciesTable' size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow className='headerTable'>
                                <TableCell>Id</TableCell>
                                <TableCell>Nombre</TableCell>
                                <TableCell align="left">Curso</TableCell>
                                <TableCell>Licencia</TableCell>
                                <TableCell align="center">Fecha de Asignación</TableCell>
                                <TableCell align="center">Vigencia</TableCell>
                                <TableCell align="center">Estado</TableCell>
                                <TableCell align="center">Acción</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {dataOrdered.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((celda) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={celda.id}>
                                    <TableCell key={celda.id} >{celda.id}</TableCell>
                                    <TableCell>{celda.name}</TableCell>
                                    <TableCell  align="left">{celda.curso}</TableCell>
                                    <TableCell>{celda.licencia}</TableCell>
                                    <TableCell align="center">{celda.fechaAsign}</TableCell>
                                    <TableCell align="center" >{celda.vigencia}</TableCell>
                                    <TableCell align="center">{calcularCeldaEstado(celda.estado)}</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                                    )})}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={dataOrdered.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </div>
        </div>
            );
    }

export default  Admin;
    