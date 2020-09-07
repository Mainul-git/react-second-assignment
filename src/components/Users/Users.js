

import React from 'react';
import {Button,Container } from '@material-ui/core'
import {Link} from 'react-router-dom'
const Users = (props) => {
   const {id,title,body}=props.users
    return (
        <div><Container maxwidth="md" style={{border:'1px solid gray',marginTop:'4px',marginBottom:'3px',paddingBottom:'10px',backgroundColor:'yellow'}}>
              <h1 >ID:</h1><h4 style={{color:'#b1b8ab'}}>{id}</h4>
    <h1>TITLE:</h1><h4 style={{color:'#b1b8ab'}}>{title}</h4>
    <h1>DESCRIPTION:</h1> <h4 style={{color:'#b1b8ab'}}>{body}</h4>
    
   
              
              
   <Link to ={`/posts/${id}`}><Button color="primary" variant="contained">See more</Button> </Link> 
            
        </Container>
         
        </div>
    );
};

export default Users;