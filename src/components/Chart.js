import React,{useState, useEffect} from 'react';

import ChartRow from './ChartRow';

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
        Categories: ['Drama','Comedia'],
        Awards: 2
    },
    {
        Title: 'Alicia en el país de las maravillas',
        Length: '142',
        Rating: '4.8',
        Categories: ['Drama','Acción','Comedia'],
        Awards: 3
    },
    
]


function Chart (){
    
    const [totalProducts, setTotalProducts] = useState(0)


    useEffect(()=>{
        
        // fetch al total de productos
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data =>{
            setTotalProducts(data.data.productos)

        })
        
    },[])

    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Marca</th>
                                <th>Descripcion</th>
                                <th>Precio</th>

                            </tr>
                        </thead>
                        {/* <tfoot>
                            <tr>
                                <th>Título</th>
                                <th>Duración</th>
                                <th>Rating</th>
                                <th>Género</th>
                                <th>Premios</th>
                            </tr>
                        </tfoot> */}
                        <tbody>
                            {
                            tableRowsData.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;