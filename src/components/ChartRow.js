import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.nombre}</td>
                    <td>{props.apellido}</td>
                    <td>{props.email}</td>
                    <td>
                        <ul>
                            {props.productos.map( (producto,i) => 
                                <a target="_blank" href={'http://localhost:3000/products/'+producto.id}  >
                                    <li key={`producto ${i}`}>{producto.nombre}</li>
                                </a>
                            )}
                        </ul>
                    </td>
                    <td>
                        <img src={"http://localhost:3000/images/avatarsUsers/"+props.avatar} width={250}/>
                        
                    </td>
                </tr>
            )
    }
    
        

export default ChartRow;