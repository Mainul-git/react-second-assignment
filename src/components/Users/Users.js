

import React from 'react';
import {Button } from '@material-ui/core'
import {Link} from 'react-router-dom'
const Users = (props) => {
   const {id,title,body}=props.users
    return (
        <div>
            <h1>Id:{id}</h1>
    <h1>Title:{title}</h1>
    <h1>Description:{body}</h1>
   <Link to ={`/posts/${id}`}><Button color="primary" variant="contained">See more</Button> </Link> 
            
        </div>
    );
};

export default Users;