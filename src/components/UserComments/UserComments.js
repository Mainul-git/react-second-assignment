import React from 'react';
import './UserComments.css';
const UserComments = (props) => {
    const{name,email,body}=props.comments
    return (<div>
         <div className="comment-image-container" >
           <div className='image-container' >
            <img src="https://iili.io/2HZvUb.th.png" alt=""/>
        </div >
        <div className="comment-container">
        <h1>Name:</h1><h4 style={{color:'rgb(154, 150, 158)'}}>{name}</h4>
 <h1>Email:</h1><h4 style={{color:'rgb(154, 150, 158)'}}>{email}</h4>
         <h1>Comment:</h1><h4 style={{color:'rgb(154, 150, 158)'}}>{body}</h4>
        </div></div>
       
    </div>
      
          
     
    
     
  
    );
};

export default UserComments;