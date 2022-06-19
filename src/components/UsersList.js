import React,{useState, useEffect} from 'react';

import ChartRow from './ChartRow';


function UsersList (){
    
    const [totalUsers, setTotalUsers] = useState([])


    useEffect(()=>{
        
        // fetch al total de productos
        fetch("http://localhost:3000/api/usersC")
        .then(res => res.json())
        .then(api =>{
            console.log(api)
            setTotalUsers(api.data.usuarios)

        })
    },[])
    let chartProps= totalUsers;
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Email</th>
                                <th>Productos</th>
                                <th>Avatar</th>

                            </tr>
                        </thead>

                        <tbody>
                            {
                            chartProps.map( ( row , i) => {
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

export default UsersList;