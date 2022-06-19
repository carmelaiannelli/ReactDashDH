import React,{useState, useEffect} from 'react';

import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */



function ContentRowMovies(){
    
    const [totalProducts, setTotalProducts] = useState(0)
    const [totalUsers, setTotalUsers] = useState(0)
    const [totalCategorias, setTotalCategorias] = useState(0)


    useEffect(()=>{
        
        // fetch al total de productos
        fetch("http://localhost:3000/api/products")
        .then(res => res.json())
        .then(data =>{
            setTotalProducts(data.total)
        })

        // fetch al total de usuarios
        fetch("http://localhost:3000/api/users")
        .then(res => res.json())
        .then(data =>{
            setTotalUsers(data.total)
        })

        //fetch a total categorias
        fetch("http://localhost:3000/api/categorias")
        .then(res => res.json())
        .then(data =>{
          setTotalCategorias(data.total)
        })
        
    },[])

    /* <!-- Productos in DB --> */

    let productsInDB = {
        title: 'Cantidad total de productos',
        color: 'primary', 
        cuantity: totalProducts,
        icon: 'fa-clipboard-list'
    }

    /* <!-- Total usuarios --> */

    let usersInDB = {
        title:' usuarios registrados', 
        color:'success', 
        cuantity: totalUsers,
        icon:'fa-award'
    }

    /* <!-- Actors quantity --> */

    let categoriasInDB = {
        title:'total de categorias' ,
        color:'warning',
        cuantity:totalCategorias,
        icon:'fa-user-check'
    }

    let cartProps = [productsInDB, usersInDB, categoriasInDB];

   




    return (
    
        <div className="row">
            
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;