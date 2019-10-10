import React from 'react';
import './Contact.css'



const Contact = (props) =>  {
    return (
        <div className='Contact'>
            <img className='avatar' src={props.avatar} alt='random img'/>
            <div>
                <h4 className='name'>{props.name}</h4>
                <div className='status'>
                    <div className='status-text'>    
                        <span className= {props.online ?'status-online':'status-offline'}></span>
                        {props.online ?'online':'offline'}
                    </div>
                </div>
                
            </div>
        </div>

    )
        

    
}

export default Contact;