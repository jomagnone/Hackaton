
import ItemDetail from '../components/ItemDetail';
import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import {firestoreFetchOne} from "../utils/firestoreFetch";
import CircularProgress from '@mui/material/CircularProgress';

const  DetailProduct = () => {

        const [dato, setDato] = useState();
        const {idProd} = useParams();

        useEffect(() => {
 
            firestoreFetchOne(idProd)
                .then(result => setDato(result))
                .catch(err => console.log(err))
        }, [idProd]);

        useEffect(() => {
            return (() => {
              setDato();
            })
        }, []);
        
    return (
      <>
        <div className="DetailPoroductsContainter" >
        {(dato) ? <ItemDetail data = {dato} />
        : <div className="fila progres">  <CircularProgress color="primary" /> </div>
         }

        </div>
      </>
    );
  }
  
  export default DetailProduct;