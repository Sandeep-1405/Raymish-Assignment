import react, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css'


function Home(){
    const [data,setdata] = useState([])
    const [error,seterror] = useState("")

    useEffect(()=>{
        function fetchData(){
            axios.get('http://localhost:3000/')
            .then(res=>{
                console.log(res.data.response)
                setdata(res.data.response)
            })
        }
        fetchData()
    },[])

    function handleDelete(id){
        console.log(id)
        axios.delete('http://localhost:3000/delete',{id})
        .then(res=>{
            seterror("Deleted Successfully")
        })
        .catch(error=>console.log(error))
    }

    return(
        <div>
            <h1>Events</h1>
            <Link to="/add-event" className='btn btn-success'>+Add Event</Link>
            <div className='d-flex justify-content-center'>
                {data.map(Details=>(
                    <div key={Details._id} className='shadow m-3 p-3 '>
                        <h6>{Details.name}</h6>
                        <p>{Details.category}</p>
                        <p>{Details.description}</p>
                        <a href={Details.website} className='m-2'>Portfolio</a>
                        <br/>
                        <a href={Details.googleMapsLink} className='m-2'>Location</a>
                        <br/>
                        <a href={Details.instagramLink} className='m-2'>InstagramLink</a>
                        <p>{Details.locality}</p>
                        <p>{Details.city}</p>
                        
                        <div>
                            <Link to={`update/${Details._id}`} className='btn btn-primary m-3'>Update</Link>
                            <button className='btn btn-danger m-3' onClick={()=>(handleDelete(Details._id))}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <p>{error}</p>
        </div>
    )
}

export default Home