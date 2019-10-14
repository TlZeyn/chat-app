import React from 'react';
import './Contact.css'



// function Contact (props) {
//     return (
//         <div className='Contact'>
//             <img className='avatar' src={props.avatar} alt='random img'/>
//             <div>
//                 <h4 className='name'>{props.name}</h4>
//                 <div className='status'>
//                     <div className='status-text'>    
//                         <span className= {props.online ?'status-online':'status-offline'}></span>
//                         {props.online ?'online':'offline'}
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )   
// }

class Contact extends React.Component {
    state = {
        online : false
    }

    handleClick = (event) => {
        this.setState ({
            online: !this.state.online
        })
    }

    render() {
        return (

            <div className='Contact'>
                <img className='avatar' src={this.avatar} alt='random img' />
                <div>
                    <h4 className='name'>{this.name}</h4>
                    <div className='status'>
                        <div className='status-text' onClick ={this.handleClick}>
                            <span className={this.state.online ? 'status-online' : 'status-offline'}></span>
                            {this.state.online? 'online' : 'offline'}
                        </div>
                    </div>

                </div>
            </div>

        )
    }
}

export default Contact;