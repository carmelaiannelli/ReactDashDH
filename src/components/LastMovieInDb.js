import React,{useState, useEffect} from 'react';

function LastMovieInDb(){

    const [lastProduct, setLastProduct] = useState(0)

    useEffect(()=>{
   
        // fetch a ultimo producto en db
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data =>{
            let objeto = data.data.productos;
            let ultimo =data.data.productos.length - 1 ; 
            setLastProduct(objeto[ultimo])
            console.log((objeto[ultimo]))
        })

    },[])

    

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo producto cargado </h5>
                </div>
                <div className="card-body">
                    <h2>
                        {lastProduct.nombre} marca {lastProduct.marca}
                    </h2>
                    <div>
                        {lastProduct.descripcion}
                    </div>

                    <img src={'http://localhost:3000'+lastProduct.foto} />
                    <a className="btn btn-danger" target="_blank" rel="nofollow" href={'http://localhost:3000/products/' +lastProduct.id} >View movie detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
