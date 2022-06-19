import React from "react";
import PropTypes from 'prop-types';

function TarjetaGenres(props){
      
  return(
    <div className="card-body">
      <div className="row">
        <div className="col-lg-6 mb-4"> 
          <div className="card bg-dark text-white shadow">              
                  
          <div className="card-body"> 
            {props.nombre.toUpperCase()} : {props.productos.length}
          
          </div>
              
          </div>
        </div>
        
      </div>
    </div>
  )
    
      
    
}

export default TarjetaGenres;
