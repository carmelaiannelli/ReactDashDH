import React,{useState, useEffect} from 'react';
import TarjetaGenres from './TarjetaGenres';


function LastMovieInDb() {

  const [totalCategorias, setTotalCategorias] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(()=>{

    //FETCH A TODAS LAS CATEGORIAS. DEVUELVE NOMBRES
    fetch("http://localhost:3000/api/categorias")
    .then(res => res.json())
    .then(data =>{
      setTotalCategorias(data.data.categorias)
    })
    // estructura totalcategorias= [{id: valor, nombre:valor, productos:valor}]


  },[])





  

  return (
    
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800" >
            Categorias de productos
          </h5>
        </div>

        {totalCategorias.map((elemento,i)=>{

          return <TarjetaGenres {...elemento} key={i} />

        })}
        
        
      </div>
    </div>
  )
}

export default LastMovieInDb;
