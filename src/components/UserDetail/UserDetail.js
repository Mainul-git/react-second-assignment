import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import UserComments from '../UserComments/UserComments';
import './UserDetail.css'
import { Container } from '@material-ui/core';

const UserDetail = () => {
    const {userId}=useParams()
    const[userDetails,setUserDetails]=useState({})
    const[userComments,setUserComments]=useState([])
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`)
        .then(res=>res.json())
        .then(data=>setUserDetails(data))
    },[])
    useEffect(()=>{
fetch(`https://jsonplaceholder.typicode.com/comments?postId=${userId}`)
.then(res=>res.json())
.then(data=>setUserComments(data))
    },[])
    return (<div>
        <Container maxwidth="md">
         <div className="upper-comment-area">
          < h1>Title:</h1><h4>{userDetails.title}</h4> 
          <h1>Description:</h1><h4>{userDetails.body}</h4>
          </div>
     
          <div > 
          {
              userComments.map(comments=><UserComments comments={comments}></UserComments>)
          }
        </div>
        </Container>
          </div>
       
    
       
    );
};

export default UserDetail;