import * as React from 'react';



const MyLearning = () => {
   const myLearnings = [
        {id: 1, usuario: 'u176848', curso: 'Javascript', licencia:'LKOK9P51',fechaAsign: '10/03/2022', vigencia: '10/06/2022', estado: 'Activa' },
        {id: 2, usuario: 'u176848', curso: 'NodeJS', licencia:'JPTR251D',fechaAsign: '15/01/2022', vigencia: '30/03/2022', estado: 'Activa' },
        {id: 3, usuario: 'u176848', curso: 'AWS', licencia:'',fechaAsign: '', vigencia: '', estado: '' },
    
   ]

   
   function SortArray(x, y){
    return x.curso.localeCompare(y.curso);
}
var learningsOrdered = myLearnings.sort(SortArray);

    return (

        <div className="cartContainer">
            <h3>Mi Aprendizaje</h3>

        </div>
            );
    }

export default  MyLearning;
    