import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const UserDetail = () => {
    const {userId}=useParams()
    const[userDetails,setUserDetails]=useState({})
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res=>res.json())
        .then(data=>setUserDetails(data))
    },[])
    return (
        <div>
          < h4>Title:{userDetails.title}</h4> 
          <h4>Description:{userDetails.body}</h4>
        </div>
    );
};

export default UserDetail;